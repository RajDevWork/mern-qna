[⬅ Back to Index](./README.md)

## 🌐 Node + Express (221-310)

221. Node.js kya hai?

`Hinglish Explanation:`

Node.js Chrome V8 engine par based JavaScript runtime hai jo JavaScript ko browser ke bahar run karne deta hai. Ye event-driven aur non-blocking architecture use karta hai, isliye scalable backend applications ke liye suitable hai.

`Interview Answer:`

Node.js is a JavaScript runtime built on Chrome's V8 engine. It uses an event-driven, non-blocking I/O model, making it efficient for building scalable server-side applications.

Example:

```javascript
console.log("Hello Node.js");
```

---

222. Event loop Node mein?

`Hinglish Explanation:`

Event Loop Node.js ka heart hai jo JavaScript ko single-threaded hote hue bhi asynchronous aur non-blocking banaata hai.

JavaScript ek time par sirf ek hi task execute kar sakta hai, kyunki uske paas ek hi Call Stack hota hai.

Jab koi asynchronous task aata hai, jaise:

setTimeout()
File Read (fs.readFile())
Database Query
API Call
Network Request

to JavaScript uske complete hone ka wait nahi karta.

Instead:

Async task ko libuv/OS ko de deta hai.
JavaScript next line execute karta rehta hai.
Jab async operation complete ho jata hai, uska callback Callback Queue (ya appropriate queue) me chala jata hai.
Event Loop continuously check karta rehta hai ki Call Stack empty hai ya nahi.
Jaise hi Call Stack empty hota hai, Event Loop queue se callback uthakar Call Stack me bhej deta hai aur callback execute ho jata hai.

Isi wajah se Node.js ek hi thread par thousands of concurrent requests efficiently handle kar pata hai.

`Interview Answer:`

The Event Loop is the core mechanism of Node.js that enables JavaScript to perform asynchronous and non-blocking operations while running on a single thread.

When an asynchronous operation such as a timer, file read, database query, or API request is encountered, Node.js delegates it to libuv or the operating system instead of blocking the main thread. Once the operation completes, its callback is placed into the appropriate queue. The Event Loop continuously monitors the Call Stack, and whenever it becomes empty, it moves the pending callback from the queue to the Call Stack for execution.

This architecture allows Node.js to efficiently handle a large number of concurrent I/O operations without creating a separate thread for each request.

Example:
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
Output:
Start
End
Timer
Explanation:
console.log("Start") executes immediately.
setTimeout() is delegated to libuv.
console.log("End") executes immediately.
After the timer expires, its callback is placed in the Timer Queue.
The Event Loop waits until the Call Stack is empty, then moves the callback to the stack.
Finally, "Timer" is printed.
Event Loop Flow
Code
  │
  ▼
Call Stack
  │
  ├── Synchronous Code → Execute Immediately
  │
  └── Asynchronous Code
          │
          ▼
      libuv / OS
          │
          ▼
   Callback Queue
          │
          ▼
     Event Loop
          │
(Call Stack Empty?)
          │
         Yes
          │
          ▼
Execute Callback
```

---

223. Non-blocking I/O?

`Hinglish Explanation:`

Non-blocking I/O me application kisi operation ke complete hone ka wait nahi karti. Request process hoti rehti hai aur result aane par callback execute hota hai.

`Interview Answer:`

Non-blocking I/O allows Node.js to continue executing other tasks while waiting for I/O operations such as file reads or database queries to complete.

Example:

```javascript
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
```

---

224. Streams kya hain?

  `Hinglish Explanation:`

  Streams Node.js ka ek mechanism hai jo large amount of data ko ek hi baar memory me load karne ke bajay, chhote-chhote chunks (pieces) me process karta hai.

  Agar koi 1 GB ki file read karni ho aur hum fs.readFile() use karein, to poori file ek saath memory me load hogi, jisse memory usage bahut badh sakta hai aur application slow ya crash bhi ho sakti hai.

  Streams is problem ko solve karte hain.

  Ye data ko chunk by chunk read ya write karte hain, jisse:

  Memory efficient hota hai.
  Performance better hoti hai.
  Large files aur real-time data ko easily handle kiya ja sakta hai.

  Streams ka use commonly hota hai:

  Large file reading/writing
  Video & audio streaming
  File uploads/downloads
  HTTP request/response
  Data transfer between services
  `Interview Answer:`

  Streams are objects in Node.js that allow data to be processed incrementally in small chunks instead of loading the entire data into memory at once.

  They are designed for handling large files, network communication, and real-time data efficiently. Since streams process data chunk by chunk, they reduce memory consumption and improve application performance.

  Node.js provides built-in stream support, making it ideal for file handling, HTTP communication, and data pipelines.

  Types of Streams
  1. Readable Stream

  Used to read data.

  Examples:

  Reading files
  Reading HTTP requests
  Reading data from a socket
  const fs = require("fs");

  const stream = fs.createReadStream("largeFile.txt");

  stream.on("data", (chunk) => {
      console.log(chunk.toString());
  });
  2. Writable Stream

  Used to write data.

  Example:

  const fs = require("fs");

  const stream = fs.createWriteStream("output.txt");

  stream.write("Hello ");
  stream.write("World");
  stream.end();
  3. Duplex Stream

  Can read and write data.

  Examples:

  TCP Socket
  Network connections
  4. Transform Stream

  Can read, modify, and write data.

  Examples:

  Compression (zlib)
  Encryption
  Data formatting

  Example:

  const fs = require("fs");
  const zlib = require("zlib");

  fs.createReadStream("input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"));

  Here:

  Read data
  Compress it
  Write compressed data

  All without loading the complete file into memory.

  Example

  Without Stream ❌

  const fs = require("fs");

  fs.readFile("largeFile.txt", (err, data) => {
      console.log(data.length);
  });

  Problem:

  Entire file loads into RAM.
  High memory usage for large files.

  With Stream ✅

  const fs = require("fs");

  const stream = fs.createReadStream("largeFile.txt");

  stream.on("data", (chunk) => {
      console.log(chunk.length);
  });

  Here:

  File is read in chunks.
  Lower memory consumption.
  Better performance.
  Stream Flow
  Large File
      │
      ▼
  Readable Stream
      │
      ▼
  Chunk 1
  Chunk 2
  Chunk 3
  Chunk 4
      │
      ▼
  Process Data
      │
      ▼
  Writable Stream
  pipe() Method

  pipe() directly connects one stream to another.

  const fs = require("fs");

  const readStream = fs.createReadStream("input.txt");
  const writeStream = fs.createWriteStream("output.txt");

  readStream.pipe(writeStream);

  Benefits:

  No manual chunk handling
  Cleaner code
  Better performance
  Automatic backpressure handling
  Advantages of Streams
  Memory efficient
  Faster processing for large files
  Suitable for real-time data
  Handles large datasets efficiently
  Supports piping between streams
  Built-in backpressure management
  Interview Tips
  Streams process data chunk by chunk, not all at once.
  They are memory efficient because they don't load the entire file into RAM.
  There are 4 types of streams:
  Readable
  Writable
  Duplex
  Transform
  pipe() is commonly used to connect streams efficiently.
  Streams are widely used in file systems, HTTP servers, file uploads/downloads, video streaming, and compression.
  One-Line Interview Answer

  "Streams in Node.js are objects that process data in small chunks instead of loading the entire data into memory, making them highly memory-efficient and ideal for handling large files, network communication, and real-time data processing."
---

225. Buffers kya hain?

`Hinglish Explanation:`

Buffer raw binary data ko temporarily memory me store karta hai. Streams aur file operations me Buffer ka use hota hai.

`Interview Answer:`

A Buffer is a temporary memory area used to store binary data before processing or transmission.

Example:

```javascript
const buffer = Buffer.from("Hello");
```

---

226. Modules system?

`Hinglish Explanation:`

Modules code ko reusable aur maintainable banate hain. Node.js CommonJS aur ES Modules dono support karta hai.

`Interview Answer:`

The module system allows code organization into reusable files. Node.js supports both CommonJS and ES Modules.

Example:

```javascript
module.exports = add;
```

---

227. require vs import?

`Hinglish Explanation:`

`require()` CommonJS module system ka part hai, jabki `import` ES Modules ka. Modern applications me mostly import/export use hota hai.

`Interview Answer:`

`require` is used in CommonJS modules, whereas `import` is used in ES Modules and supports static analysis.

Example:

```javascript
const express = require("express");

