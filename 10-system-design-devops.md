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

    ## Hinglish Explanation:

    **Microservices Architecture** ek software design approach hai jisme ek bade application ko **chhote-chhote independent services** me divide kiya jata hai.

    Har service ka **apna specific responsibility** hota hai aur wo independently develop, deploy aur scale ho sakti hai.

    Simple words me:

    > **Ek bada application → Multiple small independent applications (services).**

    ---

    ## Real-Life Example

    Socho ek **Shopping Mall** hai.

    Mall me alag-alag shops hoti hain:

    * Clothing Store
    * Electronics Store
    * Food Court
    * Pharmacy

    Har shop independently kaam karti hai.

    Agar Food Court band ho jaye to Clothing Store chalti rahegi.

    Microservices bhi isi tarah kaam karte hain.

    ---

    # Monolithic vs Microservices

    ### Monolithic

    ```text
    +------------------------------------+
    |           Single Application       |
    |------------------------------------|
    | Login                              |
    | Product                            |
    | Cart                               |
    | Payment                            |
    | Order                              |
    | Notification                       |
    +------------------------------------+
    ```

    Sab kuch ek hi application me hota hai.

    ---

    ### Microservices

    ```text
                    Client
                        |
                API Gateway
                        |
        -----------------------------------
        |       |        |        |       |
    User   Product   Order   Payment  Notification
    Service Service   Service  Service     Service
    ```

    Har service alag application hai.

    ---

    # Interview Answer

    **Microservices** is an architectural style where an application is divided into small, independent services. Each service is responsible for a specific business capability, has its own codebase, can be deployed independently, and communicates with other services using APIs or message brokers like RabbitMQ or Kafka.

    This architecture improves scalability, maintainability, and fault isolation.

    ---

    # Example (E-Commerce)

    Agar user order place karta hai:

    ```text
    User
    |
    |
    API Gateway
    |
    |
    Order Service
    |
    |---------------------------|
    |                           |
    Inventory Service       Payment Service
    |                           |
    Notification Service     Analytics Service
    ```

    Flow:

    1. User order place karta hai.
    2. Order Service order create karti hai.
    3. Inventory stock update karta hai.
    4. Payment Service payment verify karti hai.
    5. Notification Service email bhejti hai.
    6. Analytics Service report update karti hai.

    Har service independently kaam karti hai.

    ---

    # Node.js Example

    ### User Service

    ```javascript
    const express = require("express");

    const app = express();

    app.get("/users", (req, res) => {
        res.json({
            name: "Raj"
        });
    });

    app.listen(3001);
    ```

    ---

    ### Product Service

    ```javascript
    const express = require("express");

    const app = express();

    app.get("/products", (req, res) => {
        res.json([
            "Laptop",
            "Mobile"
        ]);
    });

    app.listen(3002);
    ```

    ---

    ### Order Service

    ```javascript
    const express = require("express");

    const app = express();

    app.get("/orders", (req, res) => {
        res.json({
            orderId: 101
        });
    });

    app.listen(3003);
    ```

    Ye teen alag Node.js applications hain jo independently run karte hain.

    ---

    # Services Communication

    ### 1. Synchronous

    REST API ya gRPC

    ```text
    Order Service
        |
    REST API
        |
    Payment Service
    ```

    Request bhejna aur turant response lena.

    ---

    ### 2. Asynchronous

    RabbitMQ ya Kafka

    ```text
    Order Service
        |
    RabbitMQ/Kafka
        |
    Notification Service
    ```

    Background communication.

    ---

    # Microservices ke Advantages

    * Independent Deployment
    * Independent Scaling
    * Fault Isolation
    * Faster Development
    * Better Maintainability
    * Technology Flexibility (Ek service Java me, dusri Node.js me)
    * Smaller Codebase
    * Easier Team Collaboration

    ---

    # Disadvantages

    * Complex Architecture
    * Network Latency
    * Distributed Transactions
    * Monitoring Difficult
    * Logging Complex
    * Deployment Management
    * Data Consistency Challenges

    ---

    # Common Interview Questions

    ### 1. Microservices aur Monolith me difference?

    | Monolith           | Microservices                  |
    | ------------------ | ------------------------------ |
    | Single application | Multiple small services        |
    | Single deployment  | Independent deployment         |
    | Shared codebase    | Separate codebase              |
    | Difficult scaling  | Individual service scaling     |
    | One technology     | Multiple technologies possible |

    ---

    ### 2. Microservices communicate kaise karte hain?

    * REST API
    * gRPC
    * RabbitMQ
    * Kafka

    ---

    ### 3. API Gateway kya hota hai?

    API Gateway ek **single entry point** hota hai jo client ki request ko appropriate microservice tak route karta hai.

    Example:

    ```text
    Client
    |
    API Gateway
    |
    ---------------
    |      |      |
    User Product Order
    ```

    ---

    ### 4. Har service ka apna database hota hai?

    Best practice ke according **haan**.

    ```text
    User Service ------ User DB

    Product Service --- Product DB

    Order Service ----- Order DB
    ```

    Isse services loosely coupled rehti hain aur ek service ke database changes dusri service ko affect nahi karte.

    ---

    ### 5. Microservices me authentication kaise hota hai?

    Generally:

    * JWT (JSON Web Token)
    * OAuth 2.0
    * API Gateway authentication

    ---

    # Production Architecture (7+ YOE)

    ```text
                        Client
                        |
                    Load Balancer
                        |
                    API Gateway
                        |
    -----------------------------------------------------
    |          |           |           |               |
    User     Product      Order      Payment      Notification
    Service   Service     Service     Service       Service
    |          |           |           |               |
    MongoDB   MongoDB     MongoDB     MySQL         MongoDB
                        |
                    Kafka / RabbitMQ
                        |
                    Email Worker
                    SMS Worker
                    Analytics Worker
    ```

    ---

    # Interview Tip (7+ YOE)

    Agar interviewer pooche **"Have you worked on Microservices?"**, to ek strong answer ho sakta hai:

    > "Yes. I have worked with microservice-based applications where different business domains such as User, Product, Order, and Payment were separated into independent services. The services communicated using REST APIs for synchronous operations and RabbitMQ/Kafka for asynchronous events. We used JWT for authentication, an API Gateway for routing, Docker for containerization, and Load Balancers to distribute traffic. This architecture made the system more scalable, fault tolerant, and easier to deploy independently."




