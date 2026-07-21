## What do you mean by Component Architecture in React?

   Component Architecture is the way we organize and structure React components to build scalable, reusable, and maintainable applications. Instead of creating one large component, we break the UI into smaller components where each component has a single responsibility. This improves code readability, reusability, testing, and makes collaboration easier in large teams. We generally follow a component hierarchy where parent components manage shared state and child components focus on rendering specific UI parts.

# Q1. Why not keep everything in one component?

    Expected points:

    Maintainability
    Reusability
    Easier testing
    Better readability
    Reduced merge conflicts in teams

# Q2. How small should a component be?

    Expected answer:

    There is no fixed line count. A component should ideally have a single responsibility. If it starts handling multiple unrelated concerns, it's usually a sign that it should be split into smaller components.

# Q3. Is making very small components always good?

    Expected answer:

    Not always. Over-splitting can make the component tree difficult to understand and increase unnecessary abstraction. The goal is balance—components should be small enough to have a single responsibility but not so tiny that readability suffers.

# Where should state live?

    State should live in the lowest possible component that needs it. If multiple sibling components need the same data, I lift the state to their nearest common parent. If the state is shared across many unrelated parts of the application, I prefer Context API or Redux Toolkit instead of passing props through multiple levels.

## Smart vs Dumb Components (Container vs Presentational Components)
    
    Smart components are responsible for managing business logic, state, API calls, and data handling. Dumb or presentational components focus only on rendering the UI based on the props they receive. This separation improves reusability, maintainability, and makes components easier to test. 

    These separation follows Single Responsibility Principle (SRP).

    Smart Component (Container Component)

    Ye components logic handle karte hain.

    Responsibilities:

    API call
    State management
    Business logic
    Event handling
    Data transformation

    Example
    ``` js
    const ProductPage = () => {
        const [products, setProducts] = useState([]);

        useEffect(() => {
            fetchProducts();
        }, []);

        return (
            <ProductList products={products} />
        );
    };
    ```
    

    Is component ka kaam hai:

    API call
    State
    Data pass karna

    Ye Smart Component hai.

    Dumb Component (Presentational Component)

    Ye sirf UI render karta hai.

    ``` js
    const ProductList = ({ products }) => {
        return (
            <>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </>
        );
    };
    ```

    Yahan

    koi API nahi
    koi business logic nahi
    sirf rendering

    Ye Dumb Component hai.

    ProductCard
    const ProductCard = ({ product }) => {
        return (
            <>
                <img src={product.image} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </>
        );
    };

    Pure UI.

    Component Flow
    ProductPage
        │
        │ fetch API
        │ state
        ▼
    ProductList
        │
        ▼
    ProductCard

# Q1. Can a Dumb Component have state?

    Yes.

    Example

    const ProductCard = () => {

    const [hover,setHover]

    Ye local UI state hai.

    Completely valid.

    Important: Smart vs Dumb ka matlab state hona ya na hona nahi hai. Matlab hai business logic kis component me hai.

# Q2. Can Smart Component have UI?

    Yes.

    Har smart component UI return karega hi.

    Difference ye hai

    Smart component me

    Logic + UI

    Dumb component me

    Mostly UI
    
# Q3. Is this pattern mandatory?

    No.

    Modern React me hooks aur custom hooks ki wajah se strict Smart/Dumb separation pehle jitni rigid nahi rahi. Lekin large applications me logic aur presentation ko alag rakhna ab bhi ek achhi architectural practice hai.

## Custom Hooks
    
    Earlier we used the Smart vs Dumb component pattern extensively. In modern React, we often extract business logic into custom hooks while keeping UI components focused on presentation. This makes the logic reusable across multiple components.

## Controlled vs Uncontrolled Components

    In a controlled component, React manages the form state using useState, and the input value is always driven by React state. This makes validation, conditional rendering, and form handling easier. In an uncontrolled component, the DOM manages the input state, and React accesses the value only when needed using refs. Controlled components are generally preferred in modern React applications because they provide better control over form behavior.

# React Hook Form controlled hai ya uncontrolled?

    By default, React Hook Form uses uncontrolled components internally with refs for better performance. However, when integrating third-party controlled inputs (like React Select, MUI, React Quill), it provides a Controller component to work with controlled components.

# Agar Controlled Components best hain, to React Hook Form uncontrolled kyun use karta hai?

    Controlled components re-render on every state update. Large forms with many inputs can trigger unnecessary re-renders. React Hook Form stores input values using refs and subscriptions, so only the affected field updates. This improves performance while still providing validation and easy form handling.

# Why is useRef faster than useState for form inputs?

    Because updating useRef.current or typing into an uncontrolled input does not trigger a React re-render. In contrast, useState updates trigger a re-render of the component, allowing React to keep the UI in sync with state.


=============================================== NODE JS ========================================================


# Node.js asynchronous kaise bana? Event Loop?

                           Architecture

                            JavaScript

                                │

                        Call Stack

                                │

                            Event Loop

                                │

                            libuv

                ┌──────────┬───────────┐

                Timer      File IO     Network

    The Event Loop is a mechanism in the JavaScript runtime that continuously monitors the call stack. When the call stack becomes empty, it first executes all pending microtasks, such as Promise callbacks, and then processes macrotasks like setTimeout. In Node.js, asynchronous operations such as timers, file I/O, and networking are handled by libuv, allowing JavaScript to remain non-blocking.


# Node.js single-threaded hai. Fir ek hi time me thousands of requests kaise handle kar leta hai?

    Node.js executes JavaScript on a single thread. Whenever a time-consuming task like file reading, network requests, or timers comes, it doesn't execute them on the main thread. Instead, it hands them over to the libuv library. While libuv processes those operations, the main thread remains free to handle other requests. Once the task is completed, the Event Loop moves its callback to the call stack for execution. This is why Node.js can handle many concurrent requests without blocking the main thread.

# What is libuv? Why does Node.js need it?

    libuv is a library used by Node.js to handle time-consuming asynchronous operations like timers, file system operations, and network requests. Instead of blocking the main JavaScript thread, Node.js delegates these tasks to libuv. Once the operation is completed, the callback is placed in the task queue. When the call stack becomes empty, the Event Loop moves the callback to the call stack for execution

                            Event Loop Flow Diagram

                                 JavaScript Code
                                        │
                                        ▼
                                ┌──────────────┐
                                │  Call Stack  │
                                └──────────────┘
                                        │
                        ┌───────────────┼────────────────┐
                        │               │                │
                        ▼               ▼                ▼
                Synchronous      setTimeout()     fs.readFile()
                    Code             fetch()        DB Query
                                        │
                                        ▼
                            ┌────────────────┐
                            │     libuv      │
                            │ (Handles Async)│
                            └────────────────┘
                                        │
                        ┌───────────────┼─────────────────┐
                        │                                 │
                        ▼                                 ▼
                Microtask Queue                    Macrotask Queue
                (Promise.then, queueMicrotask)  (setTimeout, setInterval,
                process.nextTick*)             setImmediate, I/O callbacks)
                        │                                 │
                        └───────────────┬─────────────────┘
                                        ▼
                                ┌────────────────┐
                                │  Event Loop    │
                                └────────────────┘
                                        │
                        Is Call Stack Empty?
                               │
                        ┌──────┴──────┐
                        │             │
                        No            Yes
                        │             │
                        │             ▼
                        │     Run ALL Microtasks
                        │             │
                        │             ▼
                        │      Run ONE Macrotask
                        │             │
                        └─────────────┘
                                        │
                                        ▼
                                ┌──────────────┐
                                │  Call Stack  │
                                └──────────────┘
                                        │
                                    Execute

