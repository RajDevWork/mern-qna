[⬅ Back to Index](./README.md)

## ⚡ Performance Optimization (91-120)


91. Frontend performance kya hoti hai?

`Hinglish Explanation:`

Frontend Performance ka matlab hai webpage kitni fast load hoti hai, render hoti hai aur user interactions ka response kitni jaldi deti hai. Goal user experience ko smooth banana hota hai.

`Interview Answer:`

Frontend performance measures how quickly a web application loads, renders, and responds to user interactions.

Example:

```text
Fast Load
+
Fast Render
+
Fast Interaction
```

---

92. Page load time kaise improve karte ho?

`Hinglish Explanation:`

Images optimize karo, unnecessary JavaScript remove karo, code splitting use karo aur caching enable karo.

`Interview Answer:`

Page load time can be improved through asset optimization, caching, lazy loading, and reducing JavaScript bundle size.

Example:

```text
Compress Assets
 ↓
Lazy Load
 ↓
Cache Resources
```

---

93. Critical CSS kya hota hai?

`Hinglish Explanation:`

Critical CSS wo CSS hoti hai jo page ke above-the-fold content ko render karne ke liye immediately required hoti hai.

`Interview Answer:`

Critical CSS contains the styles required to render visible content quickly during initial page load.

Example:

```html
<style>
  .header {
    color: blue;
  }
</style>
```

---

94. Render blocking resources kya hote hain?

`Hinglish Explanation:`

Aise resources jo page render hone se pehle load hona zaroori hote hain, unhe render-blocking resources kehte hain.

`Interview Answer:`

Render-blocking resources delay page rendering until they are downloaded and processed.

Example:

```html
<link
  rel="stylesheet"
  href="style.css"
/>
```

---

95. Lazy loading images kaise karte ho?

`Hinglish Explanation:`

Images ko tab load karte hain jab wo viewport ke paas aati hain. Isse initial page load fast ho jata hai.

`Interview Answer:`

Lazy loading delays image loading until the image is needed or enters the viewport.

Example:

```html
<img
  src="image.jpg"
  loading="lazy"
/>
```

---

96. Image optimization kaise karte ho?

`Hinglish Explanation:`

Images compress karo, proper dimensions use karo aur WebP jaise modern formats prefer karo.

`Interview Answer:`

Image optimization includes compression, responsive sizing, modern formats, and lazy loading.

Example:

```html
<img
  src="image.webp"
  width="400"
/>
```

---

97. WebP kya hota hai?

`Hinglish Explanation:`

WebP ek modern image format hai jo JPEG aur PNG ke comparison me better compression provide karta hai.

`Interview Answer:`

WebP is a modern image format that delivers smaller file sizes while maintaining image quality.

Example:

```html
<img src="banner.webp" />
```

---

98. CDN ka use kaise karte ho?

`Hinglish Explanation:`

CDN content ko geographically nearest server se serve karta hai jisse latency aur load time reduce hota hai.

`Interview Answer:`

A CDN distributes content across multiple servers and delivers resources from the closest location to users.

Example:

```text
User
 ↓
Nearest CDN Server
 ↓
Content
```

---

99. Bundle size kaise reduce karte ho?

`Hinglish Explanation:`

Unused code remove karo, tree shaking use karo, code splitting karo aur heavy libraries avoid karo.

`Interview Answer:`

Bundle size can be reduced through tree shaking, code splitting, lazy loading, and dependency optimization.

Example:

```javascript
import("./Dashboard");
```

---

100. Tree shaking kaise kaam karta hai?

`Hinglish Explanation:`

Build tools unused exports ko identify karke final bundle se remove kar dete hain.

`Interview Answer:`

Tree shaking removes unused code from the final bundle during the build process.

Example:

```javascript
import { add } from "./utils";
```

---

101. Code splitting kaise implement karte ho?

`Hinglish Explanation:`

Application ko multiple chunks me divide kiya jata hai jo demand par load hote hain.

`Interview Answer:`

Code splitting breaks applications into smaller bundles that are loaded only when required.

Example:

```javascript
const Dashboard =
  React.lazy(() =>
    import("./Dashboard")
  );
```

---

102. Caching strategies kya hoti hain?

`Hinglish Explanation:`

Common strategies me Cache First, Network First aur Stale While Revalidate include hote hain.

`Interview Answer:`

Caching strategies define how applications fetch and store resources to balance speed and freshness.

Example:

```text
Cache First
Network First
Stale While Revalidate
```

---

103. Browser cache vs server cache?

`Hinglish Explanation:`

Browser cache client side par store hoti hai, jabki server cache backend par frequently used data store karti hai.

`Interview Answer:`

Browser cache stores resources on the client, while server cache stores data on the server to reduce processing time.

Example:

```text
Browser Cache
 ↓ Client

Redis Cache
 ↓ Server
```

---

104. Service worker caching kya hai?

`Hinglish Explanation:`

Service Worker network requests intercept karta hai aur resources cache se serve kar sakta hai.

`Interview Answer:`

Service Worker caching enables offline support and faster resource delivery through client-side caching.

Example:

```javascript
self.addEventListener(
  "fetch",
  event => {}
);
```

---

105. Reflow reduce kaise karte ho?

`Hinglish Explanation:`

DOM changes batch karo, unnecessary layout calculations avoid karo aur frequent style updates minimize karo.

`Interview Answer:`

Reflow can be reduced by minimizing DOM updates, batching changes, and avoiding unnecessary layout recalculations.

Example:

```javascript
const fragment =
  document.createDocumentFragment();
```

106. DOM manipulation optimize kaise karte ho?

`Hinglish Explanation:`