371. Kafka kya hai

    ## Hinglish Explanation:

    **Apache Kafka** ek **Distributed Event Streaming Platform** hai jo **real-time me bahut bade amount ke data (millions of events)** ko receive, store aur process kar sakta hai.

    Simple words me:

    > **Kafka applications ke beech events/messages ko high speed aur reliable way me transfer karta hai.**

    RabbitMQ ki tarah Kafka bhi messages handle karta hai, lekin Kafka **high throughput, event streaming aur data retention** ke liye design kiya gaya hai.

    ---

    ## Real-Life Example:

    Socho ek **YouTube Live** chal raha hai.

    * Lakhon users videos dekh rahe hain.
    * Har second millions of events generate ho rahe hain:

    * Video Play
    * Pause
    * Like
    * Comment
    * Subscribe

    Ye saare events Kafka me store hote hain aur alag-alag services unhe consume karti hain.

    ```text
    User Actions
        |
        |
    Kafka
    /   |    \
    Analytics Recommendation Notification
    ```

    Ek hi event ko multiple services independently consume kar sakti hain.

    ---

    # Interview Answer:

    **Apache Kafka** is a distributed event streaming platform used for building real-time data pipelines and event-driven applications.

    It allows producers to publish events to topics, while multiple consumers read those events independently. Kafka provides high throughput, scalability, fault tolerance, and message retention, making it ideal for log processing, analytics, and microservices communication.

    ---

    # Kafka Architecture

    ```text
    Producer
        |
        |
    Topic
    (Kafka)
    /   |   \
    C1   C2   C3
    ```

    Example:

    ```text
    Order Created
        |
        |
    Kafka Topic
    /     |      \
    Inventory Payment Analytics
    Service   Service  Service
    ```

    Ek hi **Order Created** event ko teen alag services consume kar sakti hain.

    ---

    # Main Components

    ### Producer

    Message/Event send karta hai.

    Example:

    ```text
    User Registered
    ```

    ---

    ### Topic

    Kafka me queue ki jagah **Topic** hota hai.

    Example:

    ```text
    user-events
    ```

    ---

    ### Broker

    Kafka server jo topics aur messages store karta hai.

    ---

    ### Consumer

    Topic se messages read karta hai.

    ---

    ### Consumer Group

    Multiple consumers milkar messages process karte hain.

    ```text
    Topic
    |
    |---- Consumer 1
    |
    |---- Consumer 2
    |
    |---- Consumer 3
    ```

    Har message group ke kisi ek consumer ko hi jata hai.

    ---

    # Simple Node.js Example

    Install:

    ```bash
    npm install kafkajs
    ```

    ---

    ### Producer

    ```javascript
    const { Kafka } = require("kafkajs");

    const kafka = new Kafka({
        clientId: "app",
        brokers: ["localhost:9092"]
    });

    const producer = kafka.producer();

    async function send() {
        await producer.connect();

        await producer.send({
            topic: "orders",
            messages: [
                { value: "Order Created" }
            ]
        });

        console.log("Message Sent");

        await producer.disconnect();
    }

    send();
    ```

    ---

    ### Consumer

    ```javascript
    const { Kafka } = require("kafkajs");

    const kafka = new Kafka({
        clientId: "consumer",
        brokers: ["localhost:9092"]
    });

    const consumer = kafka.consumer({
        groupId: "order-group"
    });

    async function run() {

        await consumer.connect();

        await consumer.subscribe({
            topic: "orders"
        });

        await consumer.run({
            eachMessage: async ({ message }) => {
                console.log(message.value.toString());
            }
        });
    }

    run();
    ```

    Output:

    ```text
    Order Created
    ```

    ---

    # Kafka kab use karte hain?

    * Real-time Analytics
    * Event Streaming
    * Log Aggregation
    * Clickstream Data
    * Banking Transactions
    * Fraud Detection
    * IoT Data
    * Stock Market
    * E-commerce Events
    * Microservices Communication

    ---

    # Kafka ke Advantages

    * High Throughput
    * Horizontal Scalability
    * Fault Tolerance
    * Distributed Architecture
    * Event Retention
    * Replay Messages
    * Multiple Consumers
    * Real-time Processing

    ---

    # RabbitMQ vs Kafka

    | RabbitMQ                                           | Kafka                                          |
    | -------------------------------------------------- | ---------------------------------------------- |
    | Message Queue                                      | Event Streaming Platform                       |
    | Queue-based                                        | Topic-based                                    |
    | Background jobs                                    | Event streaming                                |
    | Messages consume hone ke baad remove ho sakte hain | Messages retention period tak store rehte hain |
    | Email, SMS, PDF                                    | Analytics, logs, clickstream, events           |
    | Lower throughput                                   | Very high throughput                           |
    | Best for task queues                               | Best for event-driven systems                  |

    ---

    # Common Interview Questions

    ### 1. Kafka Topic kya hota hai?

    Topic ek logical channel hota hai jisme producer events publish karta hai aur consumers unhe read karte hain.

    ---

    ### 2. Broker kya hota hai?

    Kafka server jo topics aur messages ko store aur manage karta hai.

    ---

    ### 3. Consumer Group kya hota hai?

    Consumers ka group jo milkar topic ke messages process karta hai.

    ---

    ### 4. Kafka message ko delete karta hai?

    By default **nahi**. Kafka messages ko configured **retention period** tak store karta hai. Isi wajah se events ko baad me dubara (replay) bhi kiya ja sakta hai.

    ---

    ### 5. Kafka itna fast kyun hai?

    * Sequential disk writes
    * Partitioning
    * Distributed architecture
    * Zero-copy optimizations
    * Batch processing

    ---

    # Interview Tip (7+ YOE)

    Senior-level interview me aap aisa answer de sakte hain:

    > "Kafka is my preferred choice when building event-driven systems that require high throughput and scalability. For example, in an e-commerce application, after an order is created, the Order Service publishes an event to a Kafka topic. Multiple services like Inventory, Payment, Notification, and Analytics consume the same event independently. Kafka retains events for a configurable duration, so consumers can replay them if needed. This makes the system loosely coupled, scalable, and fault tolerant."

    ---

    ## RabbitMQ vs Kafka (One-Line Memory Trick)

    * **RabbitMQ → "Do the task."** (Task Queue / Background Jobs)
    * **Kafka → "Broadcast the event."** (Event Streaming / Real-time Data)

    **Easy example:**

    * **RabbitMQ:** "Send welcome email to the user."
    * **Kafka:** "User Registered" event → Email Service, Analytics Service, Recommendation Service, and Audit Service all receive the same event independently.




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


    ## Hinglish Explanation

    **Circuit Breaker** ek design pattern hai jo **microservices me cascading failures ko prevent** karta hai.

    Simple words me:

    > **Agar koi service baar-baar fail ho rahi hai, to Circuit Breaker us service ko repeatedly call karna temporarily band kar deta hai.**

    Isse:

    * Application fast response deti hai.
    * System overload nahi hota.
    * Resources waste nahi hote.
    * Dusri services bhi stable rehti hain.

    ---

    ## Real-Life Example

    Socho aap kisi dost ko call kar rahe ho.

    * 1st Call ❌ No Response
    * 2nd Call ❌ No Response
    * 3rd Call ❌ No Response

    Ab aap har second call nahi karoge.

    Aap **5 minutes wait** karoge, fir ek baar dubara try karoge.

    Yehi Circuit Breaker ka concept hai.

    ---

    # Problem Without Circuit Breaker

    ```text
    Client
    |
    Order Service
    |
    Payment Service ❌
    |
    Timeout
    |
    Retry
    |
    Timeout
    |
    Retry
    |
    Timeout
    ```

    Har request Payment Service ko hit karegi, jiski wajah se:

    * CPU waste
    * Memory waste
    * Network congestion
    * Poor response time

    ---

    # With Circuit Breaker

    ```text
    Client
    |
    Order Service
    |
    Circuit Breaker
    |
    Payment Service
    ```

    Agar Payment Service fail hoti rahe:

    ```text
    Payment Service ❌

    ↓

    Circuit Opens

    ↓

    Further Requests Block

    ↓

    Return Fallback Response
    ```

    Application unnecessary retries se bach jati hai.

    ---

    # Interview Answer

    **Circuit Breaker** is a resilience design pattern used in distributed systems and microservices to prevent repeated calls to a failing service.

    When failures exceed a configured threshold, the circuit opens and blocks further requests to the failing service. After a timeout period, it allows a few test requests to check if the service has recovered. This improves system stability, reduces cascading failures, and provides graceful degradation.

    ---

    # Three States of Circuit Breaker

    ## 1. Closed State ✅

    Sab normal hai.

    Requests directly service tak jati hain.

    ```text
    Client

    ↓

    Payment Service
    ```

    ---

    ## 2. Open State ❌

    Failure threshold cross ho gaya.

    Circuit open ho gaya.

    Ab requests service tak nahi jayengi.

    ```text
    Client

    ↓

    Circuit Breaker

    ↓

    Fallback Response
    ```

    Example Response

    ```json
    {
        "message": "Payment service is temporarily unavailable"
    }
    ```

    ---

    ## 3. Half-Open State ⏳

    Kuch time baad Circuit Breaker ek ya do requests allow karta hai.

    Agar service recover ho gayi:

    ```text
    Half Open

    ↓

    Request Success

    ↓

    Closed
    ```

    Agar fir fail hui:

    ```text
    Half Open

    ↓

    Failure

    ↓

    Open
    ```

    ---

    # State Flow

    ```text
            Success
                ↑
                |
            Closed
                |
            Failures > Threshold
                |
                ↓
                Open
                |
        Wait Timeout
                |
                ↓
            Half Open
            /      \
    Success         Failure
    |                |
    Closed           Open
    ```

    ---

    # Node.js Example (Using opossum)

    Install

    ```bash
    npm install opossum axios
    ```

    ---

    ### Circuit Breaker

    ```javascript
    const CircuitBreaker = require("opossum");
    const axios = require("axios");

    async function paymentService() {
        const response = await axios.get("http://localhost:3001/payment");
        return response.data;
    }

    const breaker = new CircuitBreaker(paymentService, {
        timeout: 3000,
        errorThresholdPercentage: 50,
        resetTimeout: 5000
    });

    breaker.fallback(() => {
        return {
            message: "Payment service unavailable"
        };
    });

    breaker.fire()
        .then(console.log)
        .catch(console.error);
    ```

    ---

    # Real Production Architecture

    ```text
                Client
                    |
                API Gateway
                    |
            Order Service
                    |
            Circuit Breaker
                    |
            Payment Service
                    |
                Database
    ```

    ---

    # Benefits

    * Prevent Cascading Failures
    * Better Fault Tolerance
    * Fast Failure Detection
    * Graceful Degradation
    * Better User Experience
    * Protects Downstream Services
    * Reduces Resource Consumption

    ---

    # Common Interview Questions

    ### 1. Circuit Breaker ki need kyun padti hai?

    Taaki baar-baar failing service ko call na kiya jaye aur poora system slow ya crash na ho.

    ---

    ### 2. Fallback kya hota hai?

    Jab actual service unavailable ho, tab alternate response dena.

    Example:

    ```json
    {
        "status": "Service unavailable. Please try again later."
    }
    ```

    ---

    ### 3. Retry aur Circuit Breaker me difference?

    | Retry                                     | Circuit Breaker                                            |
    | ----------------------------------------- | ---------------------------------------------------------- |
    | Failure ke baad dubara request bhejta hai | Repeated failures ke baad request bhejna band kar deta hai |
    | Temporary network issues ke liye useful   | Long outages aur cascading failures se bachata hai         |

    ---

    ### 4. Timeout aur Circuit Breaker me difference?

    * **Timeout:** Ek request kitni der wait karegi uski limit.
    * **Circuit Breaker:** Agar service repeatedly fail ho rahi hai, to future requests ko temporarily rok deta hai.

    ---

    # Interview Tip (7+ YOE)

    Agar interviewer pooche:

    **"How do you make microservices resilient?"**

    Aap answer de sakte hain:

    > "I use resilience patterns such as retries with exponential backoff for transient failures, Circuit Breaker to stop repeated calls to unhealthy services, timeouts to avoid long waits, and fallback responses for graceful degradation. For asynchronous workflows, I use RabbitMQ or Kafka, and for distributed transactions, I prefer the Saga Pattern. Together, these patterns improve the reliability and fault tolerance of a microservices-based system."

    ---

    ## Easy Memory Trick

    * **Load Balancer** → Traffic ko distribute karta hai.
    * **RabbitMQ** → Background tasks ko queue karta hai.
    * **Kafka** → Events ko stream karta hai.
    * **Saga Pattern** → Distributed transactions ko consistent rakhta hai.
    * **Circuit Breaker** → Failing service ko temporarily isolate karta hai taaki poora system impact na ho.