# Libuv vs Event Loop:

    libuv performs the asynchronous work, while the Event Loop is responsible for scheduling completed callbacks for execution on the JavaScript thread

# Micro task V/s Macro task:
                            Complete Diagram

                                Call Stack
                                    │
                                    ▼
                            Synchronous Code
                                    │
                                    ▼
                        ┌─────────────────────────────┐
                        │        Microtask Queue      │
                        ├─────────────────────────────┤
                        │ process.nextTick() ⭐       │
                        │ Promise.then()             │
                        │ Promise.catch()            │
                        │ Promise.finally()          │
                        │ queueMicrotask()           │
                        └─────────────────────────────┘
                                    │
                                    ▼
                        ┌─────────────────────────────┐
                        │       Macrotask Queue       │
                        ├─────────────────────────────┤
                        │ setTimeout()               │
                        │ setInterval()              │
                        │ setImmediate()             │
                        │ fs.readFile() Callback     │
                        │ Network Callbacks          │
                        │ HTTP Request Callback      │
                        │ Socket Events              │
                        └─────────────────────────────┘

# fetch microtask hai?

    fetch() itself starts an asynchronous network operation. The Promise callbacks (.then, .catch, .finally) run as microtasks after the response is available.

# Golden Rule ⭐⭐⭐⭐⭐

    Priority sirf un tasks ke beech compare hoti hai jo "ready" hain.

    fetch() ka .then() tab tak Microtask Queue me aata hi nahi jab tak network response na aa jaye.
    setTimeout() ka callback tab tak Macrotask Queue me aata hi nahi jab tak timer complete na ho.

    Isliye compare hamesha ready callbacks ka hota hai, na ki fetch() aur setTimeout() ka.

# Promise always executes before setTimeout?

    Promise callbacks execute before macrotasks only after the Promise has been resolved. If the Promise hasn't resolved yet, there is nothing to execute.

# What is process.nextTick()?

    process.nextTick() is a Node.js-specific API used to schedule a callback immediately after the current operation completes. It has higher priority than Promise microtasks, so callbacks registered with process.nextTick() execute before .then() callbacks.

    ``` js
    console.log("Start");

    process.nextTick(() => {
        console.log("nextTick");
    });

    Promise.resolve().then(() => {
        console.log("Promise");
    });

    console.log("End");
    ```
    Output : Start > End > nextTick > Promise

    Why? : Kyunki Node.js internally priority aise rakhta hai:

            Call Stack

            ↓

            process.nextTick Queue

            ↓

            Promise Microtask Queue

            ↓

            Macrotask Queue 

# Why do we need it?

    Sometimes we want a callback to execute immediately after the current synchronous code, before any other asynchronous callbacks. process.nextTick() is useful in such cases


# What is setImmediate()?

    setImmediate() schedules a callback to run in the Check phase of the Node.js Event Loop. It is commonly used to execute code immediately after I/O operations without blocking the current execution.


# process.nextTick vs Promise. Which executes first?

    process.nextTick() executes first because Node.js gives it higher priority than the Promise microtask queue.

    ``` js
    console.log("A");

    process.nextTick(()=>console.log("B"));

    Promise.resolve().then(()=>console.log("C"));

    console.log("D");

    O/p: A D B C
    ```


# setImmediate vs setTimeout(0) Difference?

    setTimeout(fn, 0) schedules the callback in the Timers phase, while setImmediate() schedules it in the Check phase. If both are called from the main module, the execution order is not guaranteed. However, inside an I/O callback, setImmediate() usually executes before setTimeout(0)


# Browser vs Node Event Loop

    Both Browser and Node.js use the Event Loop to execute asynchronous callbacks. The main difference is that browsers handle DOM events, rendering, and Web APIs, whereas Node.js has no DOM and uses the libuv library to manage timers, file system operations, and networking



