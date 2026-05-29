# 🚀 Complete Frontend & Backend Interview Preparation Guide

## 📚 Table of Contents

1. [HTML (1-50)](#-html-1-50)
2. [CSS (51-100)](#-css-51-100)
3. [Browser Working & Rendering (1-40)](#-browser-working--rendering-1-40)
4. [Frontend Security (41-90)](#-frontend-security-41-90)
5. [Performance Optimization (91-120)](#-performance-optimization-91-120)
6. [JavaScript (1-120)](#-javascript-1-120)
7. [React (121-220)](#-react-121-220)
8. [Node + Express (221-310)](#-node--express-221-310)
9. [MongoDB (311-360)](#-mongodb-311-360)
10. [System Design & DevOps (361-500)](#-system-design--devops-361-500)
11. [Real-World Experience Questions (401-450)](#-real-world-experience-questions-401-450)
12. [Scenario-Based Questions (451-500)](#-scenario-based-questions-451-500)
13. [Tricky Frontend Questions (Top 30)](#-tricky-frontend-questions-top-30)
14. [Database (Top 25)](#-database-top-25)
15. [PHP + Laravel (100 Questions)](#-php--laravel-top-100-questions)

---

## 🧱 HTML (1-50)

### Basics
1. HTML kya hai?

    Hindi Explanation
    HTML ka full form HyperText Markup Language hai.
    Ye web pages ka basic structure banane ke liye use hota hai.

    Browser ko batata hai:

    heading kaha hogi
    paragraph kaha hoga
    image, button, form, table etc. kaha render honge

    HTML programming language nahi hai, ye ek markup language hai kyunki ye content ko structure karti hai using tags.

    Example:

    <h1>Hello</h1>
    <p>Welcome to website</p>
    Interview Me English Me Kya Bolna Hai

    HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure web pages. HTML defines elements like headings, paragraphs, images, forms, tables, and links using tags. It is not a programming language; it is a markup language used to structure content for browsers.


2. HTML5 kya hai?

    Hindi Explanation
    HTML5 HTML ka latest version hai.

    Isme bahut naye features aaye:

    Semantic tags
    Audio and video support
    Canvas
    Local Storage
    Better form validation
    Geolocation APIs

    Pehle audio/video play karne ke liye plugins lagte the jaise Flash, but HTML5 me direct support milta hai.

    Semantic tags jaise:

    <header>
    <footer>
    <article>
    <section>
    <nav>

    Ye SEO aur readability improve karte hain.

    `Interview Answer `(English)

    HTML5 is the latest version of HTML that provides new features and improved support for modern web applications.

    It introduced semantic elements like <header>, <section>, and <footer> for better readability and SEO.

    HTML5 also supports multimedia elements such as <audio> and <video> without requiring external plugins.
    Additionally, it provides APIs like Local Storage, Geolocation, Canvas, and improved form handling.


3. Doctype kya hota hai?

    Hindi Explanation
    DOCTYPE browser ko batata hai ki document kaunsa HTML version use kar raha hai.

    Ye file ke sabse top me likha jata hai.

    Example:

    <!DOCTYPE html>

    HTML5 me sirf itna hi likhna hota hai.

    Agar DOCTYPE nahi lagate to browser quirks mode me chala jata hai jahan rendering inconsistent ho sakti hai.

    DOCTYPE khud HTML tag nahi hai.

    `Interview Answer `(English)

    The DOCTYPE declaration tells the browser which version of HTML the document is using.

    In HTML5, the declaration is:

    <!DOCTYPE html>

    It helps the browser render the page in standards mode instead of quirks mode, ensuring consistent behavior across browsers.
    DOCTYPE is not an HTML tag; it is an instruction to the browser.

4. Meta tags kya hote hain?

    Hindi Explanation
    Meta tags webpage ke baare me metadata provide karte hain.

    Ye <head> section ke andar likhe jate hain aur directly webpage par visible nahi hote.

    Meta tags use hote hain:

    SEO ke liye
    Character encoding define karne ke liye
    Responsive design ke liye
    Description dene ke liye

    Example:

    <meta charset="UTF-8">
    <meta name="description" content="HTML Interview Notes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `Interview Answer `(English)

    Meta tags provide metadata about the HTML document.

    They are placed inside the <head> section and are not directly visible on the webpage.

    Meta tags are commonly used for:

    SEO
    Character encoding
    Responsive design
    Page descriptions
    Browser compatibility

    Example:
    <meta charset="UTF-8">


5. Charset kya hai?

    Hindi Explanation
    Charset define karta hai ki browser text characters ko kaise interpret karega.

    Mostly UTF-8 use hota hai because ye almost sabhi languages aur special characters support karta hai.

    Example:

    <meta charset="UTF-8">

    Agar charset define nahi karenge to kuch characters incorrectly display ho sakte hain.

    `Interview Answer `(English)

    Charset defines the character encoding used in the HTML document.

    The most commonly used charset is UTF-8 because it supports almost all characters and languages.

    Example:

    <meta charset="UTF-8">
    It ensures that text and special characters are displayed correctly in the browser.


### Structure
6. `<html>`, `<head>`, `<body>` ka role?
7. `<title>` vs `<h1>` difference?
8. `<div>` vs `<span>`?
9. Block vs inline elements?
10. Inline-block kya hai?

### Semantic HTML (VERY IMPORTANT)
11. Semantic tags kya hain?
12. `<header>` kya karta hai?
13. `<footer>`?
14. `<section>` vs `<article>`?
15. `<nav>` ka use?
16. `<aside>` kya hota hai?
17. Semantic HTML ke benefits?

### Forms
18. `<form>` ka use?
19. GET vs POST?
20. Input types?
21. `name` vs `id`?
22. `label` ka use?
23. Required attribute?
24. Validation kaise hoti hai?
25. Placeholder vs value?
26. Radio vs checkbox?
27. Form submit ka flow?

### Media
28. `<img>` tag?
29. alt attribute kyun important hai?
30. `<audio>` aur `<video>`?
31. `<source>` tag?
32. Lazy loading images?

### Links & Navigation
33. `<a>` tag ka use?
34. target="_blank"?
35. Anchor vs button?
36. Relative vs absolute URL?

### Tables
37. `<table>` structure?
38. `<thead>`, `<tbody>`?
39. colspan vs rowspan?
40. Table vs div layout?

### Advanced HTML
41. LocalStorage kya hai?
42. SessionStorage kya hai?
43. Cookies kya hain?
44. Web storage difference?
45. iframe kya hai?
46. data-* attributes?
47. ARIA roles kya hain?
48. Accessibility kya hai?
49. SEO basics HTML mein?
50. HTML best practices?

---

## 🎨 CSS (51-100)

### Basics
51. CSS kya hai?
52. CSS types
53. Specificity kya hai?
54. !important kya karta hai?
55. Cascade kya hai?

### Selectors
56. Class vs ID selector?
57. Attribute selector?
58. Pseudo-classes? (`:hover`)
59. Pseudo-elements? (`::before`)
60. Combinators kya hain?

### Box Model (VERY IMPORTANT)
61. Box model kya hai?
62. margin vs padding?
63. border kya hai?
64. box-sizing kya hai?
65. content-box vs border-box?

### Layout
66. display property kya hai?
67. block vs inline vs inline-block?
68. display: none vs visibility: hidden?
69. position property?
70. static vs relative vs absolute vs fixed vs sticky?

### Flexbox (HIGH PRIORITY)
71. Flexbox kya hai?
72. flex container vs item?
73. justify-content?
74. align-items?
75. flex-wrap?
76. flex-grow/shrink/basis?
77. center align kaise karte ho?

### Grid (IMPORTANT)
78. CSS Grid kya hai?
79. grid-template-columns?
80. gap kya hai?
81. flexbox vs grid difference?

### Responsive Design
82. Media queries kya hain?
83. Mobile-first approach?
84. breakpoints kya hote hain?
85. viewport kya hai?
86. rem vs em vs px?

### Styling
87. Colors define kaise karte ho?
88. Background properties?
89. Font properties?
90. Line-height kya hai?
91. text-align vs vertical-align?

### Advanced CSS
92. Z-index kya hai?
93. Stacking context kya hai?
94. Overflow kya hai?
95. Opacity vs visibility?
96. Transform kya hai?
97. Transition kya hai?
98. Animation kya hai?
99. CSS variables kya hain?
100. Preprocessors (SASS/LESS) kya hain?

---

## 🌐 Browser Working & Rendering (1-40)

1. Browser kaise kaam karta hai?
2. Sabse pehle browser kya load karta hai?
3. HTML parsing kaise hoti hai?
4. DOM kya hai?
5. CSSOM kya hai?
6. Render tree kya hota hai?
7. DOM + CSSOM kaise combine hote hain?
8. Critical rendering path kya hai?
9. Layout (reflow) kya hota hai?
10. Paint kya hota hai?
11. Composite kya hota hai?
12. Reflow vs repaint difference?
13. Reflow expensive kyun hota hai?
14. Browser rendering ko kaise optimize karte ho?
15. CSS render blocking kyun hoti hai?
16. JavaScript parsing ko kyun block karta hai?
17. async vs defer scripts?
18. Script loading ka order kya hota hai?
19. Preload vs prefetch?
20. Lazy loading kya hai?
21. Browser caching kaise kaam karti hai?
22. Cache types kya hote hain?
23. Service worker kya karta hai?
24. HTTP request lifecycle kya hota hai?
25. DNS resolution kya hota hai?
26. TCP handshake kya hota hai?
27. HTTPS connection kaise establish hoti hai?
28. First Contentful Paint kya hai?
29. Largest Contentful Paint kya hai?
30. Time to Interactive kya hai?
31. Bundle size ka impact kya hai?
32. Tree shaking kya hai?
33. Code splitting kya hai?
34. Webpack kya karta hai?
35. DevTools ka use kaise karte ho?
36. Performance profiling kaise karte ho?
37. Memory profiling kaise karte ho?
38. Network tab kaise use karte ho?
39. Browser storage kaise kaam karta hai?
40. IndexedDB kya hai?

---

## 🔐 Frontend Security (41-90)

41. Frontend security kya hoti hai?
42. XSS kya hota hai?
43. XSS ke types kya hain?
44. Stored XSS kya hota hai?
45. Reflected XSS kya hota hai?
46. DOM-based XSS kya hota hai?
47. XSS ka real-world example kya hai?
48. XSS prevent kaise karte ho?
49. Input sanitization kya hota hai?
50. Output escaping kya hota hai?
51. Content Security Policy kya hai?
52. CSP kaise implement karte ho?
53. CSRF kya hota hai?
54. CSRF attack kaise hota hai?
55. CSRF prevent kaise karte ho?
56. CSRF token kya hota hai?
57. SameSite cookie kya hoti hai?
58. Clickjacking kya hota hai?
59. Clickjacking prevent kaise karte ho?
60. X-Frame-Options kya hai?
61. Cookies kya hoti hain?
62. HttpOnly cookie kya hoti hai?
63. Secure cookie kya hoti hai?
64. LocalStorage vs cookies security?
65. JWT kya hota hai?
66. JWT ko securely kaise store karte ho?
67. Token expiration kya hota hai?
68. Refresh token kya hota hai?
69. Session fixation attack kya hai?
70. Authentication vs authorization difference?
71. HTTPS kyun important hai?
72. SSL/TLS kya hota hai?
73. Man-in-the-middle attack kya hota hai?
74. CORS kya hota hai?
75. Same-origin policy kya hoti hai?
76. CORS error kaise fix karte ho?
77. Secure headers kaunse hote hain?
78. HSTS kya hota hai?
79. Subresource Integrity kya hota hai?
80. API keys ko secure kaise karte ho?
81. Sensitive data frontend mein kyun store nahi karna chahiye?
82. DevTools se data leak kaise hota hai?
83. Third-party scripts risk kya hota hai?
84. iframe security kaise handle karte ho?
85. Phishing attack kya hota hai?
86. Dependency vulnerabilities kya hoti hain?
87. npm audit kya karta hai?
88. OWASP kya hai?
89. OWASP Top 10 kya hai?
90. Frontend app ko secure kaise banate ho?

---

## ⚡ Performance Optimization (91-120)

91. Frontend performance kya hoti hai?
92. Page load time kaise improve karte ho?
93. Critical CSS kya hota hai?
94. Render blocking resources kya hote hain?
95. Lazy loading images kaise karte ho?
96. Image optimization kaise karte ho?
97. WebP kya hota hai?
98. CDN ka use kaise karte ho?
99. Bundle size kaise reduce karte ho?
100. Tree shaking kaise kaam karta hai?
101. Code splitting kaise implement karte ho?
102. Caching strategies kya hoti hain?
103. Browser cache vs server cache?
104. Service worker caching kya hai?
105. Reflow reduce kaise karte ho?
106. DOM manipulation optimize kaise karte ho?
107. Debounce ka use performance mein kaise hota hai?
108. Throttle ka use kaise hota hai?
109. Virtualization kya hota hai?
110. Infinite scroll kaise implement karte ho?
111. Lighthouse score kaise improve karte ho?
112. FCP improve kaise karte ho?
113. LCP improve kaise karte ho?
114. TTI improve kaise karte ho?
115. Memory leaks kaise avoid karte ho?
116. CPU usage kaise optimize karte ho?
117. Web workers ka use kab karte ho?
118. Preload resources ka use kaise karte ho?
119. Prefetch ka use kab karte ho?
120. Performance monitoring tools kaunse hain?

---

## 🧠 JavaScript (1-120)

1. JavaScript kya hai?
2. JS dynamically typed kaise hai?
3. var vs let vs const?
4. Hoisting kya hai?
5. Temporal Dead Zone kya hai?
6. Scope kya hota hai?
7. Scope types?
8. Lexical scope kya hai?
9. Closure kya hai?
10. Closure ka real use case?
11. Execution context kya hai?
12. Call stack kya hai?
13. Event loop kya hai?
14. Callback queue kya hai?
15. Microtask queue kya hai?
16. Macrotask kya hai?
17. Promises kya hain?
18. Promise states?
19. Async/await kya hai?
20. Promise chaining?
21. Callback hell kya hai?
22. Error handling async mein kaise?
23. this keyword kya hai?
24. Arrow vs normal function?
25. Bind kya karta hai?
26. Call vs apply?
27. Prototype kya hai?
28. Prototypal inheritance?
29. Object.create kya karta hai?
30. Deep vs shallow copy?
31. JSON kya hai?
32. Map vs Object?
33. Set vs Array?
34. WeakMap kya hai?
35. Symbol kya hai?
36. Destructuring kya hai?
37. Spread operator?
38. Rest operator?
39. Template literals?
40. Default parameters?
41. Debounce kya hai?
42. Throttle kya hai?
43. Memoization?
44. Pure functions?
45. Side effects kya hai?
46. Functional programming kya hai?
47. Event delegation?
48. Garbage collection?
49. Memory leak kya hai?
50. Closures se leak kaise hota hai?
51. Proxy kya hai?
52. Reflect API kya hai?
53. Generators kya hain?
54. Iterators kya hain?
55. for...in vs for...of?
56. Module system kya hai?
57. ES modules vs CommonJS?
58. Strict mode kya hai?
59. Type coercion kya hai?
60. == vs ===?
61. NaN kya hai?
62. undefined vs null?
63. typeof operator?
64. instanceof?
65. Array methods (map/filter/reduce)?
66. Reduce ka use?
67. Flatten array kaise?
68. Deep clone kaise?
69. Object comparison?
70. Immutable data kya hai?
71. Currying kya hai?
72. Partial application?
73. Compose function?
74. Pipe kya hai?
75. Promise.all?
76. Promise.race?
77. Promise.any?
78. Promise.allSettled?
79. Retry mechanism kaise likho?
80. Rate limiter function?
81. Event bubbling kya hai?
82. Event capturing?
83. stopPropagation?
84. preventDefault?
85. DOM manipulation basics?
86. Virtual DOM kya hai?
87. Browser rendering flow?
88. Reflow vs repaint?
89. Web APIs kya hain?
90. Fetch vs Axios?
91. LocalStorage vs SessionStorage?
92. Cookies kya hain?
93. CORS kya hai?
94. Same-origin policy?
95. Web workers?
96. Service workers?
97. IndexedDB kya hai?
98. Memory profiling?
99. Performance profiling?
100. JS engine kya hai?
101. V8 engine?
102. Garbage collector kaise kaam karta hai?
103. Async parallel vs sequential?
104. Concurrency vs parallelism?
105. Race condition kya hai?
106. Deadlock kya hai?
107. Event loop internals?
108. Node vs browser JS?
109. Polyfills kya hain?
110. Transpilation kya hai?
111. Babel kya hai?
112. Tree shaking kya hai?
113. Bundling kya hai?
114. Webpack kya karta hai?
115. Code splitting?
116. Lazy loading?
117. Hot reload?
118. Source maps kya hain?
119. Security issues JS mein?
120. Best practices JS coding?

---

## ⚛️ React (121-220)

121. React kya hai?

        `Hinglish Explanation:`

        React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai. Yeh component-based architecture follow karti hai aur Virtual DOM use karke fast rendering provide karti hai.

        `Interview Answer:`

        React is a JavaScript library developed by Meta for building reusable and interactive user interfaces. It uses a component-based architecture and Virtual DOM for efficient rendering.

        Example:

        ```javascript
           function App() {
            return <h1>Hello React</h1>;
            }
        ```

122. JSX kya hai?

        `Hinglish Explanation:`

        JSX JavaScript XML hai. Isse hum JavaScript ke andar HTML jaisa code likh sakte hain. Browser JSX ko directly nahi samajhta, Babel ise JavaScript me convert karta hai.

        `Interview Answer:`

        JSX is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It gets transpiled into React.createElement calls.

        Example:

        ```javascript
           const element = <h1>Hello</h1>;
        ```

123. Virtual DOM?

        `Hinglish Explanation:`

        Virtual DOM React ka lightweight copy of Real DOM hota hai. Jab state ya props change hote hain, React pehle Virtual DOM update karta hai aur phir difference find karke sirf required changes Real DOM me karta hai.

        `Interview Answer:`

        Virtual DOM is a lightweight JavaScript representation of the Real DOM. React compares Virtual DOM changes and updates only the necessary parts of the Real DOM.

        Example:

        ```javascript
           setCount(count + 1);
        ```


124. Real DOM vs Virtual DOM?

        `Hinglish Explanation:`

        | Real DOM                          | Virtual DOM                         |
        | --------------------------------- | ----------------------------------- |
        | Browser ka actual DOM             | Memory me virtual copy              |
        | Slow updates                      | Fast updates                        |
        | Entire DOM re-render ho sakta hai | Only changed parts update hote hain |

        `Interview Answer:`

        Real DOM is the actual browser DOM, while Virtual DOM is a lightweight copy maintained by React. Virtual DOM improves performance by minimizing direct DOM manipulations.

        Example:

        ```javascript
           setName("Raj");
        ```

125. Components kya hote hain?

        `Hinglish Explanation:`

        Components React ke reusable building blocks hote hain. Har component UI ka ek independent part represent karta hai.

        `Interview Answer:`

        Components are reusable and independent pieces of UI that help build complex interfaces in a modular way.

        Example:

        ```javascript
           function Header() {
                return <h1>Header</h1>;
            }
        ```

126. Functional vs class components?

        `Hinglish Explanation:`

        Functional Component

            * Simple function hota hai
            * Hooks use kar sakta hai
            * Modern React me preferred

        Class Component

            * ES6 class hoti hai
            * Lifecycle methods use karti hai
            * Hooks support nahi karti

        `Interview Answer:`

        Functional components are JavaScript functions that return JSX and support Hooks. Class components are ES6 classes that use lifecycle methods and state management.

        Example:

        ```javascript
            // Functional
            function App() {
            return <h1>Hello</h1>;
            }
            // Class
            class App extends React.Component {
            render() {
                return <h1>Hello</h1>;
            }
            }
        ```

127. Props kya hain?

        `Hinglish Explanation:`

        Props parent component se child component ko data pass karne ke liye use hote hain. Props read-only hote hain.

        `Interview Answer:`

        Props are read-only inputs passed from a parent component to a child component for data communication.

        Example:

        ```javascript
            function User(props) {
            return <h1>{props.name}</h1>;
            }

            <User name="Raj" />
        ```

128. State kya hai?

        `Hinglish Explanation:`

        State component ka internal data hota hai jo time ke saath change ho sakta hai. State update hone par component re-render hota hai.

        `Interview Answer:`

        State is a component's internal data that can change over time and triggers re-rendering when updated.

        Example:

        ```javascript
            const [count, setCount] = useState(0);
        ```

129. Controlled components?

        `Hinglish Explanation:`

        Jab form input ki value React state se control hoti hai tab use Controlled Component kehte hain.

        `Interview Answer:`

        A controlled component is a form element whose value is controlled by React state.

        Example:

        ```javascript
            const [name, setName] = useState("");
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        ```

130. Uncontrolled components?

        `Hinglish Explanation:`

        Jab form data React state ke bajaye DOM khud manage karta hai tab use Uncontrolled Component kehte hain.

        `Interview Answer:`

        An uncontrolled component stores its own state in the DOM and is usually accessed using refs.

        Example:

        ```javascript
           const inputRef = useRef();

            <input ref={inputRef} />
        ```

131. Keys ka use?

        `Hinglish Explanation:`

        Keys React ko identify karne me help karti hain ki list me kaunsa item add, remove ya update hua hai.

        `Interview Answer:`

        Keys help React identify list items uniquely and optimize rendering during updates.

        Example:

        ```javascript
           items.map(item =>
                <li key={item.id}>{item.name}</li>
            )
        ```


132. Lists render kaise?

        `Hinglish Explanation:`

        React me array ko map() function ki help se render kiya jata hai.

        `Interview Answer:`

        Lists are rendered by iterating over arrays using the map() method and returning JSX elements.

        Example:

        ```javascript
           users.map(user =>
                <p key={user.id}>{user.name}</p>
            )
        ```

133. Conditional rendering?

        `Hinglish Explanation:`

        Condition ke basis par different UI show karna conditional rendering kehlata hai.

        `Interview Answer`:

        Conditional rendering allows components to render different UI based on conditions.

        Example:

        ```javascript
           {isLoggedIn ? <Home /> : <Login />}
        ```


134. Forms handle kaise?

        `Hinglish Explanation:`

        Forms ko generally state aur onChange event ke through handle kiya jata hai.

        `Interview Answer:`

        Forms are commonly handled using controlled components with state and event handlers.

        Example:

        ```javascript
           const [email, setEmail] = useState("");
        ```

135. Events React mein?

        `Hinglish Explanation:`

        React browser events ko handle karne ke liye event handlers provide karta hai jaise onClick, onChange, onSubmit.

        `Interview Answer:`

        React handles user interactions through event handlers such as onClick, onChange, and onSubmit.

        Example:

        ```javascript
           <button onClick={handleClick}>
                Click
            </button>
        ```

136. Synthetic events kya hain?

        `Hinglish Explanation:`

        Synthetic Event React ka wrapper hota hai jo browser events ko cross-browser compatible banata hai.

        `Interview Answer`

        Synthetic Events are React's cross-browser wrappers around native browser events.

        Example:

        ```javascript
           function handleClick(event) {
                console.log(event.target);
            }
        ```

137. Lifecycle methods?

        `Hinglish Explanation:`

        Lifecycle methods component ke different stages (mount, update, unmount) par execute hote hain.

        `Interview Answer:`

        Lifecycle methods allow developers to execute code during different phases of a component's lifecycle.

        Example:

        ```javascript
           componentDidMount() {
                console.log("Mounted");
            }
        ```

138. Mounting kya hai?

        `Hinglish Explanation:`

        Jab component first time DOM me add hota hai use Mounting kehte hain.

        `Interview Answer:`

        Mounting is the process when a component is created and inserted into the DOM.

        Example:

        ```javascript
           useEffect(() => {
            console.log("Mounted");
            }, []);
        ```

139. Updating kya hai?

        `Hinglish Explanation:`

        State ya props change hone par component re-render hota hai, ise Updating kehte hain.

        `Interview Answer:`

        Updating occurs when a component re-renders due to changes in state or props.

        Example:

        ```javascript
           setCount(count + 1);
        ```

140. Unmounting kya hai?

        `Hinglish Explanation:`

        Jab component DOM se remove hota hai use Unmounting kehte hain.

        `Interview Answer:`

        Unmounting is the process of removing a component from the DOM.

        Example:

        ```javascript
           useEffect(() => {
            return () => console.log("Unmount");
            }, []);
        ```

141. Hooks kya hain?

        `Hinglish Explanation:`

        Hooks functional components me state aur lifecycle features use karne ki facility dete hain.

        `Interview Answer:`

        Hooks are functions that allow functional components to use state and lifecycle features.

        Example:

        ```javascript
           const [count, setCount] = useState(0);
        ```


142. useState?

        `Hinglish Explanation:`

        useState component me state create aur update karne ke liye use hota hai.

        `Interview Answer:`

        useState is a Hook used to add and manage state in functional components.

        Example:

        ```javascript
           const [count, setCount] = useState(0);
        ```

143. useEffect?

        `Hinglish Explanation:`

        Side effects jaise API calls, subscriptions aur timers handle karne ke liye useEffect use hota hai.

        `Interview Answer:`

        useEffect is used to perform side effects such as API calls, subscriptions, and DOM updates.

        Example:

        ```javascript
           useEffect(() => {
            fetchData();
            }, []);
        ```

144. useRef?

        `Hinglish Explanation:`

        DOM element ya mutable value ko store karne ke liye useRef use hota hai bina re-render ke.

        `Interview Answer:`

        useRef provides a mutable reference that persists across renders without causing re-renders.

        Example:

        ```javascript
           const inputRef = useRef();
        ```

145. useMemo?

        `Hinglish Explanation:`

        Expensive calculation ko memoize karke unnecessary recalculation se bachata hai.

        `Interview Answer:`

        useMemo memoizes computed values and recalculates them only when dependencies change.

        Example:

        ```javascript
           const total = useMemo(() => {
            return calculate();
            }, [data]);
        ```


146. useCallback?

        `Hinglish Explanation:`

        useCallback function ko memoize karta hai. Jab component re-render hota hai to function dobara create nahi hota jab tak dependencies change na ho. Ye unnecessary child re-renders avoid karne me help karta hai.

        `Interview Answer:`

        useCallback is a React Hook that memoizes a function and returns the same function instance between renders unless its dependencies change. It is mainly used for performance optimization.

        Example:

        ```javascript
           const handleClick = useCallback(() => {
            console.log("Clicked");
            }, []);
        ```

147. useReducer?

        `Hinglish Explanation:`

        Jab state complex ho ya multiple related state updates hon, tab useReducer use karte hain. Ye Redux ke reducer concept jaisa kaam karta hai.

        `Interview Answer:`

        useReducer is a Hook used for managing complex state logic. It works with a reducer function and dispatch actions to update state predictably.

        Example:

        ```javascript
           const [state, dispatch] = useReducer(reducer, 0);
           dispatch({ type: "increment" });
        ```


148. Custom hooks?

        `Hinglish Explanation:`

        Custom Hook ek reusable function hota hai jo multiple components me common Hook logic share karne ke liye banaya jata hai. Iska naam hamesha use se start hona chahiye.

        `Interview Answer:`

        Custom Hooks are reusable JavaScript functions that encapsulate React Hook logic and allow sharing stateful behavior across components.

        Example:

        ```javascript
           function useCounter() {
            const [count, setCount] = useState(0);
            return { count, setCount };
            }
        ```

149. Rules of hooks?

        `Hinglish Explanation:`

        Hooks ko sirf React functional components ya custom hooks ke andar call karna chahiye. Hooks ko loops, conditions ya nested functions ke andar nahi likhna chahiye.

        `Interview Answer:`

        Hooks must be called only at the top level of React functional components or custom Hooks. They should never be called conditionally or inside loops.

        Example:

        ```javascript
           // ❌ Wrong
            if (show) {
            useState(0);
            }
        ```

150. Dependency array issues?

        `Hinglish Explanation:`

        Dependency array galat dene se stale data, unnecessary API calls ya missing updates ho sakte hain. Har used dependency ko include karna best practice hai.

        `Interview Answer:`

        Incorrect dependency arrays can cause stale closures, missed updates, or excessive re-executions. React recommends including all referenced dependencies.

        Example:

        ```javascript
           useEffect(() => {
            fetchData(id);
            }, [id]);
        ```

151. Infinite loop useEffect mein?

`Hinglish Explanation:`

Agar useEffect ke andar state update ho aur dependency array me wahi state ho, to effect baar-baar run hota rahega aur infinite loop create ho jayega.

`Interview Answer:`

An infinite loop occurs when an effect updates a state value that is also present in its dependency array, causing the effect to run repeatedly.

Example:

```javascript
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

---

152. Cleanup function?

`Hinglish Explanation:`

Cleanup function component unmount hone ya effect dobara run hone se pehle execute hota hai. Ye memory leaks aur unwanted subscriptions ko remove karne ke liye use hota hai.

`Interview Answer:`

A cleanup function is returned from useEffect and is used to clean up resources such as timers, event listeners, or subscriptions.

Example:

```javascript
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
```

---

153. React.memo?

`Hinglish Explanation:`

React.memo component ko memoize karta hai. Agar props change nahi hote to component dobara render nahi hota.

`Interview Answer:`

React.memo is a higher-order component that prevents unnecessary re-renders by memoizing the component output based on props.

Example:

```javascript
export default React.memo(User);
```

---

154. Re-render kaise hota hai?

`Hinglish Explanation:`

Component re-render tab hota hai jab state change ho, props change ho ya parent component re-render ho.

`Interview Answer:`

A React component re-renders when its state changes, props change, or its parent triggers a render cycle.

Example:

```javascript
setCount(count + 1);
```

---

155. Re-render kaise avoid kare?

`Hinglish Explanation:`

Unnecessary re-renders ko React.memo, useMemo, useCallback aur proper state management se reduce kiya ja sakta hai.

`Interview Answer:`

Unnecessary re-renders can be avoided using memoization techniques like React.memo, useMemo, and useCallback.

Example:

```javascript
const total = useMemo(() => calculate(), [data]);
```

---

156. Context API?

`Hinglish Explanation:`

Context API global data share karne ke liye use hoti hai bina props drilling ke. Ye theme, authentication aur language settings ke liye useful hai.

`Interview Answer:`

Context API provides a way to share data across components without manually passing props through every level.

Example:

```javascript
const ThemeContext = createContext();
```

---

157. Redux kya hai?

`Hinglish Explanation:`

Redux ek centralized state management library hai jo application state ko single store me maintain karti hai.

`Interview Answer:`

Redux is a predictable state management library that stores application state in a centralized store and updates it through actions and reducers.

Example:

```javascript
dispatch({ type: "ADD_TODO" });
```

---

158. Redux vs Context?

`Hinglish Explanation:`

Context simple global state ke liye suitable hai, jabki Redux complex state management aur middleware support provide karta hai.

`Interview Answer:`

Context API is best for lightweight global state, whereas Redux is suitable for complex state management with middleware and debugging tools.

Example:

```javascript
// Context → Theme
// Redux → Shopping Cart
```

---

159. Middleware Redux mein?

`Hinglish Explanation:`

Middleware action aur reducer ke beech execute hota hai aur async operations ya logging handle karta hai.

`Interview Answer:`

Middleware intercepts actions before they reach reducers and is commonly used for logging, API calls, and asynchronous logic.

Example:

```javascript
const logger = store => next => action => {
  console.log(action);
  next(action);
};
```

---

160. Thunk vs Saga?

`Hinglish Explanation:`

Thunk simple async operations ke liye use hota hai, jabki Saga complex side effects aur workflows ko manage karta hai.

`Interview Answer:`

Redux Thunk uses functions for asynchronous logic, while Redux Saga uses generator functions to handle complex side effects.

Example:

```javascript
// Thunk
dispatch(fetchUsers());

// Saga
yield call(fetchUsers);
```

---

161. Zustand kya hai?

`Hinglish Explanation:`

Zustand ek lightweight state management library hai jisme Redux ke comparison me bahut kam boilerplate hota hai.

`Interview Answer:`

Zustand is a minimal state management library that provides global state management with a simple API and less boilerplate.

Example:

```javascript
const useStore = create(set => ({
  count: 0
}));
```

---

162. Recoil kya hai?

`Hinglish Explanation:`

Recoil React ke liye state management library hai jo atoms aur selectors ka use karti hai.

`Interview Answer:`

Recoil is a React state management library that manages shared state using atoms and derived state using selectors.

Example:

```javascript
const countAtom = atom({
  key: "count",
  default: 0
});
```

---

163. Code splitting?

`Hinglish Explanation:`

Code splitting bundle ko chhote chunks me divide karta hai jisse initial loading fast ho jati hai.

`Interview Answer:`

Code splitting breaks an application bundle into smaller chunks that can be loaded on demand, improving performance.

Example:

```javascript
const Home = React.lazy(() =>
  import("./Home")
);
```

---

164. Lazy loading?

`Hinglish Explanation:`

Lazy loading resources ya components ko tab load karta hai jab unki zarurat padti hai.

`Interview Answer:`

Lazy loading delays loading of components until they are actually required, reducing initial load time.

Example:

```javascript
const About = React.lazy(() =>
  import("./About")
);
```

---

165. Suspense?

`Hinglish Explanation:`

Suspense lazy loaded component ke load hone tak fallback UI show karta hai.

`Interview Answer:`

Suspense displays a fallback UI while React waits for lazy-loaded components or asynchronous operations to complete.

Example:

```javascript
<Suspense fallback={<p>Loading...</p>}>
  <About />
</Suspense>
```

---

166. Error boundaries?

`Hinglish Explanation:`

Error Boundary component tree me JavaScript errors catch karta hai aur fallback UI display karta hai.

`Interview Answer:`

Error Boundaries catch runtime errors in React components and display a fallback UI instead of crashing the application.

Example:

```javascript
componentDidCatch(error) {
  console.log(error);
}
```

---

167. Portals kya hain?

`Hinglish Explanation:`

Portals component ko parent DOM hierarchy ke bahar render karne ki facility dete hain. Ye mostly modals, tooltips aur popups ke liye use hote hain.

`Interview Answer:`

Portals allow rendering components outside the parent DOM hierarchy while maintaining the React component tree.

Example:

```javascript
ReactDOM.createPortal(
  <Modal />,
  document.body
);
```

---

168. Fragments kya hain?

`Hinglish Explanation:`

Fragments extra DOM node create kiye bina multiple elements return karne dete hain. Isse DOM clean rehta hai.

`Interview Answer:`

Fragments allow grouping multiple elements without adding extra nodes to the DOM.

Example:

```javascript
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

169. StrictMode kya hai?

`Hinglish Explanation:`

StrictMode development mode me potential problems aur unsafe practices identify karta hai. Production build me iska koi impact nahi hota.

`Interview Answer:`

StrictMode is a development tool that highlights potential issues and deprecated practices in React applications.

Example:

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

170. DevTools ka use?

`Hinglish Explanation:`

React DevTools se components, props, state, hooks aur performance inspect kiye ja sakte hain. Debugging ke liye ye bahut useful tool hai.

`Interview Answer:`

React DevTools is a browser extension used for inspecting component trees, state, props, hooks, and performance.

Example:

```javascript
Inspect Component
→ View State
→ View Props
→ Profile Performance
```


171. SSR kya hai?

`Hinglish Explanation:`

SSR (Server-Side Rendering) me HTML server par generate hota hai aur browser ko ready-made page milta hai. Isse SEO aur initial page load improve hota hai.

`Interview Answer:`

Server-Side Rendering (SSR) generates HTML on the server and sends it to the client. It improves SEO and initial page load performance.

Example:

```javascript
export async function getServerSideProps() {
  return { props: {} };
}
```

---

172. CSR kya hai?

`Hinglish Explanation:`

CSR (Client-Side Rendering) me browser JavaScript download karta hai aur UI render karta hai. React applications by default CSR use karti hain.

`Interview Answer:`

Client-Side Rendering (CSR) renders content in the browser using JavaScript after the initial page load.

Example:

```javascript
ReactDOM.createRoot(root).render(<App />);
```

---

173. Hydration kya hai?

`Hinglish Explanation:`

Hydration process me React server-rendered HTML ko interactive banata hai aur event handlers attach karta hai.

`Interview Answer:`

Hydration is the process where React attaches event listeners and makes server-rendered HTML interactive.

Example:

```javascript
hydrateRoot(document.getElementById("root"), <App />);
```

---

174. Next.js kya hai?

`Hinglish Explanation:`

Next.js React framework hai jo SSR, SSG, API routes, routing aur performance optimizations provide karta hai.

`Interview Answer:`

Next.js is a React framework that provides SSR, SSG, routing, API routes, and built-in performance optimizations.

Example:

```javascript
export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

175. Routing kaise hoti hai?

`Hinglish Explanation:`

React me routing React Router ya Next.js file-based routing ke through hoti hai.

`Interview Answer:`

Routing allows navigation between pages or views without reloading the browser.

Example:

```javascript
<Route path="/about" element={<About />} />
```

---

176. Dynamic routing?

`Hinglish Explanation:`

Dynamic routing me URL parameters use karke dynamic pages create kiye jate hain.

`Interview Answer:`

Dynamic routing allows routes to be generated using dynamic parameters from the URL.

Example:

```javascript
<Route path="/user/:id" element={<User />} />
```

---

177. SEO React mein?

`Hinglish Explanation:`

SEO improve karne ke liye SSR, meta tags, structured data aur proper headings use karte hain.

`Interview Answer:`

SEO in React can be improved using SSR, meta tags, structured data, and semantic HTML.

Example:

```javascript
<Helmet>
  <title>Home Page</title>
</Helmet>
```

---

178. Accessibility?

`Hinglish Explanation:`

Accessibility ka purpose application ko sab users ke liye usable banana hai, including users with disabilities.

`Interview Answer:`

Accessibility ensures that web applications can be used by people with disabilities through semantic HTML and ARIA attributes.

Example:

```javascript
<button aria-label="Close">
  X
</button>
```

---

179. Testing React?

`Hinglish Explanation:`

React testing ka use components, user interactions aur business logic verify karne ke liye hota hai.

`Interview Answer:`

React testing ensures components behave correctly by validating rendering, interactions, and application logic.

Example:

```javascript
render(<App />);
```

---

180. Jest kya hai?

`Hinglish Explanation:`

Jest ek JavaScript testing framework hai jo unit testing aur mocking provide karta hai.

`Interview Answer:`

Jest is a JavaScript testing framework used for unit testing, mocking, and assertions.

Example:

```javascript
test("sum", () => {
  expect(1 + 1).toBe(2);
});
```

---

181. React Testing Library?

`Hinglish Explanation:`

React Testing Library user perspective se components test karne ke liye use hoti hai.

`Interview Answer:`

React Testing Library focuses on testing components the way users interact with them.

Example:

```javascript
render(<Button />);
screen.getByText("Submit");
```

---

182. Snapshot testing?

`Hinglish Explanation:`

Snapshot testing component ke rendered output ka snapshot save karta hai aur future changes compare karta hai.

`Interview Answer:`

Snapshot testing compares the current rendered output against a previously stored snapshot.

Example:

```javascript
expect(tree).toMatchSnapshot();
```

---

183. Mocking?

`Hinglish Explanation:`

Mocking external dependencies jaise APIs ya functions ko replace karta hai taaki tests isolated rahein.

`Interview Answer:`

Mocking replaces real implementations with fake ones to isolate and test specific functionality.

Example:

```javascript
jest.mock("./api");
```

---

184. Performance optimization?

`Hinglish Explanation:`

Performance optimize karne ke liye memoization, lazy loading, code splitting aur virtualization use karte hain.

`Interview Answer:`

Performance optimization involves reducing unnecessary renders, minimizing bundle size, and improving loading speed.

Example:

```javascript
const value = useMemo(() => calc(), []);
```

---

185. Bundle size reduce kaise?

`Hinglish Explanation:`

Bundle size code splitting, tree shaking aur lazy loading se reduce ki ja sakti hai.

`Interview Answer:`

Bundle size can be reduced using code splitting, tree shaking, lazy loading, and removing unused dependencies.

Example:

```javascript
const Page = React.lazy(() =>
  import("./Page")
);
```

---

186. Memoization React mein?

`Hinglish Explanation:`

Memoization expensive calculations ya functions ko cache karke unnecessary recalculations avoid karta hai.

`Interview Answer:`

Memoization stores computed results and reuses them until dependencies change.

Example:

```javascript
const result = useMemo(() => {
  return compute();
}, [data]);
```

---

187. Virtualization kya hai?

`Hinglish Explanation:`

Virtualization large lists me sirf visible items render karti hai jisse performance improve hoti hai.

`Interview Answer:`

Virtualization improves performance by rendering only visible items instead of the entire list.

Example:

```javascript
<FixedSizeList
  height={500}
  itemCount={10000}
/>
```

---

188. Large list rendering?

`Hinglish Explanation:`

Large lists render karte waqt pagination, infinite scroll ya virtualization use karni chahiye.

`Interview Answer:`

Large lists should be optimized using pagination, infinite scrolling, or virtualization techniques.

Example:

```javascript
users.map(user => (
  <User key={user.id} />
));
```

---

189. Lazy components?

`Hinglish Explanation:`

Lazy components tab load hote hain jab unki zarurat padti hai, initial bundle me nahi.

`Interview Answer:`

Lazy components are loaded only when required, reducing the initial application bundle size.

Example:

```javascript
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

---

190. Image optimization?

`Hinglish Explanation:`

Image optimization me resizing, compression aur lazy loading use ki jati hai taaki page fast load ho.

`Interview Answer:`

Image optimization improves performance by reducing image size and loading images only when needed.

Example:

```javascript
<img
  loading="lazy"
  src="image.jpg"
/>
```

---

191. Folder structure kaise?

`Hinglish Explanation:`

Folder structure scalable aur feature-based honi chahiye jisse maintenance easy rahe.

`Interview Answer:`

A good folder structure separates components, pages, hooks, services, and utilities for better scalability.

Example:

```text
src/
 ├─ components/
 ├─ pages/
 ├─ hooks/
 ├─ services/
```

---

192. Scalable architecture?

`Hinglish Explanation:`

Scalable architecture modular design, reusable components aur clear separation of concerns follow karti hai.

`Interview Answer:`

Scalable architecture focuses on modularity, maintainability, and separation of concerns.

Example:

```text
features/
shared/
services/
```

---

193. Design patterns React mein?

`Hinglish Explanation:`

React me commonly Container-Presentational, Custom Hooks, HOC aur Render Props patterns use hote hain.

`Interview Answer:`

Design patterns provide reusable solutions for organizing code and improving maintainability.

Example:

```javascript
function UserList() {
  return <Users />;
}
```

---

194. HOC kya hai?

`Hinglish Explanation:`

HOC (Higher Order Component) ek function hai jo component ko input leta hai aur enhanced component return karta hai.

`Interview Answer:`

A Higher-Order Component is a function that takes a component and returns a new component with additional functionality.

Example:

```javascript
const Enhanced = withAuth(Dashboard);
```

---

195. Render props?

`Hinglish Explanation:`

Render Props pattern me component ek function prop receive karta hai aur us function ke through UI render karta hai.

`Interview Answer:`

Render Props is a pattern where a component shares logic by passing a function as a prop that returns UI.

Example:

```javascript
<DataProvider
  render={(data) => <User data={data} />}
/>
```

196. Hooks vs HOC?

`Hinglish Explanation:`

Hooks aur HOC dono reusable logic share karne ke liye use hote hain. Modern React me Hooks preferred hain kyunki code readable aur maintainable hota hai.

`Interview Answer:`

Hooks provide a cleaner and more intuitive way to reuse stateful logic compared to Higher-Order Components, which can lead to wrapper nesting.

Example:

```javascript
function useAuth() {
  return true;
}
```

---

197. Micro Frontends?

`Hinglish Explanation:`

Micro Frontends me large frontend application ko multiple independent applications me divide kiya jata hai jo alag teams maintain kar sakti hain.

`Interview Answer:`

Micro Frontends extend the microservices concept to frontend development by splitting a large application into independently deployable frontend modules.

Example:

```text
Shell App
├── Auth App
├── Dashboard App
└── Profile App
```

---

198. Monorepo kya hai?

`Hinglish Explanation:`

Monorepo ek single repository hoti hai jisme multiple applications aur shared packages maintain kiye jate hain.

`Interview Answer:`

A Monorepo is a single repository that contains multiple projects, applications, or packages managed together.

Example:

```text
apps/
packages/
shared/
```

---

199. Deployment React app?

`Hinglish Explanation:`

React application ko build karke Vercel, Netlify, AWS ya any hosting platform par deploy kiya jata hai.

`Interview Answer:`

React applications are typically deployed by generating a production build and hosting the static assets on a web server or cloud platform.

Example:

```bash
npm run build
```

---

200. Env variables React mein?

`Hinglish Explanation:`

Environment variables sensitive configurations aur environment-specific values store karne ke liye use hoti hain.

`Interview Answer:`

Environment variables allow configuration values such as API URLs and feature flags to be managed outside the source code.

Example:

```javascript
const api = process.env.REACT_APP_API_URL;
```

---

201. Build process?

`Hinglish Explanation:`

Build process source code ko optimized production-ready bundle me convert karta hai.

`Interview Answer:`

The build process transpiles, bundles, minifies, and optimizes application code for production deployment.

Example:

```bash
npm run build
```

---

202. CI/CD React?

`Hinglish Explanation:`

CI/CD automatically code build, test aur deploy karta hai jisse releases fast aur reliable bante hain.

`Interview Answer:`

CI/CD automates the process of integrating, testing, and deploying code changes to improve delivery speed and reliability.

Example:

```yaml
build:
test:
deploy:
```

---

203. Security React?

`Hinglish Explanation:`

React applications me XSS prevention, authentication, authorization aur secure API communication important hote hain.

`Interview Answer:`

React security involves preventing XSS attacks, securing authentication flows, validating input, and protecting sensitive data.

Example:

```javascript
const name = userInput;
```

---

204. XSS prevent kaise?

`Hinglish Explanation:`

React by default content escape karta hai. `dangerouslySetInnerHTML` ka use carefully karna chahiye aur input sanitize karna chahiye.

`Interview Answer:`

XSS can be prevented by sanitizing user input and avoiding unsafe HTML rendering with dangerouslySetInnerHTML.

Example:

```javascript
<div>{userInput}</div>
```

---

205. Form validation?

`Hinglish Explanation:`

Form validation user input ko verify karti hai taaki invalid ya incomplete data submit na ho.

`Interview Answer:`

Form validation ensures that user input meets business and data integrity requirements before submission.

Example:

```javascript
if (!email) {
  setError("Required");
}
```

---

206. State normalization?

`Hinglish Explanation:`

State normalization me nested data ko flat structure me store kiya jata hai taaki updates aur lookups efficient ho sakein.

`Interview Answer:`

State normalization organizes data into flat structures to reduce duplication and simplify updates.

Example:

```javascript
{
  users: {
    1: { id: 1, name: "Raj" }
  }
}
```

---

207. API calls best practices?

`Hinglish Explanation:`

API calls ko services me rakhna, loading/error states handle karna aur unnecessary requests avoid karna best practice hai.

`Interview Answer:`

API calls should be centralized, include proper error handling, and manage loading and caching efficiently.

Example:

```javascript
const data = await fetch("/api/users");
```

---

208. Error handling?

`Hinglish Explanation:`

Application me API errors, validation errors aur unexpected exceptions ko gracefully handle karna chahiye.

`Interview Answer:`

Error handling improves user experience by catching failures and displaying meaningful feedback.

Example:

```javascript
try {
  await fetchData();
} catch (error) {
  console.error(error);
}
```

---

209. Loading states?

`Hinglish Explanation:`

Loading state user ko batati hai ki data fetch ya operation process me hai.

`Interview Answer:`

Loading states provide visual feedback while asynchronous operations are in progress.

Example:

```javascript
if (loading) {
  return <Spinner />;
}
```

---

210. Skeleton UI?

`Hinglish Explanation:`

Skeleton UI actual content ke load hone tak placeholder layout show karti hai.

`Interview Answer:`

Skeleton screens improve perceived performance by displaying content placeholders during loading.

Example:

```javascript
<Skeleton height={50} />
```

---

211. Offline support?

`Hinglish Explanation:`

Offline support application ko internet unavailable hone par bhi kuch functionality provide karne deti hai.

`Interview Answer:`

Offline support enables users to access cached content and functionality without an internet connection.

Example:

```javascript
navigator.onLine;
```

---

212. PWA kya hai?

`Hinglish Explanation:`

PWA (Progressive Web App) web application ko app-like experience provide karti hai including offline support and installability.

`Interview Answer:`

A Progressive Web App combines web technologies with native app features such as offline access and home-screen installation.

Example:

```json
{
  "name": "My App"
}
```

---

213. Service worker React?

`Hinglish Explanation:`

Service Worker background me run hota hai aur caching, offline support aur push notifications provide karta hai.

`Interview Answer:`

A Service Worker is a background script that enables caching, offline capabilities, and background tasks.

Example:

```javascript
navigator.serviceWorker.register("/sw.js");
```

---

214. Caching strategies?

`Hinglish Explanation:`

Caching strategies application performance improve karti hain by reducing repeated network requests.

`Interview Answer:`

Caching strategies determine how and when resources are stored and retrieved to improve performance and reliability.

Example:

```text
Cache First
Network First
Stale While Revalidate
```

---

215. Feature flags?

`Hinglish Explanation:`

Feature flags new features ko deploy karne aur selectively enable/disable karne ke liye use hote hain.

`Interview Answer:`

Feature flags allow features to be enabled or disabled without redeploying the application.

Example:

```javascript
if (featureEnabled) {
  showNewUI();
}
```

---

216. A/B testing?

`Hinglish Explanation:`

A/B testing me users ko different versions dikhakar performance compare ki jati hai.

`Interview Answer:`

A/B testing compares multiple variations of a feature or UI to determine which performs better.

Example:

```javascript
variant === "A"
  ? <OldUI />
  : <NewUI />;
```

---

217. Internationalization?

`Hinglish Explanation:`

Internationalization (i18n) application ko multiple languages aur regions support karne layak banata hai.

`Interview Answer:`

Internationalization enables applications to support multiple languages and regional formats.

Example:

```javascript
t("welcome");
```

---

218. Dark mode implementation?

`Hinglish Explanation:`

Dark mode theme switching aur CSS classes ke through implement kiya jata hai.

`Interview Answer:`

Dark mode is typically implemented by toggling themes and applying different styles based on user preference.

Example:

```javascript
document.body.classList.toggle("dark");
```

---

219. Theming?

`Hinglish Explanation:`

Theming application ke colors, typography aur styling ko centrally manage karne ka approach hai.

`Interview Answer:`

Theming provides a centralized way to manage and switch application styles consistently.

Example:

```javascript
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

---

220. Best practices React?

`Hinglish Explanation:`

Reusable components, proper state management, lazy loading, error handling aur clean folder structure React ki important best practices hain.

`Interview Answer:`

React best practices include component reusability, clean architecture, proper state management, performance optimization, and effective testing.

Example:

```javascript
// Keep components small
// Reuse logic with hooks
// Avoid unnecessary re-renders
```


### Additional Important Questions

1. Explain the React reconciliation algorithm.

`Hinglish Explanation:`

Reconciliation React ka process hai jo old Virtual DOM aur new Virtual DOM ko compare karta hai. React differences find karke sirf changed parts ko Real DOM me update karta hai, jisse performance improve hoti hai.

`Interview Answer:`

The reconciliation algorithm is React's diffing process that compares the previous Virtual DOM with the updated Virtual DOM. It identifies changes and updates only the necessary parts of the Real DOM for efficient rendering.

Example:

```javascript
setCount(count + 1);
```

---

2. What are controlled vs. uncontrolled components?

`Hinglish Explanation:`

Controlled components me form data React state ke through manage hota hai, jabki uncontrolled components me data DOM khud maintain karta hai. Controlled approach validation aur state management ke liye preferred hai.

`Interview Answer:`

Controlled components manage form data through React state, while uncontrolled components store data in the DOM and are accessed using refs. Controlled components provide better control and predictability.

Example:

```javascript
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

3. How does React handle context and why use it?

`Hinglish Explanation:`

Context API parent se deeply nested child components tak data share karne deti hai bina props drilling ke. Ye theme, authentication aur language settings ke liye commonly use hoti hai.

`Interview Answer:`

React Context provides a way to share data across the component tree without manually passing props through every level. It is commonly used for global application state.

Example:

```javascript
const UserContext = createContext();
```

---

4. What are the common performance optimization techniques in React?

`Hinglish Explanation:`

Performance improve karne ke liye React.memo, useMemo, useCallback, lazy loading, code splitting aur virtualization use kiye jate hain. Unnecessary re-renders avoid karna bhi important hai.

`Interview Answer:`

Common optimization techniques include memoization, code splitting, lazy loading, virtualization, and preventing unnecessary re-renders using React.memo and Hooks.

Example:

```javascript
const value = useMemo(() => calculate(), [data]);
```

---

5. How does memoization work in React (React.memo, useMemo)?

`Hinglish Explanation:`

Memoization expensive calculations ya component renders ko cache karti hai. Jab dependencies change nahi hoti to React previous result reuse karta hai.

`Interview Answer:`

Memoization stores previously computed values or rendered output and reuses them until dependencies change, improving performance.

Example:

```javascript
const total = useMemo(() => {
  return calculateTotal();
}, [items]);
```

---

6. How does React handle batching of state updates?

`Hinglish Explanation:`

React multiple state updates ko ek hi render cycle me combine karta hai. Is process ko batching kehte hain aur ye unnecessary re-renders reduce karta hai.

`Interview Answer:`

React batches multiple state updates together and performs a single re-render, improving application performance and efficiency.

Example:

```javascript
setCount(c => c + 1);
setLoading(true);
```

---

7. What are custom hooks and when would you use them?

`Hinglish Explanation:`

Custom Hooks reusable logic ko multiple components me share karne ke liye use hote hain. Jab same stateful logic baar-baar repeat ho rahi ho tab custom hook banana chahiye.

`Interview Answer:`

Custom Hooks are reusable functions that encapsulate stateful logic and allow sharing behavior across multiple components.

Example:

```javascript
function useCounter() {
  const [count, setCount] = useState(0);
}
```

---

8. Explain lazy loading and code splitting in React.

`Hinglish Explanation:`

Code splitting application bundle ko multiple chunks me divide karta hai, aur lazy loading un chunks ko demand par load karti hai. Isse initial page load fast hota hai.

`Interview Answer:`

Code splitting divides the application into smaller bundles, while lazy loading loads those bundles only when needed, improving performance.

Example:

```javascript
const Dashboard = React.lazy(
  () => import("./Dashboard")
);
```

---

9. What’s the difference between useEffect and useLayoutEffect?

`Hinglish Explanation:`

useEffect browser paint ke baad run hota hai, jabki useLayoutEffect DOM update ke turant baad aur paint se pehle run hota hai. DOM measurements ke liye useLayoutEffect use kiya jata hai.

`Interview Answer:`

useEffect runs asynchronously after rendering, whereas useLayoutEffect runs synchronously after DOM updates but before the browser paints.

Example:

```javascript
useLayoutEffect(() => {
  console.log("Before paint");
}, []);
```

---

10. How does React’s concurrent mode work?

`Hinglish Explanation:`

Concurrent features React ko rendering ko interrupt aur prioritize karne ki capability deti hain. Isse UI responsive rehti hai even during heavy updates.

`Interview Answer:`

Concurrent rendering allows React to work on multiple rendering tasks, prioritize important updates, and keep the UI responsive.

Example:

```javascript
startTransition(() => {
  setSearch(query);
});
```

---

11. What is the virtual DOM and how does React use it?

`Hinglish Explanation:`

Virtual DOM Real DOM ki lightweight JavaScript representation hoti hai. React changes pehle Virtual DOM me karta hai aur phir differences Real DOM me apply karta hai.

`Interview Answer:`

The Virtual DOM is an in-memory representation of the Real DOM. React uses it to efficiently calculate and apply only the required DOM updates.

Example:

```javascript
setUser("Raj");
```

---

12. How do you implement SSR (Server-Side Rendering) with React?

`Hinglish Explanation:`

SSR me React components server par render hote hain aur browser ko ready HTML milta hai. Next.js React me SSR implement karne ka popular framework hai.

`Interview Answer:`

SSR renders React components on the server and sends HTML to the client, improving SEO and initial load performance.

Example:

```javascript
export async function getServerSideProps() {
  return { props: {} };
}
```

---

13. Difference between lifting state and prop drilling.

`Hinglish Explanation:`

Lifting state ka matlab shared state ko common parent me move karna hai. Prop drilling me data ko multiple intermediate components ke through pass karna padta hai.

`Interview Answer:`

Lifting state centralizes shared state in a common parent, whereas prop drilling refers to passing props through multiple levels of components.

Example:

```javascript
<Parent>
  <Child user={user} />
</Parent>
```

---

14. What is Suspense in React?

`Hinglish Explanation:`

Suspense asynchronous resources ya lazy-loaded components ke load hone tak fallback UI show karta hai. Ye loading experience improve karta hai.

`Interview Answer:`

Suspense allows React to display a fallback UI while waiting for lazy-loaded components or asynchronous resources to finish loading.

Example:

```javascript
<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```

---

15. How do you manage state in large applications (Redux, Context, Zustand)?

`Hinglish Explanation:`

Large applications me state complexity ke according Redux, Context API ya Zustand choose kiya jata hai. Redux complex apps ke liye, Context simple global state ke liye aur Zustand lightweight alternative hai.

`Interview Answer:`

Large-scale applications use state management solutions like Redux, Context API, or Zustand depending on complexity, scalability, and performance requirements.

Example:

```javascript
const store = configureStore({
  reducer
});
```

16. How does hydration work in React with SSR?

`Hinglish Explanation:`

SSR me server HTML generate karta hai aur browser ko send karta hai. Hydration process me React us HTML par event handlers attach karta hai aur page ko interactive banata hai bina poora re-render kiye.

`Interview Answer:`

Hydration is the process where React attaches event listeners and restores interactivity to server-rendered HTML on the client side.

Example:

```javascript
hydrateRoot(
  document.getElementById("root"),
  <App />
);
```

---

17. How do you secure a React frontend?

`Hinglish Explanation:`

Frontend security ke liye XSS prevention, input validation, secure authentication, HTTPS aur sensitive data ko client side par avoid karna important hai.

`Interview Answer:`

React frontend security involves preventing XSS attacks, validating user input, securing authentication flows, and avoiding exposure of sensitive data.

Example:

```javascript
<div>{userInput}</div>
```

---

18. Explain error boundaries in React.

`Hinglish Explanation:`

Error Boundaries component tree me runtime JavaScript errors catch karti hain aur fallback UI show karti hain. Ye application ko completely crash hone se bachati hain.

`Interview Answer:`

Error Boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the application.

Example:

```javascript
componentDidCatch(error) {
  console.error(error);
}
```

---

19. How does React Router handle dynamic routes?

`Hinglish Explanation:`

Dynamic routes URL parameters ke through different resources ya pages ko handle karte hain. Route parameters ko useParams Hook se access kiya ja sakta hai.

`Interview Answer:`

React Router supports dynamic routes using URL parameters, allowing pages to render based on route-specific values.

Example:

```javascript
<Route
  path="/users/:id"
  element={<User />}
/>
```

---

20. How do you handle access control (auth-guard) in React?

`Hinglish Explanation:`

Protected routes create karke authentication check ki jati hai. Agar user authenticated nahi hai to login page par redirect kar diya jata hai.

`Interview Answer:`

Access control is typically implemented using protected routes that verify authentication and authorization before rendering components.

Example:

```javascript
return isLoggedIn
  ? <Dashboard />
  : <Navigate to="/login" />;
```

---

21. How do you use useReducer and what is it best for?

`Hinglish Explanation:`

useReducer complex state logic aur multiple state transitions handle karne ke liye use hota hai. Ye Redux ke reducer pattern jaisa kaam karta hai.

`Interview Answer:`

useReducer is ideal for managing complex state logic where multiple actions affect the same state in a predictable way.

Example:

```javascript
const [state, dispatch] =
  useReducer(reducer, initialState);
```

---

22. How do you handle WebSocket or real-time data in React?

`Hinglish Explanation:`

WebSocket connection ko useEffect me create kiya jata hai aur cleanup function me close kiya jata hai. Real-time updates state me store kiye jate hain.

`Interview Answer:`

Real-time data can be handled using WebSockets by establishing connections, listening for events, and updating component state accordingly.

Example:

```javascript
useEffect(() => {
  const socket = new WebSocket(url);

  return () => socket.close();
}, []);
```

---

23. What is the role of key in React lists?

`Hinglish Explanation:`

Key React ko identify karne me help karti hai ki list me kaunsa item add, update ya remove hua hai. Stable aur unique key use karna important hai.

`Interview Answer:`

Keys help React efficiently identify list items and optimize updates during reconciliation.

Example:

```javascript
users.map(user => (
  <li key={user.id}>
    {user.name}
  </li>
));
```

---

24. Explain compound components pattern.

`Hinglish Explanation:`

Compound Components pattern me multiple related components milkar ek shared state aur behavior use karte hain. Ye flexible aur reusable APIs create karne me help karta hai.

`Interview Answer:`

The Compound Components pattern allows related components to share state and behavior while giving consumers flexible control over rendering.

Example:

```javascript
<Tabs>
  <Tabs.List />
  <Tabs.Panel />
</Tabs>
```

---

25. How does React DevTools work under the hood?

`Hinglish Explanation:`

React DevTools React Fiber tree se connect hota hai aur components, props, state aur hooks ki information read karta hai debugging ke liye.

`Interview Answer:`

React DevTools integrates with React's Fiber architecture to inspect component trees, state, props, and rendering behavior.

Example:

```text
Component Tree
→ Props
→ State
→ Hooks
```

---

26. What is StrictMode in React and why use it?

`Hinglish Explanation:`

StrictMode development mode me unsafe lifecycle methods aur side effects identify karne me help karta hai. Production build me iska effect nahi hota.

`Interview Answer:`

StrictMode is a development-only tool that helps identify potential issues, deprecated APIs, and unexpected side effects.

Example:

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

27. How would you implement theme switching in React?

`Hinglish Explanation:`

Theme switching generally Context API ya state management ke through implement ki jati hai. User preference ke basis par CSS classes ya theme objects change kiye jate hain.

`Interview Answer:`

Theme switching is commonly implemented using Context API and dynamic styles that update based on the selected theme.

Example:

```javascript
setTheme(
  theme === "light"
    ? "dark"
    : "light"
);
```

---

28. How do you test React components (Jest, RTL)?

`Hinglish Explanation:`

Jest testing framework provide karta hai aur React Testing Library user perspective se components test karne me help karti hai.

`Interview Answer:`

React components are commonly tested using Jest for assertions and React Testing Library for simulating user interactions.

Example:

```javascript
render(<Button />);

screen.getByText("Submit");
```

---

29. How do you implement HOC (Higher-Order Components)?

`Hinglish Explanation:`

HOC ek function hota hai jo component receive karta hai aur additional functionality ke saath enhanced component return karta hai.

`Interview Answer:`

A Higher-Order Component is a function that takes a component as input and returns a new component with extended behavior.

Example:

```javascript
const withAuth = (Component) =>
  (props) =>
    <Component {...props} />;
```

---

30. What is the role of forwardRef in React?

`Hinglish Explanation:`

forwardRef parent component ko child component ke DOM element ya ref tak direct access dene ke liye use hota hai.

`Interview Answer:`

forwardRef allows a parent component to pass a ref through a child component and access the underlying DOM element.

Example:

```javascript
const Input = React.forwardRef(
  (props, ref) => (
    <input ref={ref} />
  )
);
```

---

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

Event Loop Node.js ka core mechanism hai jo asynchronous operations ko handle karta hai. Ye callback queue se tasks uthakar execute karta hai jab call stack empty hota hai.

`Interview Answer:`

The Event Loop is responsible for handling asynchronous operations in Node.js. It continuously checks the call stack and executes queued callbacks when the stack is empty.

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
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

Streams data ko chunks me process karte hain instead of loading the entire data into memory. Ye large files aur real-time data processing ke liye useful hote hain.

`Interview Answer:`

Streams are objects that allow reading or writing data in chunks, improving memory efficiency and performance.

Example:

```javascript
const stream = fs.createReadStream("file.txt");
```

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

## 301. Event sourcing?

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

## 302. CQRS pattern?

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

## 303. Rate limiting algorithms?

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

## 304. API caching strategies?

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

## 305. Background job monitoring?

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

## 306. Log aggregation?

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

## 307. Distributed tracing?

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

## 308. Performance benchmarking?

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

## 309. Security scanning?

`Hinglish Explanation:`

Security scanning vulnerabilities aur insecure dependencies detect karne ke liye use hoti hai. Automated scans development lifecycle ka important part hain.

`Interview Answer:`

Security scanning identifies vulnerabilities, insecure configurations, and dependency risks before they reach production.

Example:

```bash
npm audit
```

---

## 310. Compliance (GDPR, etc.)?

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
2. How does request and response flow in Express?
3. What is the use of next() in Express?
4. How do you implement global error handling?
5. How do you structure a scalable Express application?
6. How do you secure an Express API (rate limiting, headers)?
7. Explain route parameter vs. query parameter.
8. What’s the role of CORS in Express and how to configure it?
9. How do you handle file uploads?
10. How would you implement logging in Express?
11. What is the use of express-validator?
12. How do you prevent SQL/NoSQL injection in Express?
13. What is Helmet and how does it help with security?
14. How do you handle role-based authorization in Express?
15. What are virtual routes and when are they useful?
16. Difference between synchronous and asynchronous middleware.
17. How do you optimize performance in Express apps?
18. What is a proxy in Express and how to set it?
19. What is the use of app.locals and res.locals?
20. How can you implement request tracing in Express?
21. What is the event loop in Node.js and how does it work?
22. Explain the difference between process.nextTick() and setImmediate().
23. How does Node.js handle asynchronous I/O?
24. What are streams and how do you use them?
25. How does clustering work in Node.js?
26. Explain how you’d implement a caching layer in Node.
27. How do you handle large file uploads efficiently?
28. What are child processes and how are they used?
29. What is the role of buffers in Node.js?
30. How do you monitor and debug Node.js performance?
31. What are worker threads and when would you use them?
32. Explain how you’d secure a Node.js application.
33. How do you manage environment variables securely?
34. What’s the difference between CommonJS and ES modules?
35. How do you handle rate limiting in Node.js?
36. How do you implement JWT authentication in Node.js?
37. How does dependency injection work in Node?
38. What is the role of fs/promises in Node?
39. How can you prevent memory leaks?
40. How would you implement logging and metrics?
---

## 🍃 MongoDB (311-360)

311. MongoDB kya hai?
312. NoSQL kya hai?
313. Document model?
314. CRUD operations?
315. Index kya hai?
316. Compound index?
317. Text index?
318. Aggregation pipeline?
319. $match kya hai?
320. $group kya hai?
321. $lookup kya hai?
322. Sharding kya hai?
323. Replication kya hai?
324. CAP theorem?
325. ACID properties?
326. Transactions?
327. Schema design?
328. Embedding vs referencing?
329. Data consistency?
330. Query optimization?
331. Index tuning?
332. Write concern?
333. Read preference?
334. Backup & restore?
335. Atlas kya hai?
336. Scaling MongoDB?
337. Performance issues fix?
338. Change streams?
339. MongoDB vs SQL?
340. Aggregation pipeline optimization?
341. Data modeling patterns?
342. Time series data?
343. Geospatial queries?
344. Text search?
345. GridFS?
346. Realm kya hai?
347. Compass tool?
348. Monitoring tools?
349. Security best practices?
350. Encryption?
351. Audit logging?
352. Data validation?
353. Schema versioning?
354. Migration strategies?
355. Bulk operations?
356. Cursor handling?
357. Transaction best practices?
358. Error handling?
359. Connection pooling?
360. Performance monitoring?

### Additional Important Questions
1. Explain the aggregation pipeline and its stages.
2. How does indexing work in MongoDB, and what are compound indexes?
3. What’s the difference between find(), findOne(), and aggregate()?
4. How do you optimize MongoDB queries for performance?
5. What is schema design and how do you model relationships in MongoDB (1:1, 1:N,
N:N)?
6. Explain data validation and how to enforce it in MongoDB.
7. What are transactions in MongoDB and when would you use them?
8. What is a capped collection?
9. How does MongoDB handle concurrency?
10. Explain change streams in MongoDB.
11. What’s the difference between populate() and $lookup?
12. How do you perform pagination in MongoDB efficiently?
13. What is the use of the $facet stage?
14. How does MongoDB handle horizontal scaling?
15. Difference between embedded documents vs. referenced documents.
16. How do you back up and restore a MongoDB database?
17. How can you enforce uniqueness on a field?
18. What are MongoDB Atlas Triggers?
19. What is TTL indexing and when would you use it?
20. How do you monitor and profile MongoDB queries?


---

## 🏗️ System Design & DevOps (361-500)

### System Design
361. URL shortener design
362. Chat system
363. Notification system
364. Rate limiter
365. Caching system
366. CDN kya hai
367. Load balancing
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

## 🛠️ Real-World Experience Questions (401-450)

### Production / Debugging
401. Kisi production bug ko kaise identify karte ho?
402. Logs se issue kaise trace karte ho?
403. Agar bug intermittent ho toh kaise debug karoge?
404. Production vs staging bug difference kaise handle karte ho?
405. Root cause analysis kaise karte ho?
406. Bug fix ke baad regression kaise avoid karte ho?
407. Feature break ho gaya production mein — kya karoge?
408. Hotfix vs full release kab choose karte ho?
409. Rollback kab karte ho?
410. Debugging tools kaunse use karte ho?

### Performance
411. Slow API kaise identify karte ho?
412. API latency reduce kaise karte ho?
413. Frontend load time kaise improve karte ho?
414. DB query slow ho toh kya karte ho?
415. Indexing kab use karte ho?
416. Caching ka use kaise karte ho?
417. Redis kab use karte ho?
418. Bundle size kaise reduce karte ho?
419. Memory usage kaise monitor karte ho?
420. CPU bottleneck kaise detect karte ho?

### Scaling
421. High traffic handle kaise karte ho?
422. Horizontal vs vertical scaling kab use karte ho?
423. Load balancing kaise implement karte ho?
424. Stateless architecture kya hota hai?
425. Session scaling kaise karte ho?
426. Microservices kab choose karte ho?
427. Monolith kab better hai?
428. Distributed system challenges kya hote hain?
429. Failover system kaise design karte ho?
430. Rate limiting kaise implement karte ho?

### Architecture Decisions
431. System design ka approach kya hota hai?
432. Tech stack kaise choose karte ho?
433. Scalability ke liye design kaise karte ho?
434. Maintainable code kaise likhte ho?
435. Modular architecture kya hai?
436. Clean architecture kya hai?
437. Design patterns ka use kab karte ho?
438. API design best practices kya hain?
439. Versioning kaise handle karte ho?
440. Backward compatibility kaise maintain karte ho?

### Team & Process
441. Team collaboration kaise karte ho?
442. Code review kaise karte ho?
443. PR reject kab karte ho?
444. Conflict kaise resolve karte ho?
445. Agile process kya hai?
446. Sprint planning kaise hoti hai?
447. Deadline pressure kaise handle karte ho?
448. Knowledge sharing kaise karte ho?
449. Junior developers ko kaise guide karte ho?
450. Cross-team communication kaise handle karte ho?

---

## 🚨 Scenario-Based Questions (451-500)

### System Failure
451. Server crash ho gaya — first step kya hoga?
452. Multiple servers down ho gaye — kya karoge?
453. Deployment ke baad app crash ho gaya — kaise fix karoge?
454. Infinite loop production mein aa gaya — kaise detect karoge?
455. High error rate aa raha hai — kya karoge?

### Database Issues
456. Database down ho gaya — kya karoge?
457. DB connection pool exhaust ho gaya — kaise handle karoge?
458. Data corruption ho gaya — recovery kaise karoge?
459. Slow queries kaise optimize karoge?
460. Deadlock ho raha hai — kaise solve karoge?

### Performance & Latency
461. App bahut slow ho gaya — root cause kaise find karoge?
462. API latency spike ho raha hai — kya karoge?
463. Frontend slow load ho raha hai — kaise optimize karoge?
464. Memory leak detect kaise karoge?
465. GC issue kaise identify karoge?

### Traffic Spike
466. अचानक traffic 10x badh gaya — kya karoge?
467. Server overload ho gaya — kaise handle karoge?
468. Auto-scaling kaise configure karoge?
469. CDN ka use kaise karoge?
470. Rate limiting kaise implement karoge?

### Security
471. Security breach detect hua — kya karoge?
472. Data leak ho gaya — response kya hoga?
473. Unauthorized access detect hua — kaise handle karoge?
474. XSS attack ho raha hai — kaise fix karoge?
475. API abuse ho raha hai — kaise control karoge?

### Deployment & Recovery
476. Deployment fail ho gaya — kya karoge?
477. Rollback kaise karte ho?
478. Zero downtime deployment kaise karte ho?
479. Blue-green deployment kya hai?
480. Canary deployment kya hai?

### Observability
481. Monitoring tools ka use kaise karte ho?
482. Logs, metrics, traces ka difference?
483. Alerting system kaise design karte ho?
484. Production issues proactively kaise detect karte ho?
485. Debugging without logs kaise karoge?

### Edge Cases
486. Race condition aa gaya — kaise solve karoge?
487. Duplicate requests kaise handle karoge?
488. Idempotency kaise implement karte ho?
489. Retry mechanism kaise design karte ho?
490. Timeout handling kaise karte ho?

### Product Thinking
491. Feature fail ho gaya — kya karoge?
492. User complaints aa rahi hain — kaise handle karoge?
493. UX issue kaise identify karte ho?
494. Feature prioritize kaise karte ho?
495. A/B testing kaise karte ho?

### Advanced Scenarios
496. Microservices communication fail ho gaya — kya karoge?
497. Message queue down ho gaya — fallback kya hoga?
498. Third-party API fail ho gaya — kaise handle karoge?
499. Disaster recovery plan kaise design karte ho?
500. System highly available kaise banate ho?

---

## 💣🔥 Tricky Frontend Questions (Top 30)

### 🧠 JavaScript Tricky (1-10)
1. `this` keyword arrow function aur normal function mein different kyun behave karta hai?
2. `setTimeout(fn, 0)` immediately execute kyun nahi hota?
3. Promise aur async/await internally kaise kaam karte hain?
4. Event loop mein microtask pehle run hota hai ya macrotask? kyun?
5. `==` kab useful ho sakta hai despite being unsafe?
6. Closure memory leak kaise cause karta hai?
7. Deep clone ka best तरीका kya hai (JSON vs structuredClone vs manual)?
8. `Object.freeze()` ke baad bhi object kaise change ho sakta hai?
9. `NaN !== NaN` kyun hota hai?
10. JS single-threaded hone ke baad bhi parallel kaise lagta hai?

### Additional JS Tricky
- What is execution context?
- Difference between call, apply, bind
- Pollyfills
- Function currying
- Closures with many follow-up questions
- Event loop and its architecture
- Output based questions to check understanding of promise and this keyword

### ⚛️ React Tricky (11-18)
11. `useEffect` infinite loop kab aur kyun hota hai?
12. `useState` async kyun lagta hai?
13. `useMemo` aur `useCallback` galat use karne se performance worse kaise hoti hai?
14. React.memo kab kaam nahi karta?
15. Keys wrong use karne se bug kaise aata hai?
16. Context API performance issue kab deta hai?
17. Controlled vs uncontrolled components — real difference kya hai?
18. SSR ke baad hydration error kyun aata hai?

### 🌐 Browser & Rendering (19-24)
19. CSS render-blocking kyun hoti hai par JS parsing-blocking kyun hota hai?
20. Reflow aur repaint mein actual difference kya hai real example ke saath?
21. `position: absolute` kis ke relative hota hai? (trap question 😈)
22. `z-index` kab kaam nahi karta?
23. Browser HTML parsing ke beech JS execute kyun karta hai?
24. Critical rendering path optimize kaise karte ho practically?

### 🔐 Security Tricky (25-27)
25. React XSS se safe hai — kya ye statement 100% correct hai?
26. JWT localStorage mein store karna kyun dangerous hai?
27. CSRF attack tab bhi possible hai jab JWT use kar rahe ho?

### ⚡ Performance + Real-world (28-30)
28. Large list render karte waqt React app slow kyun ho jata hai? fix kaise karte ho?
29. API fast hai phir bhi UI slow kyun lag raha hai?
30. 1 second ke andar page load kaise achieve karoge real project mein?

---

## 📊 Database (Top 25)

1. How do you design database schema?
2. What is normalization vs denormalization?
3. What is indexing and trade-offs?
4. How do you optimize slow queries?
5. What is EXPLAIN and how used?
6. What is JOIN and types?
7. How do you handle large datasets?
8. What is transaction?
9. What is ACID?
10. How do you handle concurrency?
11. Optimistic vs pessimistic locking?
12. What is N+1 problem?
13. How do you avoid full table scan?
14. What is partitioning?
15. What is replication?
16. How do you handle DB scaling?
17. What is indexing strategy?
18. When not to use index?
19. What is query optimization?
20. What is connection pooling?
21. How do you handle DB failures?
22. What is deadlock?
23. How do you debug DB issues?
24. What is data consistency?
25. How do you archive old data?

---

## 🔥 PHP + Laravel (Top 100 Questions)

### 🔹 SECTION 1: PHP CORE (ADVANCED) — 40 Questions

#### Basics but Deep Understanding
1. PHP 5.6 → 7 → 8 differences (real impact)
2. PHP ka request lifecycle kaise kaam karta hai?
3. `include` vs `require` vs `include_once` vs `require_once`
4. `isset()` vs `empty()` vs `array_key_exists()`
5. PHP me data types aur type juggling kaise kaam karta hai?

#### OOP + Design
6. OOP principles PHP me kaise apply karte ho?
7. SOLID principles kya hain? real example ke saath
8. Interface vs Abstract class
9. Traits kya hote hain? kab use kiya?
10. Dependency Injection kya hai?

#### Advanced Concepts
11. Late Static Binding kya hota hai?
12. Namespaces ka use kyun karte hain?
13. Autoloading kaise kaam karta hai? (PSR-4)
14. Composer internally kaise kaam karta hai?
15. Reflection kya hota hai PHP me?

#### Performance & Optimization
16. PHP performance kaise improve karte ho?
17. OPCache kya hota hai?
18. Memory leak kaise detect karte ho?
19. Large data processing kaise handle karte ho?
20. Generators (`yield`) kab use kiya?

#### Error Handling
21. Exception vs Error
22. Custom exception kaise banate ho?
23. Logging kaise implement karte ho?
24. Debugging production issue kaise karte ho?

#### Security
25. SQL Injection kaise prevent karte ho?
26. XSS kya hai? kaise prevent karte ho?
27. CSRF kaise handle karte ho?
28. Secure file upload kaise karte ho?
29. Password hashing kaise karte ho?

#### Sessions & Auth
30. Session management kaise kaam karta hai?
31. Token-based auth vs session-based auth
32. JWT kya hai? kab use kiya?

#### API & Integration
33. REST API PHP me kaise banate ho?
34. Rate limiting kaise implement karte ho?
35. External API integration kaise handle karte ho?

#### Real-world Scenarios
36. Slow API debug kaise karte ho?
37. High traffic handle kaise karte ho?
38. Code refactoring ka example do
39. Legacy code kaise improve kiya?
40. Production issue ka example do

### 🔹 SECTION 2: LARAVEL (ADVANCED) — 60 Questions

#### Core Concepts
41. Laravel request lifecycle explain karo
42. MVC architecture Laravel me kaise implement hota hai?
43. Service Container kya hota hai?
44. Service Providers ka role kya hai?
45. Facades kya hote hain?

#### Routing & Middleware
46. Middleware kya hai? custom middleware kaise banate ho?
47. Route groups aur route caching kya hai?
48. Middleware chaining kaise kaam karta hai?
49. API versioning Laravel me kaise karte ho?

#### Controllers & Validation
50. Resource controllers kya hote hain?
51. Form request validation vs manual validation
52. Custom validation rules kaise banate ho?

#### Database & ORM
53. Eloquent ORM kya hai?
54. Eloquent vs Query Builder
55. N+1 problem kya hai? kaise solve kiya?
56. Lazy loading vs eager loading
57. Global scope vs local scope
58. Accessors & mutators kya hote hain?

#### Relationships
59. One-to-one, one-to-many, many-to-many relationships
60. Polymorphic relationships kya hote hain?
61. Pivot table kya hota hai?

#### Advanced DB Handling
62. Transactions Laravel me kaise use karte ho?
63. Database seeding & factories kya hote hain?
64. Migrations best practices

#### Queues & Jobs (VERY IMPORTANT)
65. Laravel queues kaise kaam karte hain?
66. Redis queue vs database queue
67. Queue failure kaise handle karte ho?
68. Retry mechanism kaise implement karte ho?
69. Jobs vs events vs listeners

#### Events & Broadcasting
70. Event-driven architecture kya hai?
71. Laravel broadcasting ka use kab karte ho?

#### Caching (VERY IMPORTANT)
72. Laravel caching kaise implement karte ho?
73. Redis vs file cache
74. Cache invalidation kaise handle karte ho?

#### Authentication & Authorization
75. Laravel authentication kaise kaam karta hai?
76. Sanctum vs Passport
77. Role-based access control kaise implement kiya?

#### API Development
78. REST API Laravel me kaise design karte ho?
79. API resources kya hote hain?
80. API pagination kaise implement karte ho?

#### Performance Optimization
81. Laravel performance optimize kaise karte ho?
82. Config caching, route caching kab use karte ho?
83. Eager loading ka impact kya hai?

#### Testing
84. Laravel testing kaise karte ho?
85. Unit vs feature testing

#### DevOps & Deployment
86. Laravel app deploy kaise karte ho?
87. Environment configuration kaise manage karte ho?

#### Advanced Architecture
88. Repository pattern kya hai?
89. Service layer architecture ka use
90. Modular Laravel kaise banate ho?

#### Real-world Scenarios (MOST IMPORTANT)
91. Slow Laravel API kaise optimize kiya?
92. Large email system kaise implement kiya?
93. Real-time notification system kaise banaya?
94. Multi-tenant system kaise design kiya?
95. High traffic handling ka real example

#### Senior-Level Thinking
96. Monolith vs microservices — kya choose kiya?
97. Code review process kaise chalate ho?
98. Team ko kaise mentor karte ho?
99. Technical decision ka example do
100. System design me Laravel ka role kaise define karte ho?

---

## 🔥 Senior-Level Answers: PHP & Laravel

### PHP Core (Selected Answers)

**1. PHP versions**
> In my experience, upgrading from PHP 5.6 to 7 improved performance significantly, almost 2x. Later with PHP 8, we got better type safety using union types and improved error handling, which helped reduce production bugs.

**2. Memory management**
> PHP handles memory automatically using garbage collection. In one project, we optimized memory by using generators instead of loading large datasets, which reduced memory usage significantly.

**3. isset vs empty vs array_key_exists**
> I usually use `isset()` for checking variables quickly. When I need to check empty values like "", 0, I use `empty()`. For arrays, I prefer `array_key_exists()` when null values are allowed.

**4. Traits**
> I used traits for sharing common methods like logging and reusable utilities across multiple classes without inheritance issues.

**5. Dependency Injection**
> I follow dependency injection to make code testable. For example, instead of creating DB connection inside class, I inject it, which makes unit testing easier.

**6. Composer**
> Composer helps manage dependencies. We used PSR-4 autoloading so classes load automatically, which keeps code clean and maintainable.

**7. Session security**
> In production, we used HTTPS, secure cookies, and regenerated session IDs to prevent session hijacking.

**8. Exception vs Error**
> Exceptions are used for handling expected issues like validation. Errors are system-level issues. I always use try-catch for better control.

**9. Generators**
> I used generators while processing large CSV files, which avoided loading entire file into memory.

**10. PHP-FPM**
> We used PHP-FPM with Nginx to handle high traffic efficiently, improving response handling and concurrency.

### Laravel (Selected Answers)

**11. Lifecycle**
> Request goes through middleware, routing, controller, and returns response. In debugging issues, I often check middleware and service container bindings.

**12. Middleware**
> I created custom middleware for authentication and logging API requests for audit purposes.

**13. Service Container**
> It helps manage dependencies. We used it for binding interfaces to implementations, making code flexible.

**14. Eloquent vs Query Builder**
> Eloquent is good for readability. For heavy queries, I prefer Query Builder for performance optimization.

**15. N+1 problem**
> I faced this issue in user listing. Solved it using eager loading, reducing queries from 100+ to 2.

**16. Queues**
> We used Redis queues for email campaigns, which reduced API response time significantly.

**17. Jobs vs Events**
> Jobs handle background tasks. Events are used for decoupling logic like sending notifications.

**18. Caching**
> We implemented Redis caching for frequently used APIs, reducing DB load by around 60%.

**19. Sanctum vs Passport**
> For simple APIs, I prefer Sanctum. For OAuth-based systems, Passport is better.

**20. Testing**
> I write unit tests for logic and feature tests for APIs to ensure end-to-end flow.

### Frontend (Selected Answers)

**21. React vs Angular**
> In one project, I chose React for flexibility. For enterprise apps, Angular is better due to built-in structure.

**22. Virtual DOM**
> It updates only changed parts, improving UI performance.

**23. Change Detection**
> Angular tracks changes automatically. We optimized performance using OnPush strategy.

**24. State Management**
> Used Redux/NgRx for managing global state in large apps.

**25. Lazy Loading**
> Used it to load modules only when required, reducing initial load time.

**26. Debounce vs Throttle**
> Used debounce in search inputs and throttle in scroll events.

**27. SSR vs CSR**
> Used SSR for SEO-heavy pages, CSR for dashboards.

**28. Performance**
> Reduced bundle size, used lazy loading and API optimization.

### Database (Selected Answers)

**29. Index**
> We added indexes on frequently queried columns, reducing query time significantly.

**30. Normalization**
> Used normalization for clean design, but denormalized for performance-critical queries.

**31. Joins**
> Used joins to fetch related data efficiently.

**32. Query Optimization**
> Optimized queries using indexes and avoiding unnecessary joins.

**33. Transactions**
> Used transactions in payment systems to ensure data consistency.

**34. Deadlock**
> Handled by retry mechanism and proper query ordering.

**35. Large Data**
> Used pagination and batching for handling large datasets.

**36. Sharding vs Replication**
> Used replication for read scaling. Sharding for very large datasets.

### API & System Design (Selected Answers)

**37. REST**
> Follow proper HTTP methods and stateless design.

**38. PUT vs PATCH**
> PUT replaces full data, PATCH updates partial data.

**39. Idempotency**
> Ensures repeated calls give same result, useful in payment APIs.

**40. Rate Limiting**
> Used middleware to limit API calls per user.

**41. Microservices**
> Used when system grows large, but adds complexity.

**42. Email System**
> Used queue + workers + AWS SES for scalable email delivery.

**43. Scalability**
> Used load balancer, caching, and queues.

**44. Caching**
> Used Redis for fast data access.

### Security (Selected Answers)

**45. OWASP**
> Handled SQL Injection, XSS, CSRF in applications.

**46. SQL Injection**
> Used prepared statements and ORM.

**47. XSS/CSRF**
> Escaped inputs and used CSRF tokens.

**48. Auth vs Authorization**
> Authentication verifies user, authorization checks access.

**49. Performance Tuning**
> Optimized DB, caching, and API responses.

**50. Monitoring**
> Used logs and tools like New Relic for monitoring.

### Bonus: JD-Specific Strong Answers

**CRM Experience**
> I worked on CRM where users manage leads, campaigns, and track activities in real-time.

**Audit System**
> Implemented logging system to track user actions for compliance and debugging.

**CI/CD**
> Used GitHub Actions/Jenkins for automated build and deployment.

**Docker**
> Used Docker for consistent development and deployment environments.

**AWS**
> Worked with EC2, S3, SES for hosting, storage, and email services.

**Real-time Tracking**
> Used tracking pixels and event logging for email analytics.

**Scaling Strategy**
> Handled scaling using queues, caching, and horizontal scaling.

---

## 📝 Quick Reference: Topic Areas

| Category | Question Range |
|----------|----------------|
| HTML | 1-50 |
| CSS | 51-100 |
| Browser & Rendering | 1-40 |
| Frontend Security | 41-90 |
| Performance Optimization | 91-120 |
| JavaScript | 1-120 |
| React | 121-220 |
| Node + Express | 221-310 |
| MongoDB | 311-360 |
| System Design & DevOps | 361-500 |
| Real-World Experience | 401-450 |
| Scenario-Based | 451-500 |
| Tricky Frontend | Top 30 |
| Database | Top 25 |
| PHP + Laravel | Top 100 |

---

*Happy Learning! 🚀*