376. API gateway
377. Saga pattern


    ## Hinglish Explanation:

    **Saga Pattern** ek design pattern hai jo **Microservices me distributed transactions** ko handle karne ke liye use hota hai.

    Simple words me:

    > Jab ek transaction me multiple microservices involved hoti hain aur kisi ek service me failure ho jaye, to Saga Pattern pehle se complete hue steps ko **rollback (compensate)** karta hai.

    Isse system me **data consistency** maintain rehti hai.

    ---

    ## Real-Life Example

    Maan lo aap Flipkart ya Amazon se order place karte ho.

    Order place karne ke steps:

    1. Order Create ✅
    2. Payment Deduct ✅
    3. Inventory Update ❌ (Stock Out)

    Ab kya hoga?

    Agar inventory fail ho gayi to:

    * Payment Refund ✅
    * Order Cancel ✅

    Ye rollback process hi **Saga Pattern** ka core idea hai.

    ---

    # Problem Without Saga

    ```text
    Order Service  ✅

    Payment Service ✅

    Inventory Service ❌

    Result:
    Order Created
    Payment Deducted
    No Stock
    ```

    Yahan customer ke paise kat gaye, lekin order complete nahi hua.

    ---

    # With Saga Pattern

    ```text
    Order Created
        |
    Payment Success
        |
    Inventory Failed
        |
    Compensation Starts
        |
    Payment Refund
        |
    Order Cancel
    ```

    System dubara consistent state me aa jata hai.

    ---

    # Interview Answer

    **Saga Pattern** is a distributed transaction pattern used in microservices to maintain data consistency across multiple services.

    Instead of using one large database transaction, each service performs its own local transaction. If any step fails, previously completed steps are compensated (rolled back) using compensation actions.

    It helps maintain consistency without relying on two-phase commit (2PC).

    ---

    # Architecture

    ```text
    Client
    |
    Order Service
    |
    Payment Service
    |
    Inventory Service
    |
    Notification Service
    ```

    Successful Flow

    ```text
    Order
    |
    Payment
    |
    Inventory
    |
    Notification
    ```

    Failure Flow

    ```text
    Order
    |
    Payment
    |
    Inventory Failed
    |
    Refund Payment
    |
    Cancel Order
    ```

    ---

    # Two Types of Saga Pattern

    ## 1. Choreography (Event-Based)

    Har service events publish karti hai.

    Koi central controller nahi hota.

    ```text
    Order Service
        |
    OrderCreated Event
        |
    Payment Service
        |
    PaymentCompleted Event
        |
    Inventory Service
        |
    InventoryUpdated Event
    ```

    **Pros**

    * No central controller
    * Loosely coupled

    **Cons**

    * Events zyada ho jate hain
    * Debugging difficult hoti hai

    ---

    ## 2. Orchestration

    Ek **Saga Orchestrator** decide karta hai kis service ko kab call karna hai.

    ```text
            Saga Orchestrator
                    |
    -------------------------------
    |         |         |         |
    Order    Payment   Inventory Notification
    ```

    Agar Inventory fail ho jaye:

    ```text
    Saga Orchestrator
        |
    Refund Payment
        |
    Cancel Order
    ```

    **Pros**

    * Easy monitoring
    * Easy debugging
    * Better control

    **Cons**

    * Central orchestrator maintain karna padta hai

    ---

    # Simple Node.js Example (Concept)

    ### Order Service

    ```javascript
    createOrder();
    ```

    ### Payment Service

    ```javascript
    makePayment();
    ```

    ### Inventory Service

    ```javascript
    updateInventory();
    ```

    Suppose inventory fails:

    ```javascript
    try {
        createOrder();

        makePayment();

        updateInventory();

    } catch (err) {

        refundPayment();

        cancelOrder();
    }
    ```

    Real microservices me ye services alag applications hoti hain aur REST APIs ya RabbitMQ/Kafka ke through communicate karti hain.

    ---

    # Saga vs Database Transaction

    | Database Transaction | Saga Pattern              |
    | -------------------- | ------------------------- |
    | Single database      | Multiple microservices    |
    | COMMIT / ROLLBACK    | Compensation Transactions |
    | ACID                 | Eventually Consistent     |
    | Monolithic apps      | Microservices             |

    ---

    # Common Interview Questions

    ### 1. Saga Pattern ki need kyun padti hai?

    Kyuki microservices me har service ka apna database hota hai. Ek single database transaction sab services par apply nahi ki ja sakti.

    ---

    ### 2. Compensation Transaction kya hota hai?

    Agar koi step fail ho jaye to pehle complete hue steps ko reverse karna.

    Example:

    ```text
    Payment Success

    ↓

    Inventory Failed

    ↓

    Refund Payment
    ```

    ---

    ### 3. Saga me rollback kaise hota hai?

    Traditional database rollback nahi hota.

    Har service apna **compensation action** execute karti hai.

    Example:

    ```text
    Reserve Stock

    ↓

    Release Stock
    ```

    ---

    ### 4. Saga Pattern me RabbitMQ ya Kafka ka role kya hai?

    * **RabbitMQ**: Commands aur background tasks ko reliably deliver karne ke liye use ho sakta hai.
    * **Kafka**: Events publish aur consume karne ke liye, especially event-driven microservices me.

    Dono Saga implementation me communication layer ka kaam kar sakte hain.

    ---

    # Interview Tip (7+ YOE)

    Agar interviewer pooche **"How would you handle distributed transactions in microservices?"**, to ek strong answer ho sakta hai:

    > "I would use the Saga Pattern instead of a distributed database transaction. Each microservice executes its own local transaction. If all steps succeed, the workflow completes. If any step fails, compensation transactions are triggered to undo the previously completed actions. Depending on the system, I would implement Saga using choreography with Kafka events or orchestration with a central Saga orchestrator. This approach keeps services loosely coupled while maintaining eventual consistency."

    ---

    ## Easy Memory Trick

    * **Microservices** → Multiple independent services.
    * **Saga Pattern** → Keeps data consistent across those services.
    * **RabbitMQ/Kafka** → Carries commands/events between services.
    * **Compensation Transaction** → "Undo" the completed steps if a later step fails.

    **One-line interview answer:**

    > **Saga Pattern is used in microservices to manage distributed transactions by executing local transactions and, if a failure occurs, running compensation transactions to maintain eventual data consistency.**




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

