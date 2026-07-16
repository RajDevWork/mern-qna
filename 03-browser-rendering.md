[⬅ Back to Index](./README.md)

## 🌐 Browser Working & Rendering (1-40)

1. Browser kaise kaam karta hai?

`Hinglish Explanation:`

Browser server se HTML, CSS aur JavaScript download karta hai. Phir HTML parse karke DOM banata hai, CSS se CSSOM banata hai aur finally page render karta hai.

`Interview Answer:`

A browser fetches resources from the server, parses HTML and CSS, creates the DOM and CSSOM, builds the Render Tree, and renders pixels on the screen.

Example:

```text
Request
 ↓
HTML/CSS/JS Download
 ↓
DOM + CSSOM
 ↓
Render Tree
 ↓
Layout → Paint → Composite
```

---

2. Sabse pehle browser kya load karta hai?

`Hinglish Explanation:`

Browser sabse pehle HTML document request karta hai. Baad me HTML parse karte waqt CSS, JS aur images jaise resources discover karta hai.

`Interview Answer:`

The browser first requests and downloads the HTML document, then discovers and loads additional resources.

Example:

```text
Browser
 ↓
index.html
 ↓
style.css
app.js
images
```

---

3. HTML parsing kaise hoti hai?

`Hinglish Explanation:`

Browser HTML ko top-to-bottom read karta hai aur har tag ko parse karke DOM nodes create karta hai.

`Interview Answer:`

HTML parsing converts raw HTML markup into a structured DOM tree that JavaScript can interact with.

Example:

```html
<body>
  <h1>Hello</h1>
</body>
```

```text
Body
 ↓
H1
```

---

4. DOM kya hai?

`Hinglish Explanation:`

DOM (Document Object Model) webpage ka tree structure representation hai jise JavaScript dynamically modify kar sakta hai.

`Interview Answer:`

The DOM is a tree-like representation of HTML elements that allows scripts to access and manipulate content.

Example:

```javascript
document
  .querySelector("h1")
  .textContent = "Hi";
```

---

5. CSSOM kya hai?

`Hinglish Explanation:`

CSSOM (CSS Object Model) CSS rules ka tree structure hota hai jo browser styling calculate karne ke liye use karta hai.

`Interview Answer:`

The CSSOM is a tree representation of CSS rules used to calculate styles for elements.

Example:

```css
h1 {
  color: red;
}
```

---

6. Render tree kya hota hai?

`Hinglish Explanation:`

Render Tree DOM aur CSSOM ko combine karke banta hai. Isme sirf visible elements include hote hain.

`Interview Answer:`

The Render Tree contains visible DOM elements along with their computed styles and is used for rendering.

Example:

```text
DOM
 +
CSSOM
 ↓
Render Tree
```

---

7. DOM + CSSOM kaise combine hote hain?

`Hinglish Explanation:`

Browser DOM ke har visible node par CSS rules apply karta hai aur Render Tree generate karta hai.

`Interview Answer:`

The browser combines DOM nodes with computed styles from CSSOM to create the Render Tree.

Example:

```text
DOM Node
 +
Computed Style
 ↓
Render Node
```

---

8. Critical rendering path kya hai?

`Hinglish Explanation:`

Critical Rendering Path wo process hai jo browser follow karta hai HTML se pixels display karne tak.

`Interview Answer:`

The Critical Rendering Path is the sequence of steps required to convert HTML, CSS, and JavaScript into rendered pixels.

Example:

```text
HTML
 ↓
DOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
```

---

9. Layout (reflow) kya hota hai?

`Hinglish Explanation:`

Layout ya Reflow me browser elements ki exact position aur dimensions calculate karta hai.

`Interview Answer:`

Layout is the process of calculating the size and position of elements on the page.

Example:

```css
width: 200px;
```

---

10. Paint kya hota hai?

`Hinglish Explanation:`

Paint phase me browser pixels draw karta hai jaise colors, borders, shadows aur text.

`Interview Answer:`

Painting converts layout information into actual pixels displayed on the screen.

Example:

```css
background: blue;
```

---

11. Composite kya hota hai?

`Hinglish Explanation:`

Composite phase me browser different layers ko combine karke final screen output generate karta hai.

`Interview Answer:`

Compositing combines painted layers into the final image displayed to the user.

Example:

```text
Layer 1
Layer 2
 ↓
Final Screen
```

---

12. Reflow vs repaint difference?

`Hinglish Explanation:`

Reflow layout recalculate karta hai, jabki Repaint sirf visual appearance update karta hai bina layout change kiye.

`Interview Answer:`

Reflow recalculates layout and positions, whereas Repaint updates visual styles without affecting layout.

Example:

```css
width: 300px;   /* Reflow */

color: red;     /* Repaint */
```

---

13. Reflow expensive kyun hota hai?

`Hinglish Explanation:`

Reflow me browser ko multiple elements ke size aur position dobara calculate karne padte hain, jo performance impact kar sakta hai.

`Interview Answer:`

Reflow is expensive because it triggers layout recalculations that may affect many elements in the document.

Example:

```javascript
element.style.width =
  "500px";
```