// OR

import express from "express";
```

---

228. npm kya hai?

`Hinglish Explanation:`

npm (Node Package Manager) packages install, update aur manage karne ke liye use hota hai. Ye Node.js ke saath by default aata hai.

`Interview Answer:`

npm is the default package manager for Node.js used to install, manage, and publish JavaScript packages.

Example:

```bash
npm install express
```

---

229. package.json kya hai?

`Hinglish Explanation:`

package.json project metadata, dependencies, scripts aur configuration store karta hai. Ye Node.js project ka main configuration file hota hai.

`Interview Answer:`

package.json is a configuration file that contains project information, dependencies, scripts, and package metadata.

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0"
}
```

---

230. process object?

`Hinglish Explanation:`

Process object current Node.js process ki information aur control provide karta hai. Isse environment variables aur process events access kiye ja sakte hain.

`Interview Answer:`

The process object provides information and control over the current Node.js process, including environment variables and runtime details.

Example:

```javascript
console.log(process.env.NODE_ENV);
```

---

231. Middleware kya hai?

`Hinglish Explanation:`

Middleware request aur response ke beech execute hone wala function hota hai. Ye logging, validation aur authentication ke liye use hota hai.

`Interview Answer:`

Middleware functions have access to the request, response, and next function, allowing them to process requests before reaching route handlers.

Example:

```javascript
app.use((req, res, next) => {
  next();
});
```

---

232. Express kya hai?

`Hinglish Explanation:`

Express Node.js ka popular web framework hai jo routing, middleware aur API development ko simple banata hai.

`Interview Answer:`

Express is a lightweight web framework for Node.js that simplifies routing, middleware handling, and API development.

Example:

```javascript
const express = require("express");
const app = express();
```

---

233. Routing kaise hoti hai?

`Hinglish Explanation:`

Routing URL aur HTTP method ke basis par request ko specific handler tak pahunchati hai.

`Interview Answer:`

Routing maps incoming requests to specific controller functions based on URL patterns and HTTP methods.

Example:

```javascript
app.get("/users", (req, res) => {
  res.send("Users");
});
```

---

234. Error handling middleware?

`Hinglish Explanation:`

Express me error handling middleware application errors ko centrally manage karta hai. Iska signature 4 parameters wala hota hai.

`Interview Answer:`

Error-handling middleware catches application errors and returns standardized error responses.

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

---

235. Custom middleware?

`Hinglish Explanation:`

Custom middleware application-specific logic implement karne ke liye banaya jata hai, jaise authentication ya request logging.

`Interview Answer:`

Custom middleware contains reusable request-processing logic that can be applied across routes.

Example:

```javascript
function logger(req, res, next) {
  console.log(req.url);
  next();
}
```

---

236. Request lifecycle?

`Hinglish Explanation:`

Request client se server tak aati hai, middleware se pass hoti hai, route handler execute hota hai aur finally response return hota hai.

`Interview Answer:`

A request passes through middleware, reaches the route handler, generates a response, and is then sent back to the client.

Example:

```text
Request
→ Middleware
→ Route
→ Response
```

---

237. REST API kya hai?

`Hinglish Explanation:`

REST API HTTP methods aur resources ke basis par client-server communication ka standard architecture hai.

`Interview Answer:`

REST is an architectural style that uses HTTP methods and resource-based URLs to perform operations on data.

Example:

```http
GET /users
POST /users
```

---

238. CRUD API kaise banate ho?

`Hinglish Explanation:`

CRUD API me Create, Read, Update aur Delete operations implement kiye jate hain using HTTP methods.

`Interview Answer:`

CRUD APIs expose endpoints for creating, retrieving, updating, and deleting resources using standard HTTP methods.

Example:

```javascript
POST   /users
GET    /users
PUT    /users/:id
DELETE /users/:id
```

---

239. Validation kaise karte ho?

`Hinglish Explanation:`

Validation ensure karti hai ki incoming request data expected format aur rules follow kare. Express-validator ya Joi commonly use hote hain.

`Interview Answer:`

Validation verifies incoming data before processing it to ensure correctness, security, and data integrity.

Example:

```javascript
if (!email) {
  return res.status(400).send();
}
```

---

240. File upload?

`Hinglish Explanation:`

Node.js me file upload ke liye commonly Multer middleware use kiya jata hai. Uploaded files ko local storage ya cloud storage me save kiya ja sakta hai.

`Interview Answer:`

File uploads are typically handled using middleware such as Multer, which processes multipart/form-data requests.

Example:

```javascript
const upload = multer({
  dest: "uploads/"
});
```

241. Authentication?

`Hinglish Explanation:`

Authentication user ki identity verify karne ka process hai. Commonly username-password, JWT, OAuth ya social login use karke authentication implement ki jati hai.

`Interview Answer:`

Authentication is the process of verifying a user's identity before granting access to an application or resource.

Example:

```javascript
const user = await User.findOne({ email });

if (user && isValidPassword) {
  // Authenticated
}
```

---

242. Authorization?

`Hinglish Explanation:`

Authorization determine karta hai ki authenticated user kya actions perform kar sakta hai. Ye roles aur permissions ke basis par decide hota hai.