# Why does process.nextTick() run before Promise.then()?

    Because Node.js maintains a separate NextTick Queue and gives it higher priority than the Promise Microtask Queue. After the current synchronous execution finishes, Node.js first drains the NextTick Queue completely, then processes Promise microtasks.

# Why did Node.js designers give process.nextTick() higher priority?

    process.nextTick() was designed for internal Node.js operations that need to execute immediately after the current synchronous code, before the Event Loop continues with other tasks. It allows Node.js and library authors to schedule critical callbacks without waiting for the next Event Loop phase.


## Trick Question - 


    ```javascript
    console.log("A");

    setTimeout(() => {
        console.log("B");

        Promise.resolve().then(() => {
            console.log("C");
        });

        process.nextTick(() => {
            console.log("D");
        });

    }, 0);

    Promise.resolve().then(() => {
        console.log("E");

        process.nextTick(() => {
            console.log("F");
        });
    });

    process.nextTick(() => {
        console.log("G");

        Promise.resolve().then(() => {
            console.log("H");
        });
    });

    console.log("I");

    ```

    A,I, G, E, H, F, B , D , C

    1: A - Sync code hone ke wajah se
    2: SetTimeout - libuv ko timer complete karne ke liye
    3: Promise jo resolved ho chuka hain microtask queue me add hoga
    4: nextTick - Yeh nextTick wale queue me store hoga
    5: I - Sync hone ke wajah se

    Now - 
    NextTick queue  drain hoga - 
    4.1: G - Sync code
    4.2: Promise jo resolved hain - Micro task queue me 3rd no code ke bad add hoga

    NextTick completed hain Abb micro task queues process hoga

    3.1: E - Sync hone ke wajah se
    3.2: Again nextTick wala queue me add hoga

    now 3rd complete - Callstack phir se nextTick ko execute karega
    Micro task me abhi bhi  ek task hain H name se so 
    H - sync ho ke wajah se - 
    now micro task empty - nextTick task execute hoga - 

    F - Sync hone ke wajah se

    Finally Macro task queue execute hoga - 

    2.1:  B - sync hone ke wajah se
    2.2:  Micortask me jayega kyunki resolved promise hain - 
    2.3:  nextTick queue me add hoga

    Then 
    nextTick queue se - D print hoga sync hoke ke wajah se
    and lastly - C print hoga





# Why do we need Streams?

    A Stream is a way to process data in small chunks instead of loading the complete data into memory. This makes the application memory efficient and is especially useful for large file uploads, downloads, video streaming, and data processing.

# Have you used Streams?

    Yes. I have used streams during file uploads. Instead of loading the complete uploaded file into server memory, the file is processed chunk by chunk. This keeps memory usage low and allows large files to be handled efficiently.

# How much is one chunk?

    64KB

# Why are Streams more memory efficient than fs.readFile()?

    fs.readFile() reads the complete file into memory before processing starts. For small files this is fine, but for very large files it can consume a lot of RAM and affect application performance. Streams solve this problem by reading the file in smaller chunks. As soon as a chunk is available, processing can start without waiting for the entire file. This keeps memory usage low and makes large file handling much more efficient.

# What is highWaterMark?

    highWaterMark is a stream configuration that controls how much data is read into memory in a single chunk. By default, fs.createReadStream() reads about 64 KB at a time, but we can increase or decrease this size depending on our use case.

    ``` js
    const fs = require("fs");

    const stream = fs.createReadStream("movie.mp4",{

        highWaterMark : 1024 // 1KB chunk size default is 64KB

    });

    const stream = fs.createReadStream("movie.mp4",{

        highWaterMark : 1024 * 1024 // 1MB chunk size default is 64KB

    });

    ```

# Why would someone increase highWaterMark?

    highWaterMark defines the maximum amount of data that a stream reads into its internal buffer at one time. Increasing it can improve throughput by reducing callback overhead, while decreasing it lowers memory usage


# Why would you change it?

    If the chunk size is too small, the stream has to perform more read operations and callbacks, which increases overhead. If the chunk size is too large, memory usage increases. So we choose a value that provides a good balance between performance and memory usage


# Have you changed highWaterMark in production?

    No, I haven't had a production requirement to tune highWaterMark. I've mostly used the default configuration, which was sufficient for our file upload use cases. I know it can be tuned when optimizing memory usage or throughput for very large files


    highWaterMark controls the chunk size of a stream. By default, a read stream reads around 64 KB at a time. We can change this value based on our requirements. A smaller chunk reduces memory usage but increases the number of read operations, while a larger chunk improves throughput but uses more memory. So it's a trade-off between memory consumption and performance.

# What is pipe()?

    pipe() is a method that connects a Readable Stream directly to a Writable Stream. It automatically transfers data chunk by chunk without manually reading and writing each chunk.

    Example : 

    ``` js

        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");
        const writeStream = fs.createWriteStream("output.txt");

        /**
         * Question - 
         * 
         *  input.txt

            ↓

            Read

            ↓

            Write

            ↓

            output.txt
         * kaise karoge?
         * 
         * **/

        // Without pipe()

        // Yahan tum manually:

        // Read kar rahe ho
        // Har chunk receive kar rahe ho
        // Fir write kar rahe ho

        readStream.on("data", (chunk) => {
            writeStream.write(chunk);
        });

        // With pipe()

        readStream.pipe(writeStream);
    ```

 # Why use pipe() instead of writing on('data') manually?

    pipe() automatically handles data flow and is cleaner and less error-prone. It also manages backpressure internally, so the readable stream doesn't overwhelm the writable stream.

# What is Backpressure?

    Backpressure is a flow control mechanism used in streams. In many cases, the readable stream can produce data faster than the writable stream can consume it. If data keeps flowing, memory usage will increase. To avoid this, backpressure temporarily pauses the readable stream until the writable stream is ready, then it resumes the flow.