Frequent DOM updates expensive hote hain. Multiple changes ko batch karo, DocumentFragment use karo aur unnecessary re-renders avoid karo.

`Interview Answer:`

DOM manipulation can be optimized by minimizing direct updates, batching changes, and reducing reflows and repaints.

Example:

```javascript
const fragment =
  document.createDocumentFragment();

fragment.appendChild(item);
```

---

107. Debounce ka use performance mein kaise hota hai?

`Hinglish Explanation:`

Debounce rapid events (search input, resize) ko control karta hai aur event execution ko delay karta hai jab tak user interaction stop na ho.

`Interview Answer:`

Debouncing limits function execution until a specified delay has passed since the last event.

Example:

```javascript
const debouncedSearch =
  debounce(search, 300);
```

---

108. Throttle ka use kaise hota hai?

`Hinglish Explanation:`

Throttle ensure karta hai ki function fixed interval me hi execute ho. Scroll aur resize events me commonly use hota hai.

`Interview Answer:`

Throttling limits the execution rate of a function to a fixed interval.

Example:

```javascript
const throttledScroll =
  throttle(handleScroll, 200);
```

---

109. Virtualization kya hota hai?

`Hinglish Explanation:`

Large lists me sirf visible items render kiye jate hain aur baaki items dynamically load hote hain.

`Interview Answer:`

Virtualization improves performance by rendering only visible items instead of the entire dataset.

Example:

```text
10000 Items
 ↓
Render Only 20 Visible
```

---

110. Infinite scroll kaise implement karte ho?

`Hinglish Explanation:`

Jab user page ke bottom ke paas pahunchta hai tab next data batch automatically fetch kiya jata hai.

`Interview Answer:`

Infinite scrolling loads additional content dynamically as users approach the end of the current content.

Example:

```javascript
window.addEventListener(
  "scroll",
  loadMoreData
);
```

---

111. Lighthouse score kaise improve karte ho?

`Hinglish Explanation:`

Images optimize karo, bundle size reduce karo, caching enable karo aur Core Web Vitals improve karo.

`Interview Answer:`

Lighthouse scores improve through performance optimization, accessibility improvements, SEO enhancements, and best practices.

Example:

```text
Optimize Images
+
Code Splitting
+
Caching
```

---

112. FCP improve kaise karte ho?

`Hinglish Explanation:`

Critical CSS inline karo, render-blocking resources reduce karo aur server response fast rakho.

`Interview Answer:`

FCP can be improved by reducing render-blocking resources and prioritizing critical content.

Example:

```html
<link
  rel="preload"
  href="style.css"
/>
```

---

113. LCP improve kaise karte ho?

`Hinglish Explanation:`

Hero image optimize karo, CDN use karo aur critical resources ko preload karo.

`Interview Answer:`

LCP improves by optimizing large content elements, reducing server latency, and prioritizing critical assets.

Example:

```html
<link
  rel="preload"
  href="hero.webp"
/>
```

---

114. TTI improve kaise karte ho?

`Hinglish Explanation:`

Heavy JavaScript reduce karo, code splitting use karo aur unnecessary third-party scripts avoid karo.

`Interview Answer:`

TTI improves by reducing JavaScript execution time and minimizing long-running tasks.

Example:

```javascript
React.lazy(() =>
  import("./Dashboard")
);
```

---

115. Memory leaks kaise avoid karte ho?

`Hinglish Explanation:`

Unused event listeners remove karo, timers clear karo aur unnecessary references release karo.

`Interview Answer:`

Memory leaks can be avoided by cleaning up resources, removing listeners, and preventing unnecessary object retention.

Example:

```javascript
clearInterval(timer);

removeEventListener(
  "click",
  handler
);
```

---

116. CPU usage kaise optimize karte ho?

`Hinglish Explanation:`

Heavy calculations optimize karo, unnecessary re-renders avoid karo aur expensive tasks background me move karo.

`Interview Answer:`

CPU usage can be optimized by reducing expensive computations and avoiding unnecessary rendering work.

Example:

```javascript
useMemo(
  () => expensiveTask(),
  []
);
```

---

117. Web workers ka use kab karte ho?

`Hinglish Explanation:`

Heavy computations, image processing ya data parsing jaise tasks ke liye Web Workers use kiye jate hain taaki UI block na ho.

`Interview Answer:`

Web Workers are used for CPU-intensive operations that should run without blocking the main thread.

Example:

```javascript
const worker =
  new Worker("worker.js");
```

---

118. Preload resources ka use kaise karte ho?

`Hinglish Explanation:`

Preload important resources ko early fetch karta hai jinki current page ko immediately zarurat hoti hai.

`Interview Answer:`

Preload prioritizes critical resources required for the current page rendering.

Example:

```html
<link
  rel="preload"
  href="font.woff2"
  as="font"
/>
```

---

119. Prefetch ka use kab karte ho?

`Hinglish Explanation:`

Prefetch future navigation ke resources ko background me load karta hai jisse next page fast open hota hai.

`Interview Answer:`

Prefetch loads resources likely to be needed in future navigations during browser idle time.

Example:

```html
<link
  rel="prefetch"
  href="/dashboard.js"
/>
```

---

120. Performance monitoring tools kaunse hain?

`Hinglish Explanation:`

Performance monitor karne ke liye Lighthouse, Chrome DevTools, WebPageTest, New Relic aur Datadog jaise tools use hote hain.

`Interview Answer:`

Popular performance monitoring tools include Lighthouse, Chrome DevTools, WebPageTest, New Relic, and Datadog.

Example:

```text
Lighthouse
Chrome DevTools
WebPageTest
New Relic
```


---