`Interview Answer:`

Authorization determines what resources or actions an authenticated user is allowed to access.

Example:

```javascript
if (user.role !== "admin") {
  return res.status(403).send();
}
```

---

243. JWT kaise kaam karta hai?

`Hinglish Explanation:`

JWT me server login ke baad signed token generate karta hai. Client token ko store karta hai aur har request me bhejta hai verification ke liye.

`Interview Answer:`

JWT (JSON Web Token) is a signed token used to securely transmit user information and authenticate requests without maintaining server-side sessions.

Example:

```javascript
const token = jwt.sign(
  { id: user.id },
  SECRET
);
```

---

244. OAuth kya hai?

`Hinglish Explanation:`

OAuth ek authorization framework hai jo users ko third-party applications ko limited access dene ki permission deta hai bina password share kiye.

`Interview Answer:`

OAuth is an authorization protocol that allows applications to access user resources on behalf of a user without exposing credentials.

Example:

```javascript
passport.authenticate("google");
```

---

245. Sessions vs Tokens?

`Hinglish Explanation:`

Session-based auth me data server par store hota hai, jabki token-based auth me information token ke andar hoti hai. JWT stateless authentication ka example hai.

`Interview Answer:`

Sessions store user state on the server, while tokens store authentication data on the client and are validated on each request.

Example:

```javascript
req.session.user = user;
```

---

246. Cookies handling?

`Hinglish Explanation:`

Cookies client browser me small data store karti hain. Authentication, preferences aur session management ke liye use hoti hain.

`Interview Answer:`

Cookies are small pieces of data stored in the browser and commonly used for session tracking and authentication.

Example:

```javascript
res.cookie("token", jwtToken);
```

---

247. Rate limiting?

`Hinglish Explanation:`

Rate limiting API abuse aur DDoS attacks prevent karne ke liye requests ki limit define karta hai.

`Interview Answer:`

Rate limiting restricts the number of requests a client can make within a specified time window.

Example:

```javascript
app.use(rateLimit({
  max: 100
}));
```

---

248. Helmet kya hai?

`Hinglish Explanation:`

Helmet Express middleware hai jo security-related HTTP headers set karta hai aur common vulnerabilities se protection provide karta hai.

`Interview Answer:`

Helmet is an Express middleware that improves application security by setting various HTTP security headers.

Example:

```javascript
app.use(helmet());
```

---

249. Logging kaise karte ho?

`Hinglish Explanation:`

Logging application activities, requests aur errors track karne ke liye use hoti hai. Winston aur Pino popular logging libraries hain.

`Interview Answer:`

Logging helps monitor application behavior, track errors, and troubleshoot issues in production environments.

Example:

```javascript
logger.info("Server started");
```

---

250. Morgan kya hai?

`Hinglish Explanation:`

Morgan Express middleware hai jo HTTP requests ko automatically log karta hai.

`Interview Answer:`

Morgan is an HTTP request logger middleware for Express that records incoming requests and responses.

Example:

```javascript
app.use(morgan("combined"));
```

---

251. Clustering kya hai?

`Hinglish Explanation:`

Clustering multiple Node.js processes create karta hai jo CPU cores ka better utilization karte hain aur application throughput improve karte hain.

`Interview Answer:`

Clustering allows Node.js applications to spawn multiple worker processes to utilize multi-core CPUs efficiently.

Example:

```javascript
cluster.fork();
```

---

252. Worker threads?

`Hinglish Explanation:`

Worker Threads CPU-intensive tasks ko separate threads me execute karte hain taaki main event loop block na ho.

`Interview Answer:`

Worker Threads enable parallel execution of CPU-heavy tasks without blocking the main Node.js event loop.

Example:

```javascript
const worker =
  new Worker("./worker.js");
```

---

253. Load balancing?

`Hinglish Explanation:`

Load balancing incoming traffic ko multiple application instances me distribute karta hai jisse performance aur availability improve hoti hai.

`Interview Answer:`

Load balancing distributes incoming requests across multiple servers or instances to improve scalability and reliability.

Example:

```text
Client
→ Load Balancer
→ App Servers
```

---

254. Scaling Node app?

`Hinglish Explanation:`

Node.js applications ko horizontal scaling, clustering, caching aur load balancing ke through scale kiya ja sakta hai.

`Interview Answer:`

Node.js applications can be scaled horizontally by running multiple instances behind a load balancer.

Example:

```text
App1
App2
App3
```

---

255. Microservices Node mein?

`Hinglish Explanation:`

Microservices architecture me application ko multiple independent services me divide kiya jata hai jo independently deploy aur scale ki ja sakti hain.

`Interview Answer:`

Microservices are independently deployable services that communicate over APIs or messaging systems.

Example:

```text
User Service
Order Service
Payment Service
```

---

256. GraphQL kya hai?

`Hinglish Explanation:`

GraphQL API query language hai jo client ko required fields specify karne deta hai. Isse over-fetching aur under-fetching reduce hoti hai.

`Interview Answer:`

GraphQL is a query language for APIs that allows clients to request exactly the data they need.

Example:

```graphql
{
  user {
    name
  }
}
```

---

257. REST vs GraphQL?

`Hinglish Explanation:`

REST multiple endpoints use karta hai, jabki GraphQL generally single endpoint use karta hai aur client-specific data fetch karta hai.

`Interview Answer:`

REST exposes multiple resource-based endpoints, whereas GraphQL provides a single endpoint with flexible querying capabilities.

Example:

```text
REST     → /users
GraphQL  → /graphql
```

---

258. API versioning?

`Hinglish Explanation:`

API versioning backward compatibility maintain karne ke liye use hoti hai jab APIs me breaking changes introduce kiye jate hain.

`Interview Answer:`

API versioning allows changes to APIs without breaking existing clients by maintaining multiple API versions.

Example:

```http
/api/v1/users
/api/v2/users
```

---

259. Pagination?

`Hinglish Explanation:`

Pagination large datasets ko smaller chunks me divide karti hai taaki response size aur database load reduce ho.

`Interview Answer:`

Pagination limits the amount of data returned per request, improving performance and user experience.

Example:

```javascript
GET /users?page=1&limit=10
```

---

260. Filtering & sorting?

`Hinglish Explanation:`

Filtering required records select karti hai aur sorting results ko specific order me arrange karti hai.

`Interview Answer:`

Filtering narrows down results based on conditions, while sorting arranges records in a specified order.

Example:

```javascript
GET /users?role=admin&sort=name
```

261. Redis integration?

`Hinglish Explanation:`

Redis ek in-memory data store hai jo caching, sessions aur pub/sub systems ke liye use hota hai. Ye database load reduce karta hai aur application performance improve karta hai.

`Interview Answer:`