# Can you give a real example?

    Suppose I'm uploading a large file to cloud storage. Reading the file from disk may be faster than uploading it over the network. If I keep reading without control, data will accumulate in memory. Backpressure ensures that reading slows down whenever the network is busy.

# Is backpressure automatic?

    pipe() automatically handles backpressure. However, if we manually consume stream data using events like data, then we are responsible for handling backpressure ourselves using methods like pause(), resume(), and the drain event.


    Example:

    Using pipe() : yahan backpressure ko nodejs internally control karta hain.

    ``` js
        const readStream = fs.createReadStream("input.txt");
        const writeStream = fs.createWriteStream("output.txt");

        readStream.pipe(writeStream);
    ```

    Without Using pipe():

    ``` js
            readStream.on("data",(chunk)=>{

            writeStream.write(chunk);

            });

            // iss case me humne manually check karna padega like:

            const canWrite = writeStream.write(chunk);

            if (!canWrite) {
                readStream.pause();

                writeStream.once("drain", () => {
                    readStream.resume();
                });
            }
    ```
    pipe() sirf syntax sugar nahi hai.

    Uske andar Node.js bahut saari complexity handle karta hai:

    ✅ Reading
    ✅ Writing
    ✅ Error propagation
    ✅ Backpressure
    ✅ Flow control

    Isi wajah se production me hum almost hamesha pipe() prefer karte hain instead of manually handling every chunk.

# How does pipe() automatically handle backpressure internally?

    pipe() continuously sends chunks from the readable stream to the writable stream. Internally, Node.js checks whether the writable stream is ready to accept more data. If the writable stream becomes busy or its internal buffer is full, pipe() automatically pauses the readable stream. Once the writable stream finishes processing the buffered data and emits the drain event, pipe() resumes the readable stream. This flow control mechanism is called backpressure.

# Can you explain with a flow?

            Readable Stream
                │
                ▼
            Read Chunk
                │
                ▼
            Writable.write(chunk)
                │
                ▼
            Can Writable accept more data?
                │
            ┌────┴────┐
            │         │
            Yes        No
            │         │
            ▼         ▼
            Next Chunk Pause Readable
                        │
                        ▼
                Wait for 'drain' event
                        │
                        ▼
                Resume Readable

# How does Node.js know the writable stream is full?

    ``` js
        const canWrite = writeStream.write(chunk);
    ```
    pipe() automatically pauses the readable stream when the writable stream cannot consume data fast enough. Once the writable stream emits the drain event, it resumes reading. This prevents excessive memory usage and is how Node.js implements backpressure internally.

# How many types of Streams are there in Node.js?

    There are four types of streams in Node.js: Readable, Writable, Duplex, and Transform:

    Readable Stream

    Purpose

    Read Data

    Example

    const readStream = fs.createReadStream("input.txt");

    Real Life

    Read file
    Read request body
    Download file

    Diagram

    Disk/File
        │
        ▼
    Readable Stream
        │
        ▼
    JavaScript
    Writable Stream

    Purpose

    Write Data

    Example

    const writeStream = fs.createWriteStream("output.txt");

    Real Life

    Save uploaded file
    Write logs
    Generate CSV

    Diagram

    JavaScript
        │
        ▼
    Writable Stream
        │
        ▼
    Disk/File
    Duplex Stream

    Purpose

    Read + Write

    Example

    TCP Socket

    Real Life

    Chat application

    Client
    │ Send
    ▼
    Server
    ▲
    Reply

    Ek hi connection

    Read bhi

    Write bhi

    Transform Stream ⭐⭐⭐⭐⭐

    Purpose

    Read

    ↓

    Modify

    ↓

    Write

    Example

    Compression

    Encryption

    Uppercase Conversion

    Example Code

    const zlib = require("zlib");

    readStream.pipe(zlib.createGzip()).pipe(writeStream);

    Yahan

    Read

    ↓

    Compress

    ↓

    Write
    Memory Trick
    Readable

    ↓

    Read

    -----------------

    Writable

    ↓

    Write

    -----------------

    Duplex

    ↓

    Read + Write

    -----------------

    Transform

    ↓

    Read + Modify + Write


# Is every Transform stream a Duplex stream?

    ✅ Yes.

    Because Transform

    Read karta hai.
    Write karta hai.
    Aur beech me data modify bhi karta hai.


# What is Buffer?

    A Buffer is a temporary memory area used by Node.js to store raw binary data before it is processed.

# Why can't Streams directly pass data to JavaScript?

    Streams read binary data from sources like files or network sockets. Node.js stores this binary data in Buffers first because Buffers are optimized for handling raw binary data. JavaScript can then process or convert that data as required.

# Have you ever used Buffer directly?

    Not directly in business logic. Most of my usage has been indirect through streams and file uploads, where Node.js internally uses Buffers to process binary data.

# What is the relationship between Streams and Buffers?

    Streams process data chunk by chunk instead of loading the complete file into memory, making them memory efficient. Each chunk is received as a Buffer, which is Node.js's optimized temporary memory area for storing raw binary data. The stream reads binary data into Buffers, and then JavaScript can process or convert that data as required. So, Buffers store the binary data, while Streams are responsible for moving and processing that data efficiently.

    OR

    A Stream is the flow of data, while a Buffer is the temporary memory that holds each chunk of data during that flow.

                Actually flow ye hai:
                    File

                    ↓

                    Readable Stream

                    ↓

                    Buffer

                    ↓

                    JavaScript

                    ↓

                    (optional processing)

                    ↓

                    Writable Stream

