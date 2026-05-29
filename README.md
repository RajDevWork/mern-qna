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
142. useState?
143. useEffect?
144. useRef?
145. useMemo?
146. useCallback?
147. useReducer?
148. Custom hooks?
149. Rules of hooks?
150. Dependency array issues?
151. Infinite loop useEffect mein?
152. Cleanup function?
153. React.memo?
154. Re-render kaise hota hai?
155. Re-render kaise avoid kare?
156. Context API?
157. Redux kya hai?
158. Redux vs Context?
159. Middleware Redux mein?
160. Thunk vs Saga?
161. Zustand kya hai?
162. Recoil kya hai?
163. Code splitting?
164. Lazy loading?
165. Suspense?
166. Error boundaries?
167. Portals kya hain?
168. Fragments kya hain?
169. StrictMode kya hai?
170. DevTools ka use?
171. SSR kya hai?
172. CSR kya hai?
173. Hydration kya hai?
174. Next.js kya hai?
175. Routing kaise hoti hai?
176. Dynamic routing?
177. SEO React mein?
178. Accessibility?
179. Testing React?
180. Jest kya hai?
181. React Testing Library?
182. Snapshot testing?
183. Mocking?
184. Performance optimization?
185. Bundle size reduce kaise?
186. Memoization React mein?
187. Virtualization kya hai?
188. Large list rendering?
189. Lazy components?
190. Image optimization?
191. Folder structure kaise?
192. Scalable architecture?
193. Design patterns React mein?
194. HOC kya hai?
195. Render props?
196. Hooks vs HOC?
197. Micro frontends?
198. Monorepo kya hai?
199. Deployment React app?
200. Env variables React mein?
201. Build process?
202. CI/CD React?
203. Security React?
204. XSS prevent kaise?
205. Form validation?
206. State normalization?
207. API calls best practices?
208. Error handling?
209. Loading states?
210. Skeleton UI?
211. Offline support?
212. PWA kya hai?
213. Service worker React?
214. Caching strategies?
215. Feature flags?
216. A/B testing?
217. Internationalization?
218. Dark mode implementation?
219. Theming?
220. Best practices React?

### Additional Important Questions
1. Explain the React reconciliation algorithm.
2. What are controlled vs. uncontrolled components?
3. How does React handle context and why use it?
4. What are the common performance optimization techniques in React?
5. How does memoization work in React (React.memo, useMemo)?
6. How does React handle batching of state updates?
7. What are custom hooks and when would you use them?
8. Explain lazy loading and code splitting in React.
9. What’s the difference between useEffect and useLayoutEffect?
10. How does React’s concurrent mode work?
11. What is the virtual DOM and how does React use it?
12. How do you implement SSR (Server-Side Rendering) with React?
13. Difference between lifting state and prop drilling.
14. What is suspense in React?
15. How do you manage state in large applications (Redux, Context, Zustand)?
16. How does hydration work in React with SSR?
17. How do you secure a React frontend?
18. Explain error boundaries in React
19. How does React Router handle dynamic routes?
20. How do you handle access control (auth-guard) in React?
21. How do you use useReducer and what is it best for?
22. How do you handle WebSocket or real-time data in React?
23. What is the role of key in React lists?
24. Explain compound components pattern.
25. How does React DevTools work under the hood?
26. What is the StrictMode in React and why use it?
27. How would you implement theme switching in React?
28. How do you test React components (Jest, RTL)?
29. How do you implement HOC (Higher-Order Components)?
30. What is the role of forwardRef in React?
---

## 🌐 Node + Express (221-310)

221. Node.js kya hai?
222. Event loop Node mein?
223. Non-blocking I/O?
224. Streams kya hain?
225. Buffers kya hain?
226. Modules system?
227. require vs import?
228. npm kya hai?
229. package.json kya hai?
230. process object?
231. Middleware kya hai?
232. Express kya hai?
233. Routing kaise hoti hai?
234. Error handling middleware?
235. Custom middleware?
236. Request lifecycle?
237. REST API kya hai?
238. CRUD API kaise banate ho?
239. Validation kaise karte ho?
240. File upload?
241. Authentication?
242. Authorization?
243. JWT kaise kaam karta hai?
244. OAuth kya hai?
245. Sessions vs tokens?
246. Cookies handling?
247. Rate limiting?
248. Helmet kya hai?
249. Logging kaise karte ho?
250. Morgan kya hai?
251. Clustering kya hai?
252. Worker threads?
253. Load balancing?
254. Scaling Node app?
255. Microservices Node mein?
256. GraphQL kya hai?
257. REST vs GraphQL?
258. API versioning?
259. Pagination?
260. Filtering & sorting?
261. Redis integration?
262. Caching strategies?
263. Queue system?
264. Background jobs?
265. Cron jobs?
266. Email service?
267. File storage (S3)?
268. WebSockets?
269. Socket.io?
270. Real-time apps?
271. Security best practices?
272. CORS handle kaise?
273. Input sanitization?
274. SQL/NoSQL injection prevent?
275. HTTPS setup?
276. Reverse proxy?
277. Nginx integration?
278. Docker Node app?
279. Deployment strategies?
280. Monitoring tools?
281. High traffic handle kaise?
282. Memory leak detect?
283. API slow ho toh?
284. DB bottleneck?
285. Logging strategy?
286. Retry mechanism?
287. Circuit breaker?
288. Graceful shutdown?
289. Zero downtime deploy?
290. Load testing kaise karte ho?
291. Clustering vs worker threads?
292. PM2 kya hai?
293. Error monitoring tools?
294. Health checks?
295. API documentation?
296. GraphQL subscriptions?
297. Database connection pooling?
298. Environment configuration?
299. API gateway?
300. Message queue (RabbitMQ/Kafka)?
301. Event sourcing?
302. CQRS pattern?
303. Rate limiting algorithms?
304. API caching strategies?
305. Background job monitoring?
306. Log aggregation?
307. Distributed tracing?
308. Performance benchmarking?
309. Security scanning?
310. Compliance (GDPR, etc.)?

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