Redis is an in-memory data store commonly used for caching, session management, and real-time messaging to improve application performance.

Example:

```javascript
const redis = new Redis();

await redis.set("user", "Raj");
```

---

262. Caching strategies?

`Hinglish Explanation:`

Caching frequently used data ko temporary store karti hai taaki repeated database calls avoid ho sakein. Common strategies Cache-Aside, Write-Through aur Write-Back hain.

`Interview Answer:`

Caching strategies reduce latency and database load by storing frequently accessed data closer to the application.

Example:

```javascript
const data =
  await redis.get("users");
```

---

263. Queue system?

`Hinglish Explanation:`

Queue system asynchronous tasks ko process karne ke liye use hota hai. Heavy operations ko background me execute karke application responsiveness improve ki jati hai.

`Interview Answer:`

A queue system manages asynchronous tasks by processing jobs in the background instead of handling them immediately.

Example:

```javascript
await queue.add("send-email", {
  userId: 1
});
```

---

264. Background jobs?

`Hinglish Explanation:`

Background jobs long-running tasks jaise emails, reports ya notifications ko main request cycle se alag process karti hain.

`Interview Answer:`

Background jobs execute time-consuming tasks asynchronously, improving API response times and user experience.

Example:

```javascript
queue.process(async (job) => {
  sendEmail(job.data);
});
```

---

265. Cron jobs?

`Hinglish Explanation:`

Cron jobs scheduled tasks ko predefined intervals par automatically execute karti hain. Jaise daily reports ya database cleanup.

`Interview Answer:`

Cron jobs are scheduled tasks that run automatically at specific times or intervals.

Example:

```javascript
cron.schedule("0 0 * * *", () => {
  cleanup();
});
```

---

266. Email service?

`Hinglish Explanation:`

Node.js me emails send karne ke liye Nodemailer, SendGrid ya AWS SES use kiye jate hain. Production me transactional email services preferred hoti hain.

`Interview Answer:`

Email services allow applications to send notifications, verification emails, and transactional messages.

Example:

```javascript
await transporter.sendMail({
  to: "user@test.com"
});
```

---

267. File storage (S3)?

`Hinglish Explanation:`

Amazon S3 cloud object storage service hai jo files, images aur backups store karne ke liye use hoti hai. Ye scalable aur highly available hai.

`Interview Answer:`

Amazon S3 is a cloud storage service used to store and retrieve files securely and at scale.

Example:

```javascript
await s3.upload({
  Bucket: "uploads"
});
```

---

268. WebSockets?

`Hinglish Explanation:`

WebSockets client aur server ke beech persistent two-way communication provide karte hain. Ye real-time applications ke liye useful hain.

`Interview Answer:`

WebSockets establish a persistent connection between client and server, enabling real-time communication.

Example:

```javascript
ws.send("Hello");
```

---

269. Socket.io?

`Hinglish Explanation:`

Socket.io WebSockets ke upar built library hai jo real-time communication aur automatic reconnection features provide karti hai.

`Interview Answer:`

Socket.io is a real-time communication library that simplifies WebSocket implementation and provides fallback mechanisms.

Example:

```javascript
io.on("connection", socket => {
  console.log("Connected");
});
```

---

270. Real-time apps?

`Hinglish Explanation:`

Real-time applications instantly updates deliver karti hain bina page refresh ke. Chat apps, live dashboards aur multiplayer games common examples hain.

`Interview Answer:`

Real-time applications provide instant updates to users using technologies like WebSockets and Socket.io.

Example:

```javascript
socket.emit("message", data);
```

---

271. Security best practices?

`Hinglish Explanation:`

Input validation, authentication, HTTPS, rate limiting aur secure headers implement karna important security practices hain.

`Interview Answer:`

Security best practices include validating input, using HTTPS, implementing authentication, and protecting against common attacks.

Example:

```javascript
app.use(helmet());
```

---

272. CORS handle kaise?

`Hinglish Explanation:`

CORS browser security policy ko manage karta hai aur different domains ke beech requests allow ya restrict karta hai.

`Interview Answer:`

CORS controls which domains can access server resources and is commonly configured using middleware.

Example:

```javascript
app.use(cors({
  origin: "*"
}));
```

---

273. Input sanitization?

`Hinglish Explanation:`

Input sanitization malicious user input ko clean karti hai taaki XSS aur injection attacks prevent ho sakein.

`Interview Answer:`

Input sanitization removes or escapes unsafe content from user input to improve application security.

Example:

```javascript
const clean =
  validator.escape(input);
```

---

274. SQL/NoSQL injection prevent?

`Hinglish Explanation:`

Parameterized queries, ORM tools aur input validation use karke injection attacks prevent kiye jate hain.

`Interview Answer:`

Injection attacks can be prevented using parameterized queries, input validation, and ORM libraries.

Example:

```javascript
User.findOne({
  email: req.body.email
});
```

---

275. HTTPS setup?

`Hinglish Explanation:`

HTTPS SSL/TLS certificates ke through secure communication provide karta hai. Production applications me HTTPS mandatory hona chahiye.

`Interview Answer:`

HTTPS encrypts communication between clients and servers using SSL/TLS certificates.

Example:

```javascript
https.createServer(
  options,
  app
);
```

---

276. Reverse proxy?

`Hinglish Explanation:`

Reverse proxy client requests ko backend servers tak forward karta hai aur load balancing, SSL termination provide karta hai.

`Interview Answer:`

A reverse proxy sits between clients and servers, forwarding requests while improving security and scalability.

Example:

```text
Client
→ Nginx
→ Node.js
```

---

277. Nginx integration?

`Hinglish Explanation:`

Nginx commonly reverse proxy aur load balancer ke roop me Node.js applications ke saath use hota hai.

`Interview Answer:`

Nginx is often used in front of Node.js applications to handle traffic, SSL termination, and load balancing.

Example:

```nginx
proxy_pass
http://localhost:3000;
```

---

278. Docker Node app?

`Hinglish Explanation:`

Docker application aur dependencies ko container me package karta hai jisse deployment consistent aur portable ban jata hai.

`Interview Answer:`

Docker containers package Node.js applications with their dependencies, ensuring consistent deployment across environments.

Example:

```dockerfile
FROM node:20

WORKDIR /app
```

---

279. Deployment strategies?

`Hinglish Explanation:`

Common deployment strategies me Blue-Green, Rolling aur Canary deployments shamil hain. Ye downtime aur deployment risk reduce karte hain.

`Interview Answer:`

Deployment strategies define how new application versions are released while minimizing downtime and risk.

Example:

```text
Blue → Old Version
Green → New Version
```

---

280. Monitoring tools?

`Hinglish Explanation:`

Monitoring tools application performance, logs aur system health track karte hain. Prometheus, Grafana aur New Relic popular options hain.