---

14. Browser rendering ko kaise optimize karte ho?

`Hinglish Explanation:`

Unnecessary DOM updates avoid karo, CSS optimize karo, images compress karo aur code splitting use karo.

`Interview Answer:`

Rendering can be optimized by minimizing reflows, reducing DOM manipulations, compressing assets, and using lazy loading.

Example:

```javascript
documentFragment.append(
  element
);
```

---

15. CSS render blocking kyun hoti hai?

`Hinglish Explanation:`

Browser Render Tree banane se pehle CSS download aur parse karta hai. Isliye CSS render-blocking resource mani jati hai.

`Interview Answer:`

CSS blocks rendering because the browser must calculate styles before displaying content.

Example:

```html
<link
  rel="stylesheet"
  href="style.css"
/>
```

---

16. JavaScript parsing ko kyun block karta hai?

`Hinglish Explanation:`

Browser HTML parsing pause kar deta hai kyunki JavaScript DOM ko modify kar sakti hai.

`Interview Answer:`

JavaScript blocks HTML parsing because it can modify the DOM during execution.

Example:

```html
<script src="app.js"></script>
```

---

17. async vs defer scripts?

`Hinglish Explanation:`

`async` script download aur execute independently karta hai. `defer` script HTML parsing complete hone ke baad execute hota hai.

`Interview Answer:`

`async` executes as soon as it downloads, while `defer` waits until HTML parsing is complete.

Example:

```html
<script async src="app.js"></script>

<script defer src="app.js"></script>
```

---

18. Script loading ka order kya hota hai?

`Hinglish Explanation:`

Normal scripts sequentially load aur execute hoti hain. Defer scripts order maintain karti hain, async scripts order guarantee nahi karti.

`Interview Answer:`

Normal and deferred scripts preserve execution order, whereas async scripts execute whenever they finish downloading.

Example:

```html
<script defer src="a.js"></script>
<script defer src="b.js"></script>
```

---

19. Preload vs prefetch?

`Hinglish Explanation:`

Preload current page ke important resources ke liye use hota hai. Prefetch future navigation ke resources ko background me load karta hai.

`Interview Answer:`

Preload fetches critical resources for the current page, while Prefetch loads resources likely needed in the future.

Example:

```html
<link
  rel="preload"
  href="font.woff2"
/>
```

---

20. Lazy loading kya hai?

`Hinglish Explanation:`

Lazy Loading resources ko tab load karti hai jab unki zarurat hoti hai. Isse initial page load fast ho jata hai.

`Interview Answer:`

Lazy Loading delays loading of non-critical resources until they are required.

Example:

```html
<img
  src="image.jpg"
  loading="lazy"
/>
```

21. Browser caching kaise kaam karti hai?

`Hinglish Explanation:`

Browser downloaded resources (CSS, JS, Images) ko local cache me store karta hai. Next request par browser cache check karta hai aur agar resource valid ho to server se dobara download nahi karta.

`Interview Answer:`

Browser caching stores resources locally and reuses them for future requests, reducing network traffic and improving page load performance.

Example:

```text
Request
 ↓
Browser Cache
 ↓
Found? → Use Cache
Not Found → Fetch Server
```

---

22. Cache types kya hote hain?

`Hinglish Explanation:`

Browser me Memory Cache, Disk Cache, Service Worker Cache aur CDN Cache commonly use hote hain.

`Interview Answer:`

Common cache types include Memory Cache, Disk Cache, Service Worker Cache, and CDN Cache.

Example:

```text
Memory Cache
Disk Cache
Service Worker Cache
CDN Cache
```

---

23. Service worker kya karta hai?

`Hinglish Explanation:`

Service Worker background me run hota hai aur caching, offline support aur push notifications provide karta hai.

`Interview Answer:`

A Service Worker acts as a proxy between the browser and network, enabling caching, offline access, and background tasks.

Example:

```javascript
navigator.serviceWorker
  .register("/sw.js");
```

---

24. HTTP request lifecycle kya hota hai?

`Hinglish Explanation:`

User request karta hai → DNS lookup hota hai → TCP/HTTPS connection banti hai → server response bhejta hai → browser render karta hai.

`Interview Answer:`

The HTTP lifecycle includes DNS resolution, connection establishment, request transmission, server processing, response delivery, and rendering.

Example:

```text
Browser
 ↓
DNS
 ↓
TCP/HTTPS
 ↓
Server
 ↓
Response
```

---

25. DNS resolution kya hota hai?

`Hinglish Explanation:`

DNS domain name ko IP address me convert karta hai taaki browser server locate kar sake.

`Interview Answer:`

DNS Resolution translates a domain name into an IP address required to establish a connection with the server.

Example:

```text
google.com
 ↓
142.250.xx.xx
```

---

26. TCP handshake kya hota hai?

`Hinglish Explanation:`

TCP connection establish karne ke liye client aur server ke beech 3-step communication hota hai jise Three-Way Handshake kehte hain.

`Interview Answer:`

TCP uses a three-way handshake to establish a reliable connection between client and server.

Example:

