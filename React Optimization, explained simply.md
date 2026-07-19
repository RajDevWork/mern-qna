# React Optimization, explained simply.

Why your components re-render, which hooks actually help, and how real teams keep a React app fast — explained with plain words and practical, everyday examples.

`🌱 No prior experience needed` `🧠 Simple language` `⚡ Real-world examples`

> **Golden Rule, before anything else:** never optimize without measuring first. Open React DevTools → Profiler and find your actual bottleneck before reaching for `memo`, `useMemo`, or anything else in this note.

## Table of Contents

**Foundations**

1. [Re-rendering](#rerender)
2. [Virtual DOM & Diffing](#vdom)
3. [Profiling First](#profiling)

**Memoization Toolkit**

4. [React.memo()](#memo)
5. [useMemo()](#usememo)
6. [useCallback()](#usecallback)
7. [Avoid Inline Functions](#inline)

**Loading & Bundling**

8. [Lazy Loading & Splitting](#lazy)
9. [Suspense & Error Boundaries](#suspense)
10. [Bundle Size](#bundle)

**Lists & Rendering**

11. [Key Prop Optimization](#keys)
12. [List Virtualization](#virtualization)

**State & Events**

13. [State Management](#state)
14. [Context API](#context)
15. [Debounce & Throttle](#debounce)

**APIs & Data**

16. [API Optimization](#api)
17. [React Query](#reactquery)

**Assets & Vitals**

18. [Image Optimization](#images)
19. [Web Vitals](#webvitals)

**Concurrent React**

20. [Transitions & Deferred](#transitions)
21. [SSR, Hydration & Concurrency](#ssr)

**Wrapping Up**

22. [JS Performance Basics](#jsperf)
23. [Component Design](#component-design)
24. [Interview Checklist](#checklist)

---

## 01. Re-rendering in React
*What actually triggers a component to run again*

> **Why We Need This**
>
> You can't fix a performance problem you don't understand. Almost every React optimization technique exists to control **when and why** a component re-renders — so this is the concept everything else in this note builds on.

A **re-render** happens whenever React runs a component's function again to check if the UI needs to change. It doesn't necessarily mean the actual webpage changes — it just means React is re-checking.

### What causes a re-render?

- State changes — `useState`, `useReducer`
- Props change
- The parent component re-renders
- Context value changes

*App.jsx*

```jsx
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
};
```

When `count` changes: `App` re-renders (expected — its own state changed), and `Child` **also** re-renders, even though nothing about `Child` actually changed. That's the exact problem most of this note is about solving.

> **Key Concept**
>
> A parent re-rendering does **not** always mean the real DOM changes. React first compares the previous and new Virtual DOM (see Section 2) and only touches the real page where something actually differs.

> **Interview tip:** "Does re-rendering always update the DOM?" — No. Re-rendering is React re-running your component function; DOM updates only happen where the diffing algorithm finds a real difference.

---

## 02. Virtual DOM & Diffing
*Why React doesn't touch the real page on every change*

> **Why We Need This**
>
> Directly updating the real browser DOM is slow — every change can trigger layout recalculation and repainting. The Virtual DOM exists so React can figure out the **minimum** set of real changes needed, instead of redrawing everything on every state update.

Think of the Virtual DOM like a rough draft. React makes all its changes on a lightweight in-memory copy of the page first, compares that draft to the previous one (this comparison is called **diffing**), and only then applies the differences to the real DOM — a process called **reconciliation**.

1. **State/props change** — React re-runs the component function.
2. **New Virtual DOM created** — A fresh lightweight in-memory tree is built.
3. **Diffing** — React compares old vs new Virtual DOM trees.
4. **Reconciliation** — Only the real, changed elements get updated on the actual page.

> This is why changing one line of text in a huge list doesn't repaint the whole list — React's diffing finds that single changed node and updates only that.

---

## 03. Profiling First
*Finding the real bottleneck before touching any code*

> **Why We Need This**
>
> Optimization techniques like `memo` and `useMemo` have their own costs (extra comparisons, extra memory). Applying them everywhere "just in case" can actually make things slower. Profiling tells you exactly where time is really being spent, so you only optimize what's worth optimizing.

React DevTools includes a **Profiler** tab. Recording a session while you interact with your app shows you exactly which components rendered, how long each took, and — critically — *why* each one re-rendered.

| Flag | Value Used | What it does |
| --- | --- | --- |
| Record | ● | Starts capturing render timings for every component during your interaction. |
| Ranked chart | — | Shows components sorted slowest-to-fastest for the recorded commit. |
| "Why did this render?" | — | Tells you exactly which prop, state, or context triggered a specific re-render. |

> A very common beginner mistake: wrapping every single component in `React.memo()` without ever profiling first. This adds comparison overhead everywhere, including on cheap components that were never actually slow.

---

## 04. React.memo()
*Skipping re-renders when props haven't actually changed*

> **Why We Need This**
>
> By default, a child re-renders every time its parent does — even if the child's own props are identical. On an expensive component (say, a chart or a large table row), that's wasted work happening dozens of times a second. `React.memo()` lets React skip re-rendering when nothing relevant has changed.

*Child.jsx*

```jsx
const Child = React.memo(function Child() {
  return <h1>Child</h1>;
});
```

React performs a **shallow comparison** of the component's props. If they're the same as last time, React skips re-running that component entirely.

### When to use it

- The component receives props
- Those props rarely change
- Rendering that component is genuinely expensive

> Do **not** use `React.memo()` everywhere. It has its own comparison cost, and if the props change on almost every render anyway (like a live typing value), memo does nothing but add overhead.

> `React.memo()` only helps if the props are actually the same object/value as before — which is exactly why it's so often paired with `useCallback` and `useMemo` (next two sections).

---

## 05. useMemo()
*Caching the result of an expensive calculation*

> **Why We Need This**
>
> Every re-render normally re-runs every line inside a component — including expensive calculations that don't actually need to happen again. `useMemo` caches a computed value and only recalculates it when its actual dependencies change.

Imagine a product list with thousands of items, and you're filtering only the "active" ones on every render:

*UserList.jsx*

```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

Without `useMemo`, this filter runs on *every single re-render* — even ones caused by something unrelated, like a modal opening. With it, the filter only re-runs when `users` actually changes.

| Flag | Value Used | What it does |
| --- | --- | --- |
| useMemo(fn, deps) | [users] | Re-runs fn only when a value in the dependency array changes; otherwise returns the cached result. |

> Avoid using `useMemo` for simple, cheap calculations like `a + b`. The memoization bookkeeping itself can cost more than just recalculating the value directly.

---

## 06. useCallback()
*Keeping a function reference stable across renders*

> **Why We Need This**
>
> In JavaScript, a new function is a completely new value every time it's created — even if the code inside looks identical. That means passing a plain function as a prop to a `React.memo()` child breaks the memoization, because the prop "changed" every render. `useCallback` fixes that by reusing the same function reference.

*Parent.jsx*

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

> **Key Concept**
>
> `useCallback` is really just `useMemo` for functions instead of values. It's most useful specifically when that function is passed down as a prop to a component wrapped in `React.memo()`.

> **Interview tip:** "Why doesn't React.memo() work even though I didn't change any props?" — Usually because an inline function or object prop is being recreated on every render. `useCallback` / `useMemo` are the fix.

---

## 07. Avoid Inline Functions & Objects
*A small habit that keeps memoization actually working*

> **Why We Need This**
>
> Writing `onClick={() => handleClick()}` silently creates a brand-new function on every single render. If that prop goes into a memoized child, it defeats the whole point of memoizing it — the child re-renders anyway.

*Before & After*

```jsx
// Avoid
<button onClick={() => handleClick()} />

// Prefer
<button onClick={handleClick} />
```

The same idea applies to inline objects and arrays passed as props — `style={{ color: 'red' }}` creates a new object every render, too. Pull it into a variable (or `useMemo` it) if it's going into a memoized child.

> This is a small habit, but it's exactly what makes `useCallback` and `React.memo()` actually pay off, instead of silently doing nothing.

---

## 08. Lazy Loading & Code Splitting
*Only download the code a user actually needs, right now*

> **Why We Need This**
>
> By default, a bundler ships your **entire** app as one giant JavaScript file — including the admin dashboard a regular visitor will never open. Lazy loading and code splitting break that bundle into chunks, downloaded only when actually needed, so the first page load is much faster.

*App.jsx*

```jsx
const About = lazy(() => import("./About"));
```

*App.jsx*

```jsx
<Suspense fallback={<h2>Loading...</h2>}>
  <About />
</Suspense>
```

### Common code-splitting approaches

- `React.lazy()` — split at the component level
- Dynamic `import()` — split at the module level
- Route-based splitting — load a whole page's code only when that route is visited

| What | Without lazy loading | With lazy loading |
| --- | --- | --- |
| Initial bundle | Everything, including unused pages | Only what the first screen needs |
| First load speed | Slower | Faster |

> Route-based splitting (one chunk per page) is usually the highest-impact, easiest place to start in a real app.

---

## 09. Suspense & Error Boundaries
*Handling "still loading" and "something broke" gracefully*

> **Why We Need This**
>
> Lazy-loaded components and async data need *something* to show while they're not ready yet — and a single broken component shouldn't be allowed to crash your entire app for every user. Suspense and Error Boundaries solve those two problems respectively.

### Suspense — showing a fallback while waiting

Used together with lazy loading and async rendering, `<Suspense>` displays a fallback UI (like a spinner) until its children are ready.

### Error Boundaries — containing crashes

A rendering error inside one component (say, a broken third-party widget) shouldn't take down your whole page. An Error Boundary catches it and shows a fallback instead.

*ErrorBoundary.jsx*

```jsx
class ErrorBoundary extends React.Component {
  // implements componentDidCatch / getDerivedStateFromError
  // renders a fallback UI instead of crashing the app
}
```

> Error Boundaries only catch errors during **rendering** — not in event handlers, async code, or server-side rendering. Those still need their own try/catch.

---

## 10. Bundle Size Optimization
*Shipping less JavaScript to the browser*

> **Why We Need This**
>
> Every kilobyte of JavaScript has to be downloaded, parsed, and executed before your app becomes interactive — especially painful on slow mobile connections. A smaller bundle means a faster app for everyone, not just users on fast Wi-Fi.

| Flag | Value Used | What it does |
| --- | --- | --- |
| Tree shaking | automatic | Removes code that's imported but never actually used. |
| Code splitting | manual/automatic | Breaks the bundle into chunks loaded only when needed. |
| Remove unused packages | manual audit | Deletes dependencies you installed but stopped using. |
| Dynamic imports | import() | Loads a module only at the moment it's actually needed. |

### Tools to help

- **Vite** — fast bundler with sensible defaults out of the box
- **Webpack Bundle Analyzer** — visualizes exactly what's taking up space in your bundle

> Before optimizing blindly, run a bundle analyzer first — it's common to discover one unused library is quietly responsible for half your bundle size.

---

## 11. Key Prop Optimization
*Helping React tell list items apart correctly*

> **Why We Need This**
>
> React uses the `key` prop to match list items between renders. Get it wrong, and React can confuse which item is which — causing subtle bugs like input fields losing focus, wrong items animating, or state attaching to the wrong row.

*Bad vs Good*

```jsx
// Bad — index changes when the list reorders
key={index}

// Good — stable, unique, tied to the actual data
key={item.id}
```

Say you have a to-do list and the user deletes item #2. With `key={index}`, every item after it shifts up one index — React thinks item #3 became item #2, and can mismatch state (like which checkbox is checked). With `key={item.id}`, each item keeps its true identity no matter how the list changes.

> Stable keys let React's diffing algorithm efficiently reuse existing DOM nodes instead of destroying and recreating them — better performance and fewer bugs, from one small prop.

---

## 12. List Rendering Optimization (Virtualization)
*Only render what's actually visible on screen*

> **Why We Need This**
>
> Rendering 10,000 rows in the DOM at once — even if only 15 are visible in the viewport — wastes memory and rendering time on rows nobody can even see. Virtualization renders only the visible rows (plus a small buffer), no matter how huge the underlying list is.

Imagine a chat app with 50,000 messages. Without virtualization, scrolling to the bottom means the browser has already built and is tracking 50,000 DOM nodes. With virtualization, it might only ever build ~20 at a time — swapping content in and out as you scroll.

### Popular libraries

- **react-window** — lightweight, minimal API
- **react-virtualized** — more features, larger bundle

> Rule of thumb: if a list can realistically grow past a few hundred items (chat logs, product catalogs, spreadsheets), virtualization is worth adding from the start.

---

## 13. State Management Optimization
*Keeping state exactly where it needs to be — no further*

> **Why We Need This**
>
> State that lives higher up the tree than it needs to causes every component below it to re-render whenever it changes — even components that don't care about that value. Keeping state local avoids re-rendering half the app for a change that only one small piece of UI actually needs.

Say a search input's typed value only affects the search dropdown — not the entire page header. If that value lives in a top-level app state, every re-render of it re-renders the header, the sidebar, everything. Move it into the search component itself, and only the dropdown re-renders.

| What | Local state | Global state (Redux Toolkit, Zustand) |
| --- | --- | --- |
| Best for | Data one component/subtree cares about | Data many unrelated components need to share |
| Re-render impact | Isolated to that subtree | Can ripple across many components if not scoped carefully |

> Simple rule: start with local state (`useState`) by default. Only lift it up or reach for global state once two or more unrelated components genuinely need to share it.

---

## 14. Context API Optimization
*Avoiding the "everything re-renders" trap*

> **Why We Need This**
>
> Every component that consumes a Context re-renders whenever that context's value changes — even if the component only cares about one small piece of it. On a large context (like a whole "app settings" object), one tiny change can re-render dozens of unrelated components.

### The problem

Say a single `AppContext` holds both `theme` and `user`. Every component reading *either* value re-renders whenever *either* value changes — even a component that only cares about the theme, when the user's name updates.

### Solution 1 — split contexts

Instead of one giant context, use separate ones: `ThemeContext` and `UserContext`. Now a user update only re-renders components subscribed to `UserContext`.

### Solution 2 — memoize the provider value

*ThemeProvider.jsx*

```jsx
const value = useMemo(() => ({ theme }), [theme]);
```

Without this, the object `{ theme }` is a brand-new object on every provider render — which forces every consumer to re-render even if `theme`'s actual value didn't change.

> Context is great for rarely-changing global data (theme, authenticated user). For anything that changes frequently (like live form input), prefer local state or a dedicated state library instead.

---

## 15. Debouncing & Throttling
*Controlling how often a function actually runs*

> **Why We Need This**
>
> Some events — typing, scrolling, resizing, mouse movement — can fire dozens of times per second. Running an expensive function (like an API call) on every single one wastes bandwidth, hammers your backend, and can even make the UI feel laggy.

### Debouncing — wait until the user stops

Debouncing delays a function until the triggering event has stopped firing for a bit. Perfect for search boxes.

```
Without debounce:
 typing "hello" → 5 API calls
With debounce:
 typing "hello" → 1 API call, after you stop typing
```

Best used for: search inputs, API requests triggered by typing, auto-save features.

### Throttling — limit how often it can run

Throttling instead guarantees a function runs **at most once** per fixed interval, no matter how many times the event fires — useful when you want steady updates, not zero updates until the user stops.

Best used for: scroll events, resize events, mouse movement tracking.

| What | Debounce | Throttle |
| --- | --- | --- |
| Runs | Once, after activity stops | At most once per interval, continuously |
| Best for | Search, auto-save | Scroll, resize, drag |

---

## 16. API Optimization
*Fetching only what you need, exactly when you need it*

> **Why We Need This**
>
> Fetching an entire dataset upfront, re-fetching data you already have, or letting outdated requests overwrite fresh ones all waste bandwidth and slow the app down. These techniques keep network usage lean and data consistent.

| Flag | Value Used | What it does |
| --- | --- | --- |
| Pagination | page / limit | Fetches data in fixed-size pages instead of everything at once. |
| Infinite scrolling | cursor-based | Loads more data automatically as the user scrolls near the bottom. |
| Request cancellation | AbortController | Cancels an in-flight request that's no longer needed (e.g. user typed something new). |
| Caching | in-memory / library | Reuses previously fetched data instead of hitting the network again. |

> Without request cancellation, a fast typist in a search box can trigger several overlapping requests — and if an older, slower request resolves *after* a newer one, it can overwrite your screen with stale results.

---

## 17. React Query Optimization
*Letting a library handle server-state caching for you*

> **Why We Need This**
>
> Manually handling loading states, caching, re-fetching, and race conditions for every API call gets repetitive and error-prone fast. React Query (TanStack Query) handles all of this consistently, so you write far less boilerplate around every fetch.

| Flag | Value Used | What it does |
| --- | --- | --- |
| Query caching | automatic | Stores fetched data by a query key so it can be reused instantly. |
| staleTime | ms | How long cached data is considered fresh before React Query considers refetching it. |
| gcTime | ms (formerly cacheTime) | How long unused cached data stays in memory before being garbage collected. |
| Prefetching | queryClient.prefetchQuery | Loads data before the user even navigates to the page that needs it. |
| Optimistic updates | onMutate | Updates the UI immediately, before the server confirms, for a snappier feel. |
| Background refetching | automatic | Silently refreshes stale data behind the scenes without blocking the UI. |

> Think of `staleTime` as "how long can I trust this data without asking again," and `gcTime` as "how long do I keep it around in memory just in case it's needed again soon."

---

## 18. Image Optimization
*Usually the single biggest thing slowing a page down*

> **Why We Need This**
>
> Images are very often the heaviest assets on a page — far bigger than your JavaScript bundle. Optimizing them tends to give the biggest, fastest win for perceived page speed of anything in this note.

| Flag | Value Used | What it does |
| --- | --- | --- |
| Lazy loading | loading="lazy" | Delays loading off-screen images until the user scrolls near them. |
| Modern formats | WebP / AVIF | Same visual quality at a fraction of the file size of JPEG/PNG. |
| Compression | tooling | Reduces file size before the image ever ships. |
| Responsive images | srcset | Serves a smaller image to smaller screens instead of one giant image everywhere. |

*HTML*

```jsx
<img loading="lazy" />
```

---

## 19. Web Performance Basics (Core Web Vitals)
*The metrics that actually measure "does this feel fast"*

> **Why We Need This**
>
> "It feels fast to me" isn't measurable or comparable. Core Web Vitals give every team a shared, objective way to measure real user experience — and they directly affect Google search ranking too.

| Flag | Value Used | What it does |
| --- | --- | --- |
| FCP | First Contentful Paint | Time until the first bit of content appears on screen. |
| LCP | Largest Contentful Paint | Time until the largest visible element (often a hero image) finishes loading. |
| CLS | Cumulative Layout Shift | Measures how much content unexpectedly jumps around while loading. |
| INP | Interaction to Next Paint | How quickly the page responds after a user click or tap. |

Run a **Lighthouse** audit (built into Chrome DevTools) to get a single score plus a breakdown of exactly which of these metrics needs work.

> A common CLS culprit: images without a set width/height, which cause the page to "jump" once the image finishes loading and pushes content down.

---

## 20. useTransition() & useDeferredValue()
*Keeping typing and clicking responsive during heavy updates*

> **Why We Need This**
>
> Some UI updates are urgent (a keystroke appearing instantly) and some aren't (re-filtering 10,000 rows after that keystroke). Without a way to tell React which is which, a heavy update can block the input from feeling instant. These two hooks let you mark certain updates as "can wait a moment."

### useTransition — marking an update as non-urgent

*SearchResults.jsx*

```jsx
const [isPending, startTransition] = useTransition();
```

Wrap the expensive state update (like setting filtered results) in `startTransition`. React keeps the input itself instantly responsive, and shows the heavy update slightly after — `isPending` lets you show a subtle loading indicator meanwhile.

### useDeferredValue — deferring a value instead of an update

Similar goal, different API: instead of wrapping the state update, you get a "lagging behind" version of a value that updates a little later than the real one — handy for large filtered lists tied directly to a live search input.

Useful for: large search results, heavy filtering, anything expensive triggered directly by fast typing.

> Both are part of React's **Concurrent Rendering** features — covered next — which let React pause, interrupt, and resume rendering work instead of blocking everything until it's done.

---

## 21. SSR, Hydration & Concurrent Rendering
*Rendering on the server, then bringing it to life in the browser*

> **Why We Need This**
>
> A pure client-side React app ships a blank page first and builds the UI in the browser — slower first paint, and worse for search engines that don't wait around for JavaScript. Server-Side Rendering sends fully-formed HTML immediately, solving both problems.

### Server-Side Rendering (SSR)

Commonly implemented using **Next.js**. The server renders your React components into HTML and sends that directly to the browser.

- Better SEO — search engines see real content immediately
- Faster first paint — the user sees something before JS even finishes loading
- Improved initial load performance overall

### Hydration

**Hydration** is the step where React attaches its event handlers (onClick, onChange, etc.) to the HTML that the server already sent — turning static-looking markup into a fully interactive React app.

### Concurrent Rendering

React's modern rendering model, which enables:

- **Interruptible rendering** — React can pause a render to handle something more urgent, then resume
- **Transitions** — the mechanism behind `useTransition` from the previous section
- **Better responsiveness** overall, especially under heavy update load

> **Key Concept**
>
> SSR gets you fast **first content**. Hydration is what makes that content **interactive**. Concurrent rendering is what keeps the app **responsive** even while doing heavy work. Three different problems, three different solutions.

---

## 22. JavaScript Performance Basics
*The engine concepts underneath every React optimization*

> **Why We Need This**
>
> React runs on top of plain JavaScript — memoization, debouncing, async data fetching, and even re-rendering itself all ultimately depend on how the JS engine schedules work. Understanding these fundamentals makes every React-specific technique make more sense.

| Flag | Value Used | What it does |
| --- | --- | --- |
| Event Loop | — | Manages the order in which synchronous code, microtasks, and macrotasks run. |
| Call Stack | — | Tracks which function is currently running and what called it. |
| Closures | — | A function remembering variables from where it was created — the basis of hooks like useState. |
| Microtasks | Promises | Run immediately after the current task, before the next macrotask. |
| Macrotasks | setTimeout, events | Run after all pending microtasks have finished. |

> This is why a `setTimeout(fn, 0)` doesn't run instantly — it still has to wait for the call stack to clear and any pending microtasks (like Promises) to finish first.

---

## 23. Component Design Optimization
*Structuring components so performance problems don't start in the first place*

> **Why We Need This**
>
> A lot of "performance problems" are really just component design problems — one giant component holding state that only a small part of it needs, forcing everything to re-render together. Good structure prevents the problem before you ever need a hook to fix it.

- **Reusable components** — smaller, focused pieces are easier to memoize and reason about
- **Separation of concerns** — keep data-fetching, layout, and presentation logic separate
- **Lift state only when necessary** — don't move state up "just in case," only when two components truly need to share it
- **Avoid unnecessary prop drilling** — passing props through five layers that don't use them themselves adds coupling and re-render surface area

> If you find yourself reaching for `React.memo()` everywhere just to survive a component's size, that's often a sign the component itself should be split up.

---

## 24. Interview Checklist & Final Takeaways
*A quick map of everything in this note, by difficulty level*

> **Why We Need This**
>
> Knowing individual techniques is one thing — being able to explain them clearly and in the right order, under interview pressure, is another. This checklist maps everything you've learned onto the levels interviewers usually expect.

| Level | Topics |
| --- | --- |
| Beginner | Re-rendering, Virtual DOM, React.memo() |
| Intermediate | useMemo(), useCallback(), Debouncing, Lazy Loading |
| Advanced | Suspense, Concurrent Rendering, SSR, Hydration, Virtualization, React Query |

### Final takeaways

- Understand *why* a component re-renders before trying to optimize it.
- Always measure with the Profiler first — don't guess.
- Use memoization only when it gives a measurable benefit, not by default.
- Optimize bundle size and API requests — often bigger wins than micro-optimizing components.
- Build reusable, well-separated components — good structure prevents problems early.
- Prefer readability over premature optimization.

---

Sheryians Coding School · React Optimization Notes · Measure first, optimize second ⚡