`Interview Answer:`

Monitoring tools help track application health, performance metrics, and operational issues in production.

Example:

```text
Prometheus
Grafana
New Relic
```

281. High traffic handle kaise?

`Hinglish Explanation:`

High traffic handle karne ke liye load balancing, caching, database optimization aur horizontal scaling use ki jati hai. Bottlenecks identify karke system ko distribute karna important hota hai.

`Interview Answer:`

High traffic is handled using load balancing, caching, horizontal scaling, and efficient database design to distribute workload across multiple resources.

Example:

```text
Load Balancer
   ↓
App1  App2  App3
```

---

282. Memory leak detect?

`Hinglish Explanation:`

Memory leak tab hoti hai jab unused memory release nahi hoti. Heap snapshots, Chrome DevTools aur monitoring tools use karke leaks identify kiye ja sakte hain.

`Interview Answer:`

Memory leaks can be detected using heap dumps, profiling tools, and monitoring memory usage trends over time.

Example:

```bash
node --inspect app.js
```

---

283. API slow ho toh?

`Hinglish Explanation:`

Slow API ke liye database queries, external services aur code bottlenecks analyze karne chahiye. Caching aur query optimization commonly use ki jati hai.

`Interview Answer:`

When an API is slow, profiling, query optimization, caching, and reducing external dependencies are common solutions.

Example:

```javascript
console.time("API");
console.timeEnd("API");
```

---

284. DB bottleneck?

`Hinglish Explanation:`

Database bottlenecks inefficient queries, missing indexes ya excessive connections ki wajah se aate hain. Query optimization aur indexing important solutions hain.

`Interview Answer:`

Database bottlenecks are addressed through indexing, query optimization, caching, and proper connection management.

Example:

```sql
CREATE INDEX idx_email
ON users(email);
```

---

285. Logging strategy?

`Hinglish Explanation:`

Logging strategy me structured logs, error logs aur audit logs maintain kiye jate hain. Logs centralized system me store karna best practice hai.

`Interview Answer:`

A good logging strategy includes structured logging, centralized storage, log levels, and correlation IDs for traceability.

Example:

```javascript
logger.error(
  "Database connection failed"
);
```

---

286. Retry mechanism?

`Hinglish Explanation:`

Retry mechanism temporary failures ke case me operation ko dubara execute karta hai. Exponential backoff commonly use kiya jata hai.

`Interview Answer:`

A retry mechanism automatically re-attempts failed operations, often using exponential backoff to avoid overwhelming services.

Example:

```javascript
for (let i = 0; i < 3; i++) {
  await retry();
}
```

---

287. Circuit breaker?

`Hinglish Explanation:`

Circuit Breaker failing services ko repeatedly call karne se rokta hai. Ye system stability aur fault tolerance improve karta hai.

`Interview Answer:`

The Circuit Breaker pattern prevents repeated calls to failing services and allows systems to recover gracefully.

Example:

```javascript
breaker.fire(request);
```

---

288. Graceful shutdown?

`Hinglish Explanation:`

Graceful shutdown server ko existing requests complete karne ka time deta hai before process terminate hota hai.

`Interview Answer:`

Graceful shutdown ensures ongoing requests are completed and resources are released before the application exits.

Example:

```javascript
process.on("SIGTERM", () => {
  server.close();
});
```

---

289. Zero downtime deploy?

`Hinglish Explanation:`

Zero downtime deployment me new version deploy hota hai bina users ko service interruption diye. Blue-Green aur Rolling deployments common approaches hain.

`Interview Answer:`

Zero downtime deployment ensures application updates occur without interrupting active users or requests.

Example:

```text
Blue → Current
Green → New Version
```

---

290. Load testing kaise karte ho?

`Hinglish Explanation:`

Load testing application ki performance evaluate karti hai under expected ya high traffic conditions. JMeter aur K6 popular tools hain.

`Interview Answer:`

Load testing measures application performance under varying levels of traffic to identify bottlenecks and capacity limits.

Example:

```bash
k6 run load-test.js
```

---

291. Clustering vs Worker Threads?

`Hinglish Explanation:`

Clustering multiple processes create karta hai, jabki Worker Threads same process ke andar multiple threads run karte hain. CPU-intensive tasks ke liye Worker Threads better hain.

`Interview Answer:`

Clustering scales applications across CPU cores using processes, while Worker Threads enable parallel execution within a single process.

Example:

```javascript
cluster.fork();

// Worker
new Worker("./worker.js");
```

---

292. PM2 kya hai?

`Hinglish Explanation:`

PM2 Node.js process manager hai jo monitoring, clustering aur automatic restarts provide karta hai.

`Interview Answer:`

PM2 is a production process manager for Node.js applications that offers monitoring, clustering, and process recovery.

Example:

```bash
pm2 start app.js
```

---

293. Error monitoring tools?

`Hinglish Explanation:`

Error monitoring tools production issues automatically track aur report karte hain. Sentry aur Rollbar commonly use hote hain.

`Interview Answer:`

Error monitoring tools collect exceptions, stack traces, and diagnostics to help developers identify and resolve production issues.

Example:

```javascript
Sentry.captureException(error);
```

---

294. Health checks?

`Hinglish Explanation:`

Health check endpoints application status verify karte hain. Load balancers aur orchestration systems inka use service availability monitor karne ke liye karte hain.

`Interview Answer:`

Health checks provide endpoints that indicate whether an application is running and ready to serve requests.

Example:

```javascript
app.get("/health", (req, res) => {
  res.send("OK");
});
```

---

295. API documentation?

`Hinglish Explanation:`

API documentation endpoints, request formats aur responses explain karti hai. Swagger/OpenAPI widely used standards hain.

`Interview Answer:`

API documentation describes endpoints, request formats, responses, and authentication requirements for developers.

Example:

```yaml
GET /users
POST /users
```

---

296. GraphQL subscriptions?

`Hinglish Explanation:`

GraphQL Subscriptions real-time updates provide karti hain jab server-side data change hota hai. Ye WebSockets par based hoti hain.

`Interview Answer:`

GraphQL Subscriptions enable real-time communication by pushing updates from the server to connected clients.

Example:

```graphql
subscription {
  newMessage
}
```

---

297. Database connection pooling?

`Hinglish Explanation:`

Connection pooling database connections ko reuse karta hai taaki har request ke liye nayi connection create na karni pade.

`Interview Answer:`

Connection pooling improves performance by maintaining and reusing a pool of database connections.

Example:

```javascript
const pool =
  mysql.createPool(config);
```

---

298. Environment configuration?

`Hinglish Explanation:`

Environment-specific settings jaise database URLs aur secrets ko environment variables me store kiya jata hai.

`Interview Answer:`

Environment configuration separates application settings from code and allows different values for development, testing, and production.