## Stream Events

                Stream Life Cycle (Imagine)

                        movie.mp4

                        ↓

                        Readable Stream

                        ↓

                        JavaScript

                        ↓

                        Writable Stream

                        ↓

                        output.mp4

    Iss journey me kya kya ho sakta hai?

    1. Data aaya
    2. Data khatam hua
    3. Error aaya
    4. Writable busy hua
    5. Writing complete hui

    Yehi events hain.

# When does data event fire?

    The data event is emitted every time a new chunk of data is available from a readable stream

    ``` js
        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");

        readStream.on("data", (chunk) => {
            console.log(chunk); // chunk ka datatype - Buffer
        });
    ```

# Difference between data and end?

    data is emitted for every chunk, whereas end is emitted only once when the readable stream has no more data to provide.

    ``` js
            readStream.on("end", () => {
                console.log("Reading Completed");
            });
    ```

# Why should we always handle error?

    Streams perform asynchronous operations, so errors are emitted through the error event. Handling it prevents unexpected crashes and allows graceful error handling.

    ``` js  
        readStream.on("error", (err) => {
            console.log(err.message);
        });
    ```

# When does drain event fire?

    drain is emitted by a writable stream when its internal buffer has been emptied enough to accept more data after backpressure.

    ``` js

        readStream.on("data",(chunk)=>{

        writeStream.write(chunk);

        });

        // iss case me humne manually check karna padega like:

        const canWrite = writeStream.write(chunk);

        if (!canWrite) {
            readStream.pause();

            writeStream.once("drain", () => {
                readStream.resume();
            });
        }
    ```

# When does the finish event fire?

    finish is emitted by a writable stream after all the data has been successfully written and stream.end() has been called. It indicates that the writing operation is complete.

    ``` js
        writeStream.on("finish", () => {
            console.log("Writing Completed");
        });
    ```

    Example:

    ``` js

        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");

        const writeStream = fs.createWriteStream("output.txt");

        readStream.on("data",(chunk)=>{

            console.log("Reading Chunk");

        });

        readStream.on("end",()=>{

            console.log("Read Complete");

        });

        readStream.on("error",(err)=>{

            console.log(err.message);

        });

        writeStream.once("drain", () => {
                readStream.resume();
            });

        writeStream.on("finish",()=>{

            console.log("Write Complete");

        });

    ```

# Read a file using Streams instead of readFile().

    ``` js
        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");
        
        //data event
        readStream.on("data",(chunk)=>{
            console.log(chunk.toString())
        });

        // end

        readStream.on("end",()=>{
            console.log("Reading completed")
        })

        //error

        readStream.on("error",(err)=>{
            console.log(err.message);
        })

    ```

# Copy one file into another using Streams.

    ``` js
        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");
        const writeStream = fs.createWriteStream("output.txt");

        readStream.on("data",(chunk)=>{
            writeStream.write(chunk)
        })

        readStream.on("end",()=>{
            writeStream.end();
        })
    ```

# Isme problem kya hai?

    This works, but I'm manually handling each chunk and also manually ending the writable stream. It also doesn't automatically manage backpressure.

    BETTER:

    ``` js

        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");

        const writeStream = fs.createWriteStream("output.txt");

        readStream.pipe(writeStream);
    ```
# Why is this better?

    pipe() automatically transfers chunks, manages backpressure, and simplifies the code.


# Calculate file size using Streams.

    ``` js
        const fs = require("fs");
        let total = 0;

        const readStream = fs.createReadStream("input.txt");

        readStream.on("data",(chunk)=>{
            total+=chunk.length; // because chunk is a Buffer
        })

        readStream.on("end",()=>{
            console.log(total);
        })
    ```

# Compress a File

    ``` js

        const fs = required("fs");

        const zlib = required("zlib");

        fs.createReadStream("movie.mp4").pipe(zlib.createGzip()).pipe(fs.createWriteStream("movie.mp4.gz"));

    ```

# File upload me Stream kahan use hota hai?

    Flow

    Client

    ↓

    Readable Stream

    ↓

    Buffer

    ↓

    Processing

    ↓

    Writable Stream

    ↓

    Storage

    Agar Multer, Busboy, Cloudinary SDK ya S3 SDK use karte ho, to internally streams ka use hota hai.

# Why not use readFile() everywhere?

    readFile() loads the complete file into memory, which is fine for small files but inefficient for large files. Streams process data chunk by chunk, reducing memory usage and allowing processing to start before the entire file is read.

# 20GB memory me load hoga then processing start hoga.

    For a 20 GB file, I would use createReadStream().pipe(createWriteStream()) instead of readFile(). readFile() first loads the entire file into memory, which can consume a large amount of RAM and even cause memory exhaustion. Streams process the file chunk by chunk, so writing starts as soon as each chunk is read, without waiting for the entire file. In addition, pipe() automatically handles backpressure by pausing the readable stream when the writable stream is busy and resuming it when it is ready.

# I thought pipe() handles everything automatically. Why do I still need error handlers?

    pipe() automatically manages data flow and backpressure, but it does not replace application-level error handling. Read and write failures are emitted as error events, so we should still listen for them to avoid unhandled stream errors and to respond appropriately.


    Node.js ne isi problem ko solve karne ke liye ek aur API introduce ki.

    ``` js

        const { pipeline } = require("stream");
        pipeline(
        readStream,
        writeStream,
        (err) => {
            if (err) {
                console.log("Pipeline Failed:", err.message);
            } else {
                console.log("Pipeline Completed");
            }
        }
    );
    ```

    pipeline() ka benefit
    ✅ Automatically connects streams
    ✅ Better error propagation
    ✅ Cleans up streams if one fails
    ✅ Recommended over complex pipe() chains


# Difference between pipe() and pipeline()?

    pipe() is convenient for connecting streams and handling backpressure, but it requires manual error handling. pipeline() builds on top of streams by handling cleanup and propagating errors more reliably, making it the preferred choice for production stream pipelines.


