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

    ## Hinglish Explanation:

    **RabbitMQ** ek **Message Broker (Message Queue)** hai jo do applications ya services ke beech messages ko safely transfer karta hai.

    Simple words me:

    > **RabbitMQ sender aur receiver ke beech ek middleman ki tarah kaam karta hai.**

    Iska use tab hota hai jab koi task immediately complete karna zaroori na ho ya background me process karna ho.

    ### Real-Life Example:

    Socho aap restaurant me order dete ho.

    * **Customer** → Order deta hai.
    * **Waiter** → Order ko kitchen tak pahunchata hai.
    * **Chef** → Order prepare karta hai.

    Yahan:

    * Customer = Producer
    * Waiter = RabbitMQ
    * Chef = Consumer

    Customer ko kitchen me jaane ki zarurat nahi hoti. Waiter (RabbitMQ) order ko queue me rakhkar chef tak pahucha deta hai.

    ---

    # Interview Answer:

    **RabbitMQ** is an open-source message broker that enables asynchronous communication between applications using message queues.

    It decouples producers and consumers, improves scalability, reliability, and fault tolerance, and is commonly used for background jobs, email notifications, order processing, and microservices communication.

    ---

    # Architecture

    ```text
            Producer
                |
                |
            RabbitMQ Queue
                |
                |
            Consumer
    ```

    Example:

    ```text
    User Registration
            |
            |
    Save User
            |
            |
    RabbitMQ Queue
            |
    -------------------
    |        |        |
    Email    SMS     Analytics
    Worker   Worker    Worker
    ```

    User ko registration ka response turant mil jata hai, aur email/SMS background me process hote rehte hain.

    ---

    # Simple Node.js Example

    ### Producer

    ```javascript
    const amqp = require("amqplib");

    async function sendMessage() {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        const queue = "emails";

        await channel.assertQueue(queue);

        channel.sendToQueue(queue, Buffer.from("Welcome Email"));

        console.log("Message Sent");

        setTimeout(() => connection.close(), 500);
    }

    sendMessage();
    ```

    ---

    ### Consumer

    ```javascript
    const amqp = require("amqplib");

    async function receiveMessage() {

        const connection = await amqp.connect("amqp://localhost");

        const channel = await connection.createChannel();

        const queue = "emails";

        await channel.assertQueue(queue);

        console.log("Waiting for messages...");

        channel.consume(queue, (msg) => {
            console.log(msg.content.toString());
        }, {
            noAck: true
        });
    }

    receiveMessage();
    ```

    Output:

    ```text
    Waiting for messages...

    Welcome Email
    ```

    ---

    # RabbitMQ kab use karte hain?

    * Background Email Sending
    * SMS Notifications
    * Order Processing
    * Payment Processing
    * Image/Video Processing
    * PDF Generation
    * Report Generation
    * Microservices Communication
    * Logging
    * Data Synchronization

    ---

    # RabbitMQ ke Advantages

    * Asynchronous Processing
    * Faster API Response
    * Reliable Message Delivery
    * Retry Mechanism
    * Decoupled Services
    * Load Balancing Between Consumers
    * High Availability
    * Fault Tolerance

    ---

    # RabbitMQ vs Direct API Call

    ### Without RabbitMQ

    ```text
    User
    |
    API
    |
    |- Save User
    |- Send Email
    |- Send SMS
    |- Generate PDF
    |- Upload Image

    Response after all tasks finish
    ```

    API ko sab kaam complete hone ka wait karna padta hai.

    ---

    ### With RabbitMQ

    ```text
    User
    |
    API
    |
    |- Save User
    |- Push Message to RabbitMQ

    Immediate Response

            RabbitMQ
            /    |    \
        Email  SMS   PDF
        Worker Worker Worker
    ```

    User ko response jaldi mil jata hai, aur heavy tasks background me execute hote hain.

    ---

    # Common Interview Questions

    ### 1. RabbitMQ aur Kafka me difference?

    | RabbitMQ                                                   | Kafka                                                       |
    | ---------------------------------------------------------- | ----------------------------------------------------------- |
    | Message Queue                                              | Event Streaming Platform                                    |
    | Task Processing                                            | Large-scale Event Streaming                                 |
    | Low Latency                                                | High Throughput                                             |
    | Messages queue se consume hone ke baad remove ho jate hain | Messages configurable retention period tak store rehte hain |
    | Background jobs ke liye popular                            | Real-time analytics, event-driven systems ke liye popular   |

    ---

    ### 2. Producer kya hota hai?

    Jo application message bhejti hai.

    ---

    ### 3. Consumer kya hota hai?

    Jo application queue se message read karke process karti hai.

    ---

    ### 4. Queue kya hoti hai?

    Temporary storage jahan messages wait karte hain jab tak consumer unhe process na kare.

    ---

    ### 5. RabbitMQ synchronous hai ya asynchronous?

    RabbitMQ mainly **asynchronous communication** ke liye use hota hai, jisse long-running tasks background me process ho sakte hain aur API response fast rehta hai.

    ---

    ## Interview Tip (7+ YOE)

    Senior-level interview me sirf definition dene ke bajay production use case bataye:

    > "Hum RabbitMQ ko asynchronous background processing ke liye use karte hain. Jaise user registration ke baad email, SMS, PDF generation ya image processing ko queue me push kar dete hain. API user ko immediately response de deti hai, aur multiple consumer workers queue se messages uthakar process karte hain. Isse application scalable, reliable aur fault tolerant ban jati hai."




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