Example:

```javascript
process.env.DB_URL;
```

---

299. API gateway?

`Hinglish Explanation:`

API Gateway client requests ko route karta hai aur authentication, rate limiting aur monitoring handle karta hai.

`Interview Answer:`

An API Gateway acts as a single entry point for clients and manages routing, security, and request aggregation.

Example:

```text
Client
 → API Gateway
 → Services
```

---

300. Message queue (RabbitMQ/Kafka)?

`Hinglish Explanation:`

Message queues asynchronous communication enable karti hain. RabbitMQ task queues ke liye aur Kafka high-throughput event streaming ke liye popular hai.

`Interview Answer:`

Message queues decouple services and enable reliable asynchronous communication between distributed systems.

Example:

```javascript
channel.sendToQueue(
  "orders",
  Buffer.from(data)
);
```

301. Event sourcing?

`Hinglish Explanation:`

Event Sourcing me application current state store karne ke bajay state changes ko events ke form me store karti hai. System ki complete history preserve rehti hai aur state ko events replay karke reconstruct kiya ja sakta hai.

`Interview Answer:`

Event Sourcing is a pattern where all state changes are stored as immutable events. The current state can be rebuilt by replaying those events.

Example:

```javascript
[
  { type: "ACCOUNT_CREATED" },
  { type: "MONEY_DEPOSITED", amount: 1000 }
]
```

---

302. CQRS pattern?

`Hinglish Explanation:`

CQRS (Command Query Responsibility Segregation) me read aur write operations ko separate kar diya jata hai. Isse scalability aur performance improve hoti hai.

`Interview Answer:`

CQRS separates read operations (queries) from write operations (commands), allowing independent optimization of each side.

Example:

```javascript
CreateOrderCommand

GetOrdersQuery
```

---

303. Rate limiting algorithms?

`Hinglish Explanation:`

Rate limiting algorithms requests ko control karte hain taaki abuse aur DDoS attacks prevent ho sakein. Common algorithms Fixed Window, Sliding Window aur Token Bucket hain.

`Interview Answer:`

Rate limiting algorithms restrict request frequency and protect systems from abuse, excessive traffic, and denial-of-service attacks.

Example:

```text
Fixed Window
Sliding Window
Token Bucket
Leaky Bucket
```

---

304. API caching strategies?

`Hinglish Explanation:`

API caching frequently requested responses ko temporarily store karti hai. Isse response time improve hota hai aur database load reduce hota hai.

`Interview Answer:`

API caching stores frequently accessed responses to reduce latency, database load, and overall system resource consumption.

Example:

```javascript
const cached =
  await redis.get("users");
```

---

305. Background job monitoring?

`Hinglish Explanation:`

Background jobs ko monitor karna important hai taaki failed jobs, retries aur processing delays track kiye ja sakein. Bull Board aur Agenda dashboards commonly use hote hain.

`Interview Answer:`

Background job monitoring tracks job execution, failures, retries, and processing metrics to ensure reliability.

Example:

```javascript
job.on("failed", () => {
  logger.error("Job Failed");
});
```

---

306. Log aggregation?

`Hinglish Explanation:`

Log aggregation multiple servers aur services ke logs ko ek centralized platform me collect karti hai. Troubleshooting aur monitoring easier ho jati hai.

`Interview Answer:`

Log aggregation centralizes logs from multiple systems, making analysis, monitoring, and debugging more efficient.

Example:

```text
App Servers
    ↓
 Elasticsearch
    ↓
   Kibana
```

---

307. Distributed tracing?

`Hinglish Explanation:`

Distributed tracing request ka complete journey track karti hai jab wo multiple microservices se pass hoti hai. Isse bottlenecks aur failures identify karna easy hota hai.

`Interview Answer:`

Distributed tracing follows requests across multiple services and helps identify latency issues and failures in distributed systems.

Example:

```text
Request
 → Service A
 → Service B
 → Database
```

---

308. Performance benchmarking?

`Hinglish Explanation:`

Benchmarking application ki performance measure karti hai under specific workloads. Isse throughput, latency aur resource usage evaluate ki jati hai.

`Interview Answer:`

Performance benchmarking measures how an application performs under load by analyzing metrics such as response time and throughput.

Example:

```bash
autocannon \
http://localhost:3000
```

---

309. Security scanning?

`Hinglish Explanation:`

Security scanning vulnerabilities aur insecure dependencies detect karne ke liye use hoti hai. Automated scans development lifecycle ka important part hain.

`Interview Answer:`

Security scanning identifies vulnerabilities, insecure configurations, and dependency risks before they reach production.

Example:

```bash
npm audit
```

---

310. Compliance (GDPR, etc.)?

`Hinglish Explanation:`

Compliance regulations jaise GDPR ensure karti hain ki user data securely handle aur process kiya jaye. Privacy, consent aur data protection requirements follow karna mandatory hota hai.

`Interview Answer:`

Compliance standards such as GDPR require organizations to protect user data, maintain privacy, and implement proper data handling practices.

Example:

```text
User Consent
Data Encryption
Right to Delete Data
```


### Additional Important Questions

1. Explain middleware and the types of middleware in Express.

`Hinglish Explanation:`

Middleware functions request aur response ke beech execute hote hain. Ye request ko modify kar sakte hain, validation kar sakte hain ya next middleware ko control transfer kar sakte hain.

Types: Application Middleware, Router Middleware, Error Middleware, Third-party Middleware.

`Interview Answer:`

Middleware functions have access to the request, response, and next function. They are used for tasks such as logging, authentication, validation, and error handling.

Example:

```javascript
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
```

---

2. How does request and response flow in Express?

`Hinglish Explanation:`

Client request server par aati hai, middleware chain se pass hoti hai, route handler execute hota hai aur finally response client ko return kiya jata hai.

`Interview Answer:`

A request flows through middleware functions, reaches the appropriate route handler, and then a response is sent back to the client.

Example:

```text
Request
→ Middleware
→ Route Handler
→ Response
```

---

3. What is the use of next() in Express?

`Hinglish Explanation:`

`next()` current middleware se control next middleware ya route handler ko transfer karta hai. Agar next call nahi hua to request hang ho sakti hai.

`Interview Answer:`

The `next()` function passes control to the next middleware in the stack. It is essential for continuing request processing.

Example:

```javascript
app.use((req, res, next) => {
  next();
});
```

---

4. How do you implement global error handling?

`Hinglish Explanation:`

Global error handler application ke sabhi errors ko ek centralized place par handle karta hai. Isse consistent error responses milte hain.

`Interview Answer:`

Global error handling is implemented using a middleware with four parameters: error, request, response, and next.

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

---

5. How do you structure a scalable Express application?

`Hinglish Explanation:`

Scalable applications me routes, controllers, services, models aur middleware ko separate folders me organize kiya jata hai.