```text
SYN
 ↓
SYN-ACK
 ↓
ACK
```

---

27. HTTPS connection kaise establish hoti hai?

`Hinglish Explanation:`

HTTPS TLS/SSL encryption use karta hai. Browser aur server certificate verify karke secure connection establish karte hain.

`Interview Answer:`

HTTPS establishes a secure encrypted connection using TLS/SSL certificates and a cryptographic handshake.

Example:

```text
Browser
 ↓
TLS Handshake
 ↓
Encrypted Connection
```

---

28. First Contentful Paint (FCP) kya hai?

`Hinglish Explanation:`

FCP measure karta hai ki user ko page ka pehla visible content kitni jaldi dikhai diya.

`Interview Answer:`

First Contentful Paint measures the time taken for the first piece of content to appear on the screen.

Example:

```text
Page Load
 ↓
Text/Image Appears
 = FCP
```

---

29. Largest Contentful Paint (LCP) kya hai?

`Hinglish Explanation:`

LCP page ke sabse bade visible element ke render hone ka time measure karta hai.

`Interview Answer:`

Largest Contentful Paint measures how quickly the main content of a page becomes visible.

Example:

```text
Hero Image Loaded
 ↓
LCP
```

---

30. Time to Interactive (TTI) kya hai?

`Hinglish Explanation:`

TTI batata hai ki page kab fully interactive hua aur user actions ka response dene laga.

`Interview Answer:`

Time to Interactive measures when a page becomes fully responsive to user interactions.

Example:

```text
Page Loaded
 ↓
JS Executed
 ↓
Interactive
```

---

31. Bundle size ka impact kya hai?

`Hinglish Explanation:`

Bada bundle download aur parse hone me zyada time leta hai, jiski wajah se page load slow ho sakta hai.

`Interview Answer:`

Large bundle sizes increase download, parsing, and execution time, negatively impacting performance.

Example:

```text
100KB Bundle
 ↓ Fast

5MB Bundle
 ↓ Slow
```

---

32. Tree shaking kya hai?

`Hinglish Explanation:`

Tree Shaking unused code ko final bundle se remove karta hai jisse application lightweight ban jati hai.

`Interview Answer:`

Tree Shaking eliminates unused exports from the final bundle, reducing bundle size.

Example:

```javascript
import { add } from "./utils";
```

---

33. Code splitting kya hai?

`Hinglish Explanation:`

Code Splitting bundle ko multiple chunks me divide karta hai jo demand par load hote hain.

`Interview Answer:`

Code Splitting breaks large bundles into smaller chunks that are loaded only when needed.

Example:

```javascript
import("./Dashboard");
```

---

34. Webpack kya karta hai?

`Hinglish Explanation:`

Webpack modules aur assets ko bundle, optimize aur transform karta hai deployment ke liye.

`Interview Answer:`

Webpack is a module bundler that processes, optimizes, and bundles application assets.

Example:

```javascript
module.exports = {
  entry: "./src/index.js"
};
```

---

35. DevTools ka use kaise karte ho?

`Hinglish Explanation:`

Chrome DevTools debugging, performance analysis, network monitoring aur DOM inspection ke liye use hota hai.

`Interview Answer:`

DevTools helps inspect elements, debug JavaScript, analyze performance, and monitor network requests.

Example:

```text
F12
 ↓
Elements
Network
Performance
```

---

36. Performance profiling kaise karte ho?

`Hinglish Explanation:`

Performance tab use karke slow rendering, long tasks aur bottlenecks identify kiye jate hain.

`Interview Answer:`

Performance profiling measures execution time and identifies rendering and scripting bottlenecks.

Example:

```text
DevTools
 ↓
Performance Tab
 ↓
Record
```

---

37. Memory profiling kaise karte ho?

`Hinglish Explanation:`

Memory tab se heap snapshots aur memory usage analyze karke memory leaks detect kiye jate hain.

`Interview Answer:`

Memory profiling helps identify memory leaks and analyze object allocation patterns.

Example:

```text
DevTools
 ↓
Memory Tab
 ↓
Heap Snapshot
```

---

38. Network tab kaise use karte ho?

`Hinglish Explanation:`

Network Tab requests, responses, timings aur resource sizes analyze karne ke liye use hota hai.

`Interview Answer:`

The Network Tab helps inspect HTTP requests, response times, payload sizes, and caching behavior.

Example:

```text
DevTools
 ↓
Network
 ↓
Request Details
```

---

39. Browser storage kaise kaam karta hai?

`Hinglish Explanation:`

Browser LocalStorage, SessionStorage, Cookies aur IndexedDB ke through client-side data store karta hai.

`Interview Answer:`

Browser storage mechanisms allow applications to store data locally for persistence and offline capabilities.

Example:

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

---

40. IndexedDB kya hai?

`Hinglish Explanation:`

IndexedDB browser ka built-in NoSQL database hai jo large amount of structured data store kar sakta hai.

`Interview Answer:`

IndexedDB is a client-side NoSQL database used for storing large volumes of structured data offline.

Example:

```javascript
indexedDB.open(
  "MyDatabase"
);
```


---

