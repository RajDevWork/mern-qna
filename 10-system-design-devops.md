[⬅ Back to Index](./README.md)

## 🏗️ System Design & DevOps (361-500)

### System Design
361. URL shortener design
362. Chat system
363. Notification system
364. Rate limiter
365. Caching system
366. CDN kya hai
367. Load balancing

    ### Hinglish Explanation:

    **Load Balancing** ek technique hai jisme incoming client requests ko **multiple servers** ke beech distribute kiya jata hai, taaki koi ek server overload na ho.

    Isse:

    * High Availability milti hai.
    * Better Performance milti hai.
    * Scalability improve hoti hai.
    * Agar ek server down ho jaye to traffic dusre server par chala jata hai.

    **Real-Life Example:**

    Socho ek restaurant me sirf **1 waiter** hai aur 100 customers aa gaye. Waiter overload ho jayega.

    Agar **5 waiters** hain aur customers sabke beech equally divide ho rahe hain, to sabko jaldi service milegi.

    Yehi concept servers ke saath hota hai.

    ---

    ## Interview Answer:

    **Load Balancing** is the process of distributing incoming client requests across multiple servers to improve performance, scalability, and availability.

    It prevents a single server from becoming a bottleneck and ensures that if one server fails, traffic can be redirected to healthy servers.

    Common load balancing algorithms include:

    * Round Robin
    * Least Connections
    * IP Hash
    * Weighted Round Robin

    Popular load balancers include **Nginx, HAProxy, AWS ELB, and Azure Load Balancer.**

    ---

    # Simple Node.js Implementation

    ### server1.js

    ```javascript
    const express = require("express");

    const app = express();

    app.get("/", (req, res) => {
        res.send("Response from Server 1");
    });

    app.listen(3001, () => {
        console.log("Server 1 running on port 3001");
    });
    ```

    ---

    ### server2.js

    ```javascript
    const express = require("express");

    const app = express();

    app.get("/", (req, res) => {
        res.send("Response from Server 2");
    });

    app.listen(3002, () => {
        console.log("Server 2 running on port 3002");
    });
    ```

    ---

    ### loadBalancer.js

    ```javascript
    const express = require("express");
    const http = require("http");

    const app = express();

    const servers = [
        "http://localhost:3001",
        "http://localhost:3002"
    ];

    let current = 0;

    // Round Robin
    app.get("/", (req, res) => {

        const target = servers[current];

        current = (current + 1) % servers.length;

        http.get(target, (response) => {

            let data = "";

            response.on("data", chunk => {
                data += chunk;
            });

            response.on("end", () => {
                res.send(data);
            });

        });
    });

    app.listen(3000, () => {
        console.log("Load Balancer running on port 3000");
    });
    ```

    ---

    ### Run

    ```
    node server1.js
    node server2.js
    node loadBalancer.js
    ```

    Open:

    ```
    http://localhost:3000
    ```

    Response:

    ```
    Response from Server 1
    ```

    Refresh:

    ```
    Response from Server 2
    ```

    Refresh again:

    ```
    Response from Server 1
    ```

    Ye **Round Robin Load Balancing** hai.

    ---

    # Real Production Architecture

    ```
                Client
                    |
                    |
            Load Balancer
            (Nginx / ELB)
            /      |      \
            /       |       \
    Node-1      Node-2     Node-3
    |            |           |
    MongoDB     MongoDB     MongoDB
    ```

    Ya agar database shared ho:

    ```
                Client
                    |
            Load Balancer
            /    |    \
        Node1 Node2 Node3
                |
        Shared Database
            (MongoDB/MySQL)
    ```

    ---

    # Interview Follow-up Questions

    ### Q1. Why do we need Load Balancing?

    **Answer:**

    * Prevent server overload
    * Improve response time
    * High availability
    * Better scalability
    * Fault tolerance

    ---

    ### Q2. What is Round Robin?

    Requests ko sequentially har server ko ek-ek karke bhejna.

    Example:

    ```
    Request 1 → Server 1
    Request 2 → Server 2
    Request 3 → Server 3
    Request 4 → Server 1
    ```

    ---

    ### Q3. What happens if one server crashes?

    A good load balancer performs **health checks**. Agar koi server unhealthy ho jata hai, to usko request bhejna band kar deta hai aur baaki healthy servers ko traffic forward karta hai.

    ---

    ### Q4. Which Load Balancer have you used?

    **Interview Answer:**

    > In production, I have worked with Nginx as a reverse proxy and load balancer. It distributes traffic across multiple Node.js instances, improves availability, and supports health checks, SSL termination, and reverse proxy features.

    ---

    ### Interview Tip (7+ YOE)

    Senior Node.js interviews me sirf definition nahi, architecture bhi explain karna expected hota hai:

    * **Node.js app** (multiple instances)
    * **Load Balancer (Nginx/ALB)**
    * **PM2 Cluster** (multiple CPU cores on one machine)
    * **Redis** (shared cache/session)
    * **Shared Database**
    * **Health Checks**
    * **Sticky Sessions** (agar WebSockets ya session-based apps ho)

    Ye points mention karne se interviewer ko lagega ki aap production-scale systems ki understanding rakhte hain.














368. Horizontal scaling
369. Vertical scaling
370. Microservices
371. Kafka kya hai
372. RabbitMQ kya hai
373. Event-driven architecture
374. Idempotency
375. Circuit breaker
376. API gateway
377. Saga pattern
378. Distributed systems challenges
379. Consistency models
380. Failover systems

### Additional Important Questions
1. How would you design a scalable MERN-based e-commerce platform?
2. How do you deploy a MERN app on cloud platforms (e.g., Vercel, Heroku, AWS)?
3. What is CI/CD and how would you implement it for a MERN app?
4. How do you manage environment configurations for different environments?
5. What’s your approach to logging and monitoring in production?
6. How would you implement role-based access control (RBAC)?
7. How do you ensure your REST APIs are RESTful?
8. What is the difference between monolithic and microservice architectures?
9. How would you handle versioning in your APIs?
10. How do you handle scaling a database with growing user base?



### DevOps & Infrastructure
381. CI/CD pipeline
382. Docker
383. Kubernetes basics
384. AWS services
385. Nginx
386. Reverse proxy
387. Monitoring tools
388. Logging tools
389. Blue-green deployment
390. Canary deployment

### Security
391. XSS
392. CSRF
393. Injection attacks
394. bcrypt
395. HTTPS
396. CORS
397. Secure cookies
398. API security
399. OAuth
400. JWT security

---