`Interview Answer:`

A scalable Express application follows separation of concerns by organizing code into routes, controllers, services, models, and middleware.

Example:

```text
src/
├─ routes/
├─ controllers/
├─ services/
├─ models/
```

---

6. How do you secure an Express API (rate limiting, headers)?

`Hinglish Explanation:`

API security ke liye Helmet, Rate Limiting, Input Validation, HTTPS aur Authentication implement ki jati hai.

`Interview Answer:`

Express APIs are secured using rate limiting, HTTP security headers, input validation, authentication, and HTTPS.

Example:

```javascript
app.use(helmet());
app.use(rateLimit());
```

---

7. Explain route parameter vs. query parameter.

`Hinglish Explanation:`

Route parameters resource identify karte hain, jabki query parameters filtering, sorting ya pagination ke liye use hote hain.

`Interview Answer:`

Route parameters are part of the URL path, while query parameters provide optional data for filtering or customization.

Example:

```javascript
/users/10

/users?page=1
```

---

8. What’s the role of CORS in Express and how to configure it?

`Hinglish Explanation:`

CORS browser ko control karta hai ki kaunse domains API access kar sakte hain. Ye cross-origin requests allow ya block karta hai.

`Interview Answer:`

CORS is a browser security mechanism that controls access to resources from different origins.

Example:

```javascript
app.use(cors({
  origin: "https://example.com"
}));
```

---

9. How do you handle file uploads?

`Hinglish Explanation:`

File uploads ke liye Multer middleware commonly use hota hai. Files local storage ya cloud storage me save ki ja sakti hain.

`Interview Answer:`

File uploads are typically handled using Multer, which processes multipart/form-data requests.

Example:

```javascript
const upload = multer({
  dest: "uploads/"
});
```

---

10. How would you implement logging in Express?

`Hinglish Explanation:`

Logging requests, errors aur application events ko track karne ke liye use hoti hai. Morgan aur Winston commonly use hote hain.

`Interview Answer:`

Logging helps monitor application behavior and diagnose issues using tools such as Morgan and Winston.

Example:

```javascript
app.use(morgan("combined"));
```

---

11. What is the use of express-validator?

`Hinglish Explanation:`

express-validator incoming request data validate aur sanitize karne ke liye use hota hai. Ye invalid data ko application tak pahunchne se rokta hai.

`Interview Answer:`

express-validator provides middleware for validating and sanitizing request data before processing.

Example:

```javascript
body("email")
  .isEmail();
```

---

12. How do you prevent SQL/NoSQL injection in Express?

`Hinglish Explanation:`

Input validation, parameterized queries aur ORM tools use karke injection attacks prevent kiye jate hain.

`Interview Answer:`

SQL and NoSQL injections are prevented using input validation, parameterized queries, and ORM/ODM libraries.

Example:

```javascript
User.findOne({
  email: req.body.email
});
```

---

13. What is Helmet and how does it help with security?

`Hinglish Explanation:`

Helmet Express middleware hai jo security-related HTTP headers automatically set karta hai aur common attacks se protection provide karta hai.

`Interview Answer:`

Helmet enhances application security by setting HTTP headers that help mitigate common web vulnerabilities.

Example:

```javascript
app.use(helmet());
```

---

14. How do you handle role-based authorization in Express?

`Hinglish Explanation:`

Role-based authorization me user roles check kiye jate hain aur permissions ke basis par access allow ya deny kiya jata hai.

`Interview Answer:`

Role-based authorization restricts access based on user roles and permissions after successful authentication.

Example:

```javascript
if (user.role !== "admin") {
  return res.status(403);
}
```

---

15. What are virtual routes and when are they useful?

`Hinglish Explanation:`

Virtual routes actual database fields ke bina computed ya derived values expose karte hain. Mongoose virtuals iska common example hain.

`Interview Answer:`

Virtual routes expose computed properties without storing them in the database, improving flexibility and readability.

Example:

```javascript
userSchema.virtual("fullName");
```

---

16. Difference between synchronous and asynchronous middleware.

`Hinglish Explanation:`

Synchronous middleware immediately execute hoti hai, jabki asynchronous middleware promises ya async operations complete hone ka wait karti hai.

`Interview Answer:`

Synchronous middleware executes immediately, while asynchronous middleware handles operations such as database calls or API requests.

Example:

```javascript
app.use(async (req, res, next) => {
  await fetchData();
  next();
});
```

---

17. How do you optimize performance in Express apps?

`Hinglish Explanation:`

Caching, compression, database optimization aur unnecessary middleware removal se performance improve ki ja sakti hai.

`Interview Answer:`

Express performance can be optimized using caching, compression, efficient database queries, and minimizing middleware overhead.

Example:

```javascript
app.use(compression());
```

---

18. What is a proxy in Express and how to set it?

`Hinglish Explanation:`

Proxy client aur server ke beech intermediary layer hoti hai. Express me reverse proxy ke piche deploy karte waqt trust proxy enable karna padta hai.

`Interview Answer:`

A proxy forwards client requests to backend servers. Express supports proxy-aware configurations through trust proxy settings.

Example:

```javascript
app.set(
  "trust proxy",
  true
);
```

---

19. What is the use of app.locals and res.locals?

`Hinglish Explanation:`

app.locals application-wide data store karta hai, jabki res.locals sirf current request lifecycle ke liye data store karta hai.

`Interview Answer:`

app.locals stores global application data, while res.locals stores request-specific data accessible during a single request.

Example:

```javascript
app.locals.appName = "MyApp";

res.locals.user = user;
```

---

20. How can you implement request tracing in Express?

`Hinglish Explanation:`

Request tracing me har request ko unique ID assign ki jati hai taaki distributed systems me request flow track kiya ja sake.

`Interview Answer:`

Request tracing assigns unique identifiers to requests, making debugging and monitoring easier across services.

Example:

```javascript
req.id = uuid();

logger.info(req.id);
```

21. What is the event loop in Node.js and how does it work?

`Hinglish Explanation:`

Event Loop Node.js ka core mechanism hai jo asynchronous operations ko manage karta hai. Jab call stack empty hota hai, Event Loop callback queue se tasks uthakar execute karta hai.

`Interview Answer:`

The Event Loop enables Node.js to perform non-blocking operations by processing callbacks and asynchronous tasks when the call stack becomes empty.

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

---

22. Explain the difference between process.nextTick() and setImmediate().

`Hinglish Explanation:`

`process.nextTick()` current operation complete hote hi execute hota hai, jabki `setImmediate()` next Event Loop iteration me run hota hai.

`Interview Answer:`

`process.nextTick()` has higher priority and executes before the Event Loop continues, whereas `setImmediate()` runs during the next iteration.

Example:

```javascript
process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});
```

---

