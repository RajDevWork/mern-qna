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