# pipe() vs pipeline()

    ``` js

        const fs = require("fs");

        const readStream = fs.createReadStream("input.txt");
        const writeStream = fs.createWriteStream("output.txt");

        readStream.pipe(writeStream);
    ```

    Question.

    Ye code sahi hai?

    ✅ YES.

    Question.

    Production ready hai?

    Not completely.

    Kyun?

    Suppose

    input.txt

    exist hi nahi karti.

    Ya

    Permission denied.

    Ya

    Disk full.

    Question.

    Kaun cleanup karega?

    Kaun saare streams close karega?

    Kaun ek hi jagah error dega?

    Tumhe manually handle karna padega.


    ## Ab pipeline()

    ``` js
        const fs = require("fs");
        const {pipeline} = require("stream")

        pipeline(
           fs.createReadStream("input.txt"),
           fs.createWriteStream("output.txt"),
           (err)=>{
                if(err){
                    console.log("Pipeline Failed");
                }else{
                    console.log("Pipeline Success");
                }

           }

        )
    ```


    pipe() is used to connect readable and writable streams and automatically handles backpressure. However, error handling and resource cleanup need to be managed separately. pipeline() provides the same streaming functionality but also handles error propagation and cleanup automatically, making it a better choice for production applications.


# Can I replace every pipe() with pipeline()?

    For production stream pipelines, pipeline() is generally preferred because it provides centralized error handling and automatic cleanup. pipe() is still useful for simpler cases or when you want finer control over the stream lifecycle.


    Suppose tum ye likhte ho:

    ``` js
        readStream
        .pipe(gzip)
        .pipe(encrypt)
        .pipe(writeStream);
    ```

    Yahan 4 streams hain.

        Readable Stream
        Gzip Transform Stream
        Encrypt Transform Stream
        Writable Stream

    Error kis stream me aa sakta hai? - Kisi bhi stream me. to phir ?

    ``` js

    readStream.on("error", ...)

    ```
    enough nahi hai.

    Manual Error Handling

    ``` js
        readStream.on("error", handleError);

        gzip.on("error", handleError);

        encrypt.on("error", handleError);

        writeStream.on("error", handleError);
    ```

# If you're using pipe(), how will you handle errors?

    With pipe(), I need to attach error listeners to every stream involved in the pipeline, such as the readable, transform, and writable streams. If any stream fails, I should also clean up the remaining streams. This is one of the reasons pipeline() is preferred in production, because it centralizes error handling and automatically cleans up resources.


# Why are Streams considered memory efficient? Why can't we simply use fs.readFile() for every file operation?

    Streams are more memory efficient because they process data chunk by chunk instead of loading the entire file into memory. In contrast, fs.readFile() first reads the complete file into RAM, which is fine for small files but can consume a large amount of memory for large files and may even lead to memory exhaustion. With streams, processing starts as soon as the first chunk is available, so memory usage stays low and large files can be handled efficiently

# You said Streams start processing immediately. Can you explain what 'processing' means? Give me a real example.

    By processing, I mean performing some operation on each chunk as soon as it becomes available. For example, while reading a large CSV file, I can validate each record immediately instead of waiting for the complete file. Similarly, during file uploads I can directly stream chunks to cloud storage, or compress and encrypt data while it is being read.


# What is Backpressure? What happens if it doesn't exist?

    Backpressure is a flow control mechanism that manages the rate of data transfer between a fast readable stream and a slower writable stream. If the writable stream cannot consume data fast enough, the readable stream is automatically paused. Once the writable stream empties its internal buffer and emits the drain event, reading resumes. Without backpressure, data would keep accumulating in memory, leading to increased memory usage, poor performance, and potentially memory exhaustion.


# Who calls pause() and resume()?

    It depends on how streams are being used. If I'm manually consuming the stream using events like data, then I'm responsible for handling backpressure by calling pause(), listening for the drain event, and then calling resume(). However, if I'm using pipe(), Node.js internally manages this flow automatically. pipe() pauses the readable stream when the writable stream is full and resumes it after the writable stream emits the drain event.

# If pipe() already handles backpressure automatically, then why do we even have pause() and resume() methods?

    pipe() is the preferred approach because it automatically handles data transfer and backpressure. However, if I need custom processing for each chunk—for example, validating data, modifying it, filtering records, encrypting it, or making decisions before writing—then I may consume the stream manually using the data event. In that case, I'm responsible for handling backpressure using pause(), resume(), and the drain event


## Cluster vs Worker Threads vs Child Process


# Cluster

    Cluster allows a Node.js application to create multiple processes so that all CPU cores of a machine can be utilized. Each worker process has its own memory and event loop

# Why use Cluster?

    "To utilize multiple CPU cores and increase the number of concurrent requests the server can handle."

# Who distributes requests among Cluster workers?

    Within a Node.js cluster running on a single machine, the primary process distributes incoming connections among worker processes. In a production environment with multiple servers, an external load balancer such as Nginx or AWS ALB first distributes traffic across servers, and then each server's cluster distributes requests among its worker processes

    Real Production Architecture
            Users
            │
            ▼
        Load Balancer (Nginx / AWS ALB)
            │
        ┌────┴────┐
        │         │
        Server-1   Server-2
        │          │
        Cluster     Cluster
        │          │
        W1 W2 W3    W1 W2 W3


# When would you choose Cluster and when would you choose Worker Threads?

    I would use Cluster when I want to scale a Node.js server and utilize multiple CPU cores to handle more concurrent requests. A primary process creates multiple worker processes and distributes incoming requests among them

    and 

    I would use Worker Threads for CPU-intensive tasks such as image processing, video compression, encryption, or PDF generation. These tasks run in separate threads so that the main thread remains responsive and can continue handling incoming HTTP requests.