23. How does Node.js handle asynchronous I/O?

`Hinglish Explanation:`

Node.js asynchronous operations ko background threads me delegate karta hai aur completion ke baad callback ya promise execute karta hai.

`Interview Answer:`

Node.js uses the Event Loop and libuv thread pool to handle asynchronous I/O without blocking the main thread.

Example:

```javascript
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
```

---

24. What are streams and how do you use them?

`Hinglish Explanation:`

Streams data ko chunks me process karte hain instead of loading everything into memory. Ye large files aur real-time data ke liye useful hain.

`Interview Answer:`

Streams allow efficient processing of large amounts of data by reading or writing it in chunks.

Example:

```javascript
const stream =
  fs.createReadStream("file.txt");
```

---

25. How does clustering work in Node.js?

`Hinglish Explanation:`

Clustering multiple Node.js processes create karta hai jo available CPU cores ka use karte hain. Isse application throughput increase hota hai.

`Interview Answer:`

Clustering allows Node.js applications to utilize multiple CPU cores by spawning worker processes.

Example:

```javascript
cluster.fork();
```

---

26. Explain how you’d implement a caching layer in Node.

`Hinglish Explanation:`

Frequently accessed data ko Redis jaise cache me store kiya jata hai. Agar cache me data available ho to database call avoid ki jati hai.

`Interview Answer:`

A caching layer stores frequently used data in memory, reducing database load and improving response times.

Example:

```javascript
const data =
  await redis.get("users");
```

---

27. How do you handle large file uploads efficiently?

`Hinglish Explanation:`

Large files ko streams ke through process karna chahiye taaki poori file memory me load na ho aur memory usage control me rahe.

`Interview Answer:`

Large file uploads should be processed using streams and chunked uploads to minimize memory consumption.

Example:

```javascript
req.pipe(
  fs.createWriteStream("file.txt")
);
```

---

28. What are child processes and how are they used?

`Hinglish Explanation:`

Child Processes separate processes run karne ki facility dete hain. Ye shell commands execute karne ya CPU-intensive tasks isolate karne ke liye use hote hain.

`Interview Answer:`

Child processes allow Node.js to execute external commands or separate workloads outside the main process.

Example:

```javascript
const { exec } =
  require("child_process");
```

---

29. What is the role of buffers in Node.js?

`Hinglish Explanation:`

Buffers binary data ko temporarily memory me store karte hain. Files, streams aur network communication me inka use hota hai.

`Interview Answer:`

Buffers provide a way to work directly with binary data in memory.

Example:

```javascript
const buffer =
  Buffer.from("Hello");
```

---

30. How do you monitor and debug Node.js performance?

`Hinglish Explanation:`

Performance monitor karne ke liye profiling tools, logs, metrics aur APM solutions use kiye jate hain. Bottlenecks identify karke optimize kiya jata hai.

`Interview Answer:`

Node.js performance can be monitored using profiling tools, metrics, logs, and application performance monitoring solutions.

Example:

```javascript
console.time("task");

console.timeEnd("task");
```

---

31. What are worker threads and when would you use them?

`Hinglish Explanation:`

Worker Threads CPU-intensive tasks ko separate threads me run karte hain taaki Event Loop block na ho.

`Interview Answer:`

Worker Threads provide parallel execution for CPU-heavy tasks without blocking the main Node.js thread.

Example:

```javascript
const worker =
  new Worker("./worker.js");
```

---

32. Explain how you’d secure a Node.js application.

`Hinglish Explanation:`

Security ke liye authentication, authorization, HTTPS, input validation aur dependency scanning implement karna zaruri hai.

`Interview Answer:`

Node.js applications are secured using authentication, authorization, HTTPS, input validation, and secure dependency management.

Example:

```javascript
app.use(helmet());
```

---

33. How do you manage environment variables securely?

`Hinglish Explanation:`

Sensitive information jaise API keys aur database credentials environment variables me store karni chahiye, codebase me nahi.

`Interview Answer:`

Environment variables separate configuration from code and help protect sensitive information.

Example:

```javascript
process.env.DB_URL;
```

---

34. What’s the difference between CommonJS and ES modules?

`Hinglish Explanation:`

CommonJS `require` aur `module.exports` use karta hai, jabki ES Modules `import` aur `export` syntax use karte hain.

`Interview Answer:`

CommonJS is the traditional Node.js module system, while ES Modules are the modern JavaScript standard.

Example:

```javascript
const fs = require("fs");

// OR

import fs from "fs";
```

---

35. How do you handle rate limiting in Node.js?

`Hinglish Explanation:`

Rate limiting API abuse aur excessive requests ko control karti hai. Express-rate-limit jaise middleware commonly use kiye jate hain.

`Interview Answer:`

Rate limiting restricts request frequency to protect applications from abuse and denial-of-service attacks.

Example:

```javascript
app.use(rateLimit({
  max: 100
}));
```

---

36. How do you implement JWT authentication in Node.js?

`Hinglish Explanation:`

Login ke baad JWT generate kiya jata hai aur client ko return kiya jata hai. Protected routes par token verify kiya jata hai.

`Interview Answer:`

JWT authentication uses signed tokens to verify user identity without storing session data on the server.

Example:

```javascript
const token = jwt.sign(
  { id: user.id },
  SECRET
);
```

---

37. How does dependency injection work in Node?

`Hinglish Explanation:`

Dependency Injection me dependencies ko class ya function ke andar directly create karne ke bajay outside se provide kiya jata hai.

`Interview Answer:`

Dependency Injection improves modularity and testability by providing dependencies from outside rather than creating them internally.

Example:

```javascript
function UserService(repo) {
  this.repo = repo;
}
```

---

38. What is the role of fs/promises in Node?

`Hinglish Explanation:`

`fs/promises` file operations ko Promise-based API ke through perform karne deta hai, jisse async/await use karna easy ho jata hai.

`Interview Answer:`

The `fs/promises` module provides Promise-based filesystem operations for cleaner asynchronous code.

Example:

```javascript
const data =
  await fs.readFile("file.txt");
```

---

39. How can you prevent memory leaks?

`Hinglish Explanation:`

Unused references remove karna, timers clear karna aur event listeners cleanup karna memory leaks prevent karne ke important steps hain.

`Interview Answer:`

Memory leaks can be prevented by releasing unused resources, cleaning up listeners, and monitoring memory usage.

Example:

```javascript
clearInterval(timer);
```

---

40. How would you implement logging and metrics?

`Hinglish Explanation:`

Logging application events aur errors record karti hai, jabki metrics performance indicators jaise response time aur memory usage measure karte hain.

`Interview Answer:`

Logging captures application events, while metrics track performance and operational health for monitoring and alerting.

Example:

```javascript
logger.info("Server started");

metrics.increment("requests");
```

---

