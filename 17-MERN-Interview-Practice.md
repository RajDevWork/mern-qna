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