# Video compression is CPU-intensive. Why not use Cluster instead of Worker Threads?

    I would not use Cluster for video compression because Cluster is designed to scale request handling across CPU cores, not to offload CPU-intensive work inside a request. If one cluster worker starts compressing a video, that worker becomes busy and cannot efficiently handle other requests. Worker Threads are specifically designed for CPU-intensive tasks, allowing the main thread of that worker to continue serving HTTP requests while the heavy computation runs in a separate thread.

    Cluster scales the application. Worker Threads accelerate CPU-intensive work.


# Agar Cluster aur Worker Threads hain... to Child Process ki zarurat hi kya hai?

    child_process is used to create a separate operating system process to execute external programs or commands.

    ``` js
        const { exec } = require("child_process");

        exec("python app.py", (err, stdout, stderr) => {
            console.log(stdout);
        });

    ```


    Interview                                       Table
    Use Case	                                    Choose
    More HTTP Requests	                            Cluster
    Image Compression in JS	                        Worker Thread
    Run Python Script	                            Child Process
    Run FFmpeg	                                    Child Process
    Video Compression Library written in JS	        Worker Thread


# Suppose your application needs to compress a video using FFmpeg. Would you choose Worker Threads or Child Process, and why?

    I would use child_process because FFmpeg is an external executable tool, not JavaScript code. child_process allows Node.js to start and communicate with external operating system processes. Worker Threads are suitable for CPU-intensive JavaScript tasks, whereas FFmpeg runs as a separate process."


# CPU-bound vs I/O-bound


    I/O-bound

    Jab application

    Database

    Network

    Redis

    File

    API

    ka wait kar rahi hoti hai.

    CPU

    Mostly Free

    rehta hai.


    CPU-bound

    Jab CPU continuously calculation kar raha ho.

    Examples

    Video Compression
    Image Resize
    Encryption
    Hashing
    PDF Generation
    Sorting 5 Million Records
    AI Inference


# Difference between Vertical and Horizontal Scaling?

    Vertical Scaling means increasing the resources of the same server, such as CPU or RAM. Horizontal Scaling means adding more servers and distributing traffic among them using a load balancer. Horizontal Scaling provides better fault tolerance and is generally preferred for large-scale applications.


# If you have multiple servers, where will user sessions be stored?

    Redis

# Why is Horizontal Scaling generally preferred over Vertical Scaling in production?

    In vertical scaling, we increase the resources of the same server, such as CPU and RAM. It is simple to implement but has hardware limits, and if that single server fails, the entire application can become unavailable. In horizontal scaling, we add multiple servers and distribute incoming traffic using a load balancer. This provides better fault tolerance, high availability, and allows the application to handle increasing traffic by adding more servers.


# If you have 5 application servers behind a load balancer, what should you avoid storing in server memory?

    In a horizontally scaled application, I would avoid storing user sessions in the memory of an individual application server because the load balancer can route subsequent requests to any server. If the session is stored only in one server's memory, other servers won't have access to it, causing the user to appear logged out or lose their session. Instead, I would use a shared session store such as Redis so that every application server can access the same session data.


# Why Redis? Why not MongoDB for session storage?

    Ye bahut frequently poochha jata hai.

    Expected answer:

        Session temporary hota hai.
        Redis in-memory hai.
        Very fast read/write.
        TTL support.
        Automatic expiration.



## API Design & Backend Architecture


# What is a REST API?

    REST (Representational State Transfer) is an architectural style for designing APIs. It uses standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE to allow clients and servers to communicate in a stateless manner.


# REST Principles - 

    Stateless - Har request

                ↓
                Apne saath
                JWT
                Session ID
                Authorization
                lekar aayegi.
                Isliye

                Stateless.

    Resource Based URLs - 

                Good
                GET /users
                Good
                GET /courses/10

                Bad
                GET /getUsers
                Bad
                POST /deleteCourse

                Resource ko represent karo.

                Action ko nahi.


    Proper HTTP Methods - 

                GET, POST, PUT, PATCH, DELETE

# Why shouldn't we delete data using GET?

    GET requests should only retrieve data and should not modify server state. Browsers, proxies, and caches assume that GET is safe and may automatically cache or prefetch such requests. If we perform a delete operation using GET, it violates REST principles and can lead to unintended data modifications. Therefore, DELETE should be used for delete operations.


# What is Idempotency?

    An operation is idempotent if making the same request multiple times results in the same final state on the server as making it once.


# Why is idempotency important?

    It prevents duplicate operations caused by retries, network failures, or repeated user actions. This is especially important for critical operations such as payments, order creation, and financial transactions.


# Is POST always non-idempotent?

    No. POST is generally non-idempotent because it is commonly used to create new resources, so repeated requests usually create multiple resources. However, it can be made idempotent by implementing mechanisms such as an Idempotency-Key, which is commonly used in payment APIs to prevent duplicate operations.



# What is API Versioning?

    API Versioning is a technique to introduce changes in an API without breaking existing clients. Older clients continue using the old version, while new clients can migrate to the newer version

    Common Approaches:

        1. URL Versioning - 

            GET /api/v1/courses
            GET /api/v2/courses

            Ye sabse common aur interview-friendly answer hai.
        
        2. Header Versioning - 

            Accept-Version: v2

        3. Query Parameter - 

            GET /courses?version=2

# Which versioning approach have you used?

    In my previous projects, we didn't need multiple API versions, but if backward compatibility is required, I would prefer URL versioning (/api/v1, /api/v2) because it is simple, explicit, and widely adopted

# When should we create a new API version?

    A new API version should be introduced when there are breaking changes, such as removing fields, changing response formats, modifying request structures, or changing the behavior of existing endpoints. Backward-compatible additions, like adding an optional field, often don't require a new version

# Would you create a new API version? Why or why not?

    No, not necessarily. If the change is backward compatible, such as adding an optional field, existing clients will continue to work because they can ignore fields they don't use. I would create a new API version only when introducing breaking changes that could impact existing clients.

# What is Pagination?

    Pagination is a technique used to divide a large dataset into smaller pages so that only a limited number of records are returned in each request. This improves performance, reduces network usage, and provides a better user experience.

    Offset Pagination - 

        GET /courses?page=2&limit=10

        ``` js
            const page = 2;
            const limit = 10;

            Course.find()
                .skip((page - 1) * limit)
                .limit(limit);
        ```

# How does skip() work?

    skip() ignores the specified number of documents before returning the next set of results.


    Cursor Pagination - 

        Instead of

        ?page=100

        Hum bolte hain

        GET /courses?cursor=66b8f2...

        Ya

        GET /courses?lastId=66b8f2...

        ``` js
                Course.find({
                    _id: { $gt: lastId }
                }).limit(10);
        ```

# When would you use Cursor Pagination instead of Offset Pagination?

    For very large datasets or infinite scrolling applications, I prefer cursor pagination because it avoids large skip() operations and provides better performance


# Why is Cursor Pagination faster than Offset Pagination for large datasets?

    Offset pagination uses skip(), which becomes inefficient for large datasets because the database has to skip or scan many records before returning the requested page. Cursor pagination instead uses the last record's ID (or another indexed field) to fetch the next set of results directly, making it much more efficient for large datasets and infinite scrolling applications.

# Why do we usually use _id or createdAt as the cursor?

    _id and createdAt are commonly used as cursors because they are unique (or nearly unique when combined with _id), indexed, and naturally ordered. This allows the database to efficiently fetch the next set of records without scanning or skipping a large number of documents.


# Rate Limiting

    I use express-rate-limit middleware to limit the number of requests from a client within a specific time window. This helps protect APIs from abuse, brute-force attacks, and excessive traffic.

    ``` js
        const rateLimit = require("express-rate-limit");

        const limiter = rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100
        });

        app.use(limiter);
    ```

# Caching (Redis)

    I have used ioredis for caching. Before querying MongoDB, I first check Redis using redis.get(). If the data is available, I return it directly. Otherwise, I fetch it from MongoDB, store it in Redis with an expiry time using redis.set(), and then return the response.

    ``` js

        // Simple Example (ioredis)
        // npm install ioredis
        const Redis = require("ioredis");

        const redis = new Redis();

        // Controller

        app.get("/courses", async (req, res) => {

            const cache = await redis.get("courses");

            if (cache) {
                return res.json(JSON.parse(cache));
            }

            const courses = await Course.find();

            await redis.set("courses", JSON.stringify(courses), "EX", 300);

            res.json(courses);

        });

        // Yahan:

        // redis.get() → Cache check
        // Cache hit → Return
        // Cache miss → MongoDB query
        // redis.set(..., "EX", 300) → 5 minutes ke liye cache store


    ```


# WebSocket

    Unlike HTTP, where the client must send a new request each time, WebSocket establishes a persistent two-way connection between the client and server. This enables real-time communication for applications such as chat, notifications, and live dashboards.


    ``` js

        // Installation
        // npm install socket.io
        // Server
        const { Server } = require("socket.io");

        const io = new Server(server);

        io.on("connection", (socket) => {

            console.log("User Connected");

            socket.on("message", (msg) => {
                console.log(msg);
            });

        });
        // Client
        socket.emit("message", "Hello");

    ```

# What is the difference between Lazy Loading and Code Splitting?

    Code Splitting is the process of dividing a large JavaScript bundle into smaller chunks. Lazy Loading uses those chunks and loads them only when they are needed, instead of downloading everything during the initial page load

# Can Lazy Loading work without Code Splitting?

    No. Lazy Loading depends on Code Splitting. First the application is split into separate bundles, then Lazy Loading loads those bundles on demand


## MongoDB - 

# What is Write Concern in MongoDB?

    Write Concern defines how much acknowledgment MongoDB should wait for before considering a write operation successful. It controls the balance between data durability and write performance.

# What are the different Write Concern levels?

    With w:1, MongoDB acknowledges the write as soon as the primary node writes the data. With w:"majority", MongoDB waits until the majority of replica set members confirm the write, providing better durability but with slightly higher latency.

    ``` js
        db.users.insertOne(
        {name:"Raj"},
        {writeConcern:{w:0}}
        )
    ```

    Meaning

    Fire and Forget.
    Client acknowledgement ka wait nahi karega.

    ✅ Fastest

    ❌ Data loss possible.

    w:1 ⭐⭐⭐⭐⭐
    {writeConcern:{w:1}}

    Meaning

    Primary node ne write kar diya.

    Bas.

    Success.

    Replication ka wait nahi.

    Default.

    w:"majority" ⭐⭐⭐⭐⭐
    {writeConcern:{w:"majority"}}

    Meaning

    Primary + Majority Replica Set members me write replicate hone ke baad hi success.

    Example

    Replica Set

    Primary

    Secondary 1

    Secondary 2

    Majority = 2

    Primary

    Secondary1

    Success.

    Question 3
    Difference between w:1 and w:"majority"?
    w:1	w:"majority"
    Only Primary acknowledges	Majority nodes acknowledge
    Faster	Slower
    Less Durable	More Durable
    Rollback Possible	Rollback chance much lower

# When would you use w:"majority"?

    For critical business data such as banking transactions, payment records, order confirmations, or financial systems where data loss cannot be tolerated.


# When would you use w:1?

    For applications where high write performance is more important than maximum durability, such as analytics, logs, or temporary data.

# Can data be lost with w:1?

    Yes. If the primary acknowledges the write but crashes before replication to secondary nodes, that write may be rolled back during failover.