[⬅ Back to Index](./README.md)

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


### Hinglish Explanation:

**Execution Context** wo environment hota hai jahan PHP code execute hota hai. Is context me PHP variable values, functions, classes aur current execution state ko manage karta hai. Jab bhi koi PHP script ya function execute hoti hai, PHP uske liye ek execution context create karta hai.

### Interview Answer:

An **execution context** is the environment in which PHP code is executed. It contains information about variables, functions, objects, and the current execution state required to run the code.

**Example:**

```php
<?php

$name = "Rahul";

function greet()
{
    $message = "Hello!";
    echo $message;
}

greet();
```

**Explanation:**

* The script starts with the **Global Execution Context**, where `$name` is stored.
* When `greet()` is called, PHP creates a **Function Execution Context**.
* Inside this context, `$message` exists only during the function execution.
* After the function finishes, its execution context is destroyed, and control returns to the global context.

---

## Types of Execution Context

### 1. Global Execution Context

**Hinglish Explanation:**

Jab PHP script start hoti hai, sabse pehle Global Execution Context create hota hai. Global variables aur functions isi context me register hote hain.

**Interview Answer:**

The Global Execution Context is created when a PHP script starts. It manages global variables, functions, and the overall script execution.

---

### 2. Function Execution Context

**Hinglish Explanation:**

Har baar jab koi function call hota hai, PHP us function ke liye alag execution context banata hai. Function ke local variables sirf isi context me available hote hain.

**Interview Answer:**

A Function Execution Context is created whenever a function is invoked. It stores the function's local variables, parameters, and execution state.

**Example:**

```php
<?php

function add($a, $b)
{
    return $a + $b;
}

echo add(10, 20);
```

---

## Difference Summary

| Context                    | Purpose                                                          |
| -------------------------- | ---------------------------------------------------------------- |
| Global Execution Context   | Created once when the script starts and manages global scope.    |
| Function Execution Context | Created every time a function is called and manages local scope. |

> **Interview Tip:** PHP creates a **Global Execution Context** when the script starts and a **Function Execution Context** for every function call. Each function gets its own local scope, which is destroyed after the function completes execution.

- Difference between call, apply, bind

### Hinglish Explanation:

`call()`, `apply()`, aur `bind()` JavaScript me kisi function ka `this` context change karne ke liye use hote hain.

* **`call()`** function ko **immediately** execute karta hai aur arguments **comma-separated** pass hote hain.
* **`apply()`** function ko **immediately** execute karta hai, lekin arguments **array** ke form me pass hote hain.
* **`bind()`** function ko **immediately execute nahi karta**. Ye ek **naya function return** karta hai jise baad me call kiya ja sakta hai.

---

### Interview Answer:

* **`call()`** invokes a function immediately with a specified `this` value and individual arguments.
* **`apply()`** invokes a function immediately with a specified `this` value and arguments passed as an array.
* **`bind()`** returns a new function with the specified `this` value without executing it immediately.

---

## `call()` Example

```javascript
const person = {
  name: "Rahul"
};

function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

greet.call(person, "Delhi", "India");
```

**Output:**

```text
Hi, I'm Rahul from Delhi, India
```

---

## `apply()` Example

```javascript
const person = {
  name: "Rahul"
};

function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

greet.apply(person, ["Delhi", "India"]);
```

**Output:**

```text
Hi, I'm Rahul from Delhi, India
```

---

## `bind()` Example

```javascript
const person = {
  name: "Rahul"
};

function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

const greetUser = greet.bind(person, "Delhi", "India");

greetUser();
```

**Output:**

```text
Hi, I'm Rahul from Delhi, India
```

---

## Difference Summary

| Feature              | `call()`                | `apply()`                           | `bind()`                                     |
| -------------------- | ----------------------- | ----------------------------------- | -------------------------------------------- |
| Executes Immediately | ✅ Yes                   | ✅ Yes                               | ❌ No                                         |
| Returns New Function | ❌ No                    | ❌ No                                | ✅ Yes                                        |
| Arguments            | Comma-separated         | Array                               | Comma-separated (can be preset)              |
| Changes `this`       | ✅ Yes                   | ✅ Yes                               | ✅ Yes                                        |
| Common Use Case      | Immediate function call | Immediate call with array arguments | Event handlers, callbacks, delayed execution |

### Interview Tip

* Use **`call()`** when arguments are known individually.
* Use **`apply()`** when arguments are already available as an array.
* Use **`bind()`** when you need to preserve the `this` context and execute the function later (e.g., event listeners, callbacks, timers).


- Pollyfills

### Hinglish Explanation:

**Polyfill** ek JavaScript code ya library hoti hai jo **new JavaScript features ko old browsers me support** karne ke liye use ki jati hai. Agar kisi browser me koi modern feature available nahi hai, to polyfill us feature ka alternative implementation provide karti hai.

Example ke liye, agar kisi old browser me `Array.prototype.includes()` support nahi karta, to hum uska polyfill likh sakte hain.

---

### Interview Answer:

A **polyfill** is a piece of JavaScript code that provides modern functionality on older browsers that do not natively support that feature. It ensures backward compatibility by implementing missing APIs.

---

## Example: `Array.prototype.includes()` Polyfill

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}

const numbers = [10, 20, 30];

console.log(numbers.includes(20)); // true
console.log(numbers.includes(40)); // false
```

---

## Example: `String.prototype.startsWith()` Polyfill

```javascript
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString) {
    return this.indexOf(searchString) === 0;
  };
}

console.log("JavaScript".startsWith("Java")); // true
```

---

## Why are Polyfills Needed?

### Hinglish Explanation:

Polyfills use kiye jate hain taaki **modern JavaScript features purane browsers me bhi kaam karein**. Isse application cross-browser compatible ban jati hai.

### Interview Answer:

Polyfills are used to provide backward compatibility by enabling modern JavaScript features in browsers that do not support them natively.

---

## Difference: Polyfill vs Transpiler

| Feature  | Polyfill                    | Transpiler                             |
| -------- | --------------------------- | -------------------------------------- |
| Purpose  | Adds missing APIs/features  | Converts modern syntax to older syntax |
| Works On | Browser runtime             | Build time                             |
| Example  | `core-js`, custom polyfills | Babel, TypeScript                      |
| Use Case | Missing browser APIs        | Unsupported JavaScript syntax          |

---

## Common Polyfill Libraries

* **core-js** – Provides polyfills for modern JavaScript features.
* **regenerator-runtime** – Adds support for `async/await` and generators in older browsers.
* **whatwg-fetch** – Polyfill for the Fetch API.

---

### Interview Tip

* **Polyfill** = Adds missing browser features (runtime support).
* **Transpiler (Babel)** = Converts modern JavaScript syntax into older JavaScript (build-time support).

> **Example:** Babel can convert arrow functions (`=>`) into ES5 syntax, but it **cannot add missing APIs like `Promise` or `Array.prototype.includes()`**. For those, you need a **polyfill** (e.g., `core-js`).


- Function currying
- Closures with many follow-up questions
- Event loop and its architecture
- Output based questions to check understanding of promise and this keyword

### ⚛️ React Tricky (11-18)
11. `useEffect` infinite loop kab aur kyun hota hai?

### Hinglish Explanation:

`useEffect` me **infinite loop** tab hota hai jab effect ke andar state update hoti hai aur us state update ki wajah se component dobara render hota hai. Agar `useEffect` har render par fir se execute ho raha hai, to ye process baar-baar repeat hoti rehti hai.

Sabse common reason:

* Dependency array na dena.
* Dependency array me aisi value dena jo har render me change ho (jaise object, array, function).
* Effect ke andar usi state ko update karna jo dependency me hai.

---

### Interview Answer:

An infinite loop in `useEffect` occurs when the effect continuously triggers a state update, causing the component to re-render, which runs the effect again. This usually happens due to missing or incorrect dependencies.

---

## Example 1: No Dependency Array ❌

```jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });

  return <h1>{count}</h1>;
}
```

**Why?**

* Component renders.
* `useEffect` runs.
* `setCount()` updates state.
* Component re-renders.
* `useEffect` runs again.
* This continues forever.

---

## Example 2: State in Dependency Array ❌

```jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <h1>{count}</h1>;
}
```

**Why?**

`count` changes → `useEffect` runs → `setCount()` changes `count` again → effect runs again → infinite loop.

---

## Example 3: Correct Usage ✅

```jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return <h1>{count}</h1>;
}
```

**Why?**

The empty dependency array (`[]`) ensures the effect runs **only once** after the initial render.

---

## Example 4: Function Dependency ❌

```jsx
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    increment();
  }, [increment]);
}
```

**Why?**

`increment` is recreated on every render, so React treats it as a new dependency each time, causing the effect to run repeatedly.

**Solution:**

```jsx
const increment = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

---

## Common Causes of Infinite Loop

| Cause                                          | Result                         |
| ---------------------------------------------- | ------------------------------ |
| No dependency array                            | Effect runs after every render |
| Updating dependency inside effect              | Continuous re-render           |
| Object/Array dependency recreated every render | Effect runs every render       |
| Function dependency without `useCallback`      | Effect runs every render       |

---

## How to Prevent Infinite Loops

* ✅ Use an empty dependency array (`[]`) if the effect should run only once.
* ✅ Include only the required dependencies.
* ✅ Memoize functions using `useCallback()`.
* ✅ Memoize objects/arrays using `useMemo()`.
* ✅ Avoid updating a state inside an effect if that same state is the trigger for the effect, unless you have a condition to stop the updates.

---

### Interview Tip

A `useEffect` infinite loop happens when the effect keeps causing a state change that triggers the effect again. The most common reasons are **missing dependency arrays**, **updating dependent state inside the effect**, or **unstable dependencies like newly created functions, objects, or arrays**.



12. `useState` async kyun lagta hai?

### Hinglish Explanation:

`useState` **actually asynchronous nahi hota**, lekin **React state updates ko schedule aur batch** karta hai. Isliye `setState()` call karne ke turant baad state ki updated value nahi milti, aur hume lagta hai ki `useState` async hai.

React performance improve karne ke liye multiple state updates ko ek saath process karta hai aur next render me updated state deta hai.

---

### Interview Answer:

`useState` appears asynchronous because React schedules and batches state updates instead of updating the state immediately. The new state value becomes available during the next render, not immediately after calling the setter function.

---

## Example 1: State Doesn't Update Immediately

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(1);

    console.log(count);
  };

  return <button onClick={handleClick}>Click</button>;
}
```

**Output:**

```text
0
```

**Why?**

* `setCount(1)` schedules a state update.
* `console.log(count)` still reads the current render's value (`0`).
* React updates the state and re-renders afterward.

---

## Example 2: Updated Value After Re-render

```jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <button onClick={() => setCount(1)}>
      Click
    </button>
  );
}
```

**Output (after click):**

```text
1
```

**Why?**

`useEffect` runs after React has completed the render with the updated state.

---

## Example 3: Multiple Updates

```jsx
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
};
```

If `count` is `0`, the result is:

```text
1
```

**Why?**

Both updates use the same current value (`0`), so both request `1`.

---

## Correct Way (Functional Update)

```jsx
const handleClick = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};
```

**Output:**

```text
2
```

**Why?**

Each update receives the latest state value (`prev`), so both increments are applied.

---

## Why Does React Batch Updates?

### Hinglish Explanation:

React multiple state updates ko ek saath process karta hai taaki unnecessary re-renders na hon aur application fast chale.

### Interview Answer:

React batches state updates to improve performance by reducing unnecessary re-renders and processing multiple updates together.

---

## Difference Summary

| Concept                   | Explanation                  |
| ------------------------- | ---------------------------- |
| `setState()`              | Schedules a state update     |
| Immediate `console.log()` | Shows the old state          |
| Updated State             | Available in the next render |
| Functional Update         | Uses the latest state value  |

---

### Interview Tip

`useState` is **not truly asynchronous**. It **appears asynchronous** because React **schedules and batches state updates**, making the updated state available only on the next render. Use the **functional update form** (`setState(prev => ...)`) when the next state depends on the previous state.



13. `useMemo` aur `useCallback` galat use karne se performance worse kaise hoti hai?
### Hinglish Explanation:

`useMemo` aur `useCallback` ka purpose **performance optimize** karna hai, lekin agar inhe har jagah unnecessarily use kiya jaye, to performance **aur kharab** ho sakti hai.

Reason ye hai ki React ko har render par memoized value/function aur dependency array ko compare karna padta hai. Agar calculation simple hai ya function lightweight hai, to memoization ka overhead uske benefit se zyada ho sakta hai.

---

### Interview Answer:

`useMemo` and `useCallback` should be used only when memoization provides a measurable performance benefit. Overusing them adds unnecessary memory usage and dependency comparison overhead, which can degrade performance instead of improving it.

---

## Example 1: Unnecessary `useMemo` ❌

```jsx
function App() {
  const count = 10;

  const doubled = useMemo(() => count * 2, [count]);

  return <h1>{doubled}</h1>;
}
```

### Why is this bad?

* `count * 2` is a very cheap calculation.
* `useMemo` itself has an overhead.
* Without `useMemo`, React can calculate it instantly.

**Better:**

```jsx
function App() {
  const count = 10;

  const doubled = count * 2;

  return <h1>{doubled}</h1>;
}
```

---

## Example 2: Unnecessary `useCallback` ❌

```jsx
function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <button onClick={handleClick}>Click</button>;
}
```

### Why is this bad?

* `handleClick` is simple.
* It's not passed to a memoized child component.
* `useCallback` adds unnecessary dependency tracking.

**Better:**

```jsx
function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}
```

---

## Good Use Case for `useMemo` ✅

```jsx
const sortedUsers = useMemo(() => {
  return users.sort((a, b) => a.age - b.age);
}, [users]);
```

### Why?

Sorting a large array is expensive, so memoizing avoids repeating the work unless `users` changes.

---

## Good Use Case for `useCallback` ✅

```jsx
const handleDelete = useCallback((id) => {
  deleteUser(id);
}, []);

return <UserList onDelete={handleDelete} />;
```

### Why?

If `UserList` is wrapped with `React.memo`, a stable function reference helps prevent unnecessary re-renders.

---

## Common Mistakes

| Mistake                                  | Why It's Bad                                           |
| ---------------------------------------- | ------------------------------------------------------ |
| Wrapping every calculation in `useMemo`  | Adds memoization overhead for cheap operations         |
| Wrapping every function in `useCallback` | Adds dependency tracking without real benefit          |
| Memoizing values that rarely change      | Little or no performance gain                          |
| Incorrect dependency arrays              | Can lead to stale values or unnecessary recalculations |

---

## When to Use `useMemo`

* ✅ Expensive calculations (sorting, filtering, large computations)
* ✅ Derived values that are costly to recompute
* ❌ Simple arithmetic or string concatenation

---

## When to Use `useCallback`

* ✅ Functions passed to `React.memo` components
* ✅ Functions used as dependencies in hooks like `useEffect`
* ❌ Event handlers used only within the same component

---

## Difference Summary

| Hook          | Purpose                       | Use When                            |
| ------------- | ----------------------------- | ----------------------------------- |
| `useMemo`     | Memoizes a computed value     | Computation is expensive            |
| `useCallback` | Memoizes a function reference | Stable function reference is needed |

---

### Interview Tip

`useMemo` and `useCallback` are **optimization tools, not default best practices**. Use them only after identifying a real performance issue. Memoization itself has a cost (dependency comparison and memory usage), so applying it to inexpensive computations or functions can make performance worse instead of better.



14. React.memo kab kaam nahi karta?

### Hinglish Explanation:

`React.memo` ek component ko **unnecessary re-render** hone se rokta hai, lekin ye **sirf props ka shallow comparison** karta hai.

Agar har render me **new object, new array, ya new function** pass ho rahi ho, ya component **context** ya **apni state** use kar raha ho, to `React.memo` kaam nahi karega aur component fir bhi re-render hoga.

---

### Interview Answer:

`React.memo` skips re-rendering only when the component's props remain the same according to a **shallow comparison**. It does not prevent re-renders caused by changing object/function references, context updates, or the component's own state changes.

---

## Example 1: New Object Prop ❌

```jsx
const Child = React.memo(({ user }) => {
  console.log("Child Rendered");
  return <h1>{user.name}</h1>;
});

function App() {
  return <Child user={{ name: "Rahul" }} />;
}
```

### Why?

Every render creates a **new object reference**.

```javascript
{ name: "Rahul" } !== { name: "Rahul" }
```

So `React.memo` thinks the prop changed.

---

## Example 2: New Function Prop ❌

```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```

### Why?

`handleClick` is recreated on every render, so its reference changes.

**Solution:**

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

## Example 3: Context Changes ❌

```jsx
const ThemeContext = React.createContext();

const Child = React.memo(() => {
  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
});
```

### Why?

When the context value changes, React re-renders all consumers, even if they're wrapped with `React.memo`.

---

## Example 4: Internal State Changes ❌

```jsx
const Counter = React.memo(() => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
});
```

### Why?

`React.memo` only compares **props**. If the component updates its own state, it will always re-render.

---

## Example 5: New Array Prop ❌

```jsx
const Child = React.memo(({ items }) => {
  return <div>{items.length}</div>;
});

function App() {
  return <Child items={[1, 2, 3]} />;
}
```

### Why?

A new array is created every render.

**Solution:**

```jsx
const items = useMemo(() => [1, 2, 3], []);
```

---

## Common Cases Where `React.memo` Doesn't Help

| Scenario                      | Reason                          |
| ----------------------------- | ------------------------------- |
| New object prop               | Reference changes               |
| New array prop                | Reference changes               |
| New function prop             | Reference changes               |
| Context value changes         | Context consumers always update |
| Component's own state changes | State updates trigger re-render |
| Parent passes changing props  | Props actually changed          |

---

## When Does `React.memo` Work Best?

* ✅ Component receives primitive props (`string`, `number`, `boolean`)
* ✅ Props have stable references (`useMemo`, `useCallback`)
* ✅ Component is expensive to render
* ✅ Parent re-renders frequently but props stay the same

---

## Difference Summary

| Scenario                            | `React.memo` Prevents Re-render? |
| ----------------------------------- | -------------------------------- |
| Same primitive props                | ✅ Yes                            |
| New object/array/function reference | ❌ No                             |
| Context update                      | ❌ No                             |
| Component state update              | ❌ No                             |
| Actual prop value changes           | ❌ No                             |

---

### Interview Tip

`React.memo` performs a **shallow comparison of props**. It **does not** prevent re-renders caused by:

* New object, array, or function references.
* Context updates.
* The component's own state updates.

To get the full benefit of `React.memo`, pass **stable props** using `useMemo` and `useCallback` where appropriate.



15. Keys wrong use karne se bug kaise aata hai?

### Hinglish Explanation:

React me **`key`** list items ko uniquely identify karne ke liye use hoti hai. Agar **wrong key** (jaise array index) use karte ho, to React list update karte waqt galat item ko reuse kar sakta hai. Isse UI bugs, wrong state, input value mismatch aur unnecessary re-renders ho sakte hain.

---

### Interview Answer:

Keys help React identify list items during reconciliation. Using unstable or incorrect keys (such as array indexes) can cause React to reuse the wrong components, leading to incorrect UI updates, state mismatches, and rendering bugs.

---

## Example 1: Using Array Index as Key ❌

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

### Problem

Suppose the list is:

```text
0 - Apple
1 - Banana
2 - Mango
```

Now insert **Orange** at the beginning:

```text
0 - Orange
1 - Apple
2 - Banana
3 - Mango
```

Since the indexes changed, React may think:

* Orange = Old Apple
* Apple = Old Banana
* Banana = Old Mango

Instead of recognizing them as different items.

---

## Example 2: Input Field Bug ❌

```jsx
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aman" }
  ]);

  return users.map((user, index) => (
    <input key={index} defaultValue={user.name} />
  ));
}
```

### Problem

If the first user is removed:

```text
Rahul
Aman
```

becomes

```text
Aman
```

React reuses the first input because the key is still `0`, so the input may incorrectly display **Rahul** or preserve the wrong internal state.

---

## Correct Way ✅

Use a unique and stable ID.

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}
```

Now React correctly identifies each item even if the list is reordered, filtered, or updated.

---

## When is Index Safe?

Using the array index as a key is acceptable only when:

* ✅ The list is static.
* ✅ Items are never added, removed, or reordered.
* ✅ Items do not have their own state.

Example:

```jsx
const colors = ["Red", "Blue", "Green"];

colors.map((color, index) => (
  <li key={index}>{color}</li>
));
```

---

## Common Bugs Caused by Wrong Keys

| Wrong Key Usage                    | Result                                |
| ---------------------------------- | ------------------------------------- |
| Using array index in dynamic lists | Wrong item reused                     |
| Reordering items                   | Incorrect UI updates                  |
| Removing items                     | State moves to another item           |
| Input fields                       | Wrong input values or cursor position |
| Animations                         | Unexpected animation behavior         |

---

## Best Practices

* ✅ Use a unique database ID (`id`).
* ✅ Use a stable unique identifier.
* ❌ Avoid `Math.random()` as a key (changes every render).
* ❌ Avoid array indexes for dynamic lists.
* ✅ Keys should be unique among sibling elements.

---

## Difference Summary

| Key Type        | Recommended              | Reason                    |
| --------------- | ------------------------ | ------------------------- |
| Database ID     | ✅ Yes                    | Stable and unique         |
| UUID            | ✅ Yes                    | Stable if generated once  |
| Array Index     | ⚠️ Only for static lists | Changes when list changes |
| `Math.random()` | ❌ No                     | New key every render      |

---

### Interview Tip

Keys are used by React's **reconciliation algorithm** to match elements between renders. Using unstable keys (like array indexes in dynamic lists) can cause React to associate the wrong component instance with an item, resulting in **state mismatches, incorrect input values, and UI bugs**. Stable, unique keys ensure React updates only the correct elements.



16. Context API performance issue kab deta hai?
### Hinglish Explanation:

**Context API** tab performance issue deta hai jab **context ki value frequently change hoti hai**. Jab bhi provider ki `value` change hoti hai, **us context ko use karne wale saare consumer components re-render ho jate hain**, chahe unhe updated value ki zarurat ho ya na ho.

Agar ek hi context me bahut saari values store kar di jayein (user, theme, notifications, language, cart, etc.), to ek value change hone par bhi sabhi consumers re-render ho sakte hain.

---

### Interview Answer:

The Context API can cause performance issues when the provider's value changes frequently. Every consumer subscribed to that context re-renders whenever the context value changes, even if it only uses a small part of the context.

---

## Example 1: Single Context ❌

```jsx
const AppContext = createContext();

function App() {
  const [user, setUser] = useState("Rahul");
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ user, theme }}>
      <Navbar />
      <Profile />
    </AppContext.Provider>
  );
}
```

```jsx
function Navbar() {
  const { theme } = useContext(AppContext);

  return <h1>{theme}</h1>;
}
```

```jsx
function Profile() {
  const { user } = useContext(AppContext);

  return <h1>{user}</h1>;
}
```

### Problem

If only `theme` changes:

```jsx
setTheme("dark");
```

Both `Navbar` **and** `Profile` re-render.

Even though `Profile` only needs `user`.

---

## Solution 1: Split Contexts ✅

```jsx
<UserContext.Provider value={user}>
  <ThemeContext.Provider value={theme}>
    <App />
  </ThemeContext.Provider>
</UserContext.Provider>
```

Now:

* `theme` changes → Only `ThemeContext` consumers re-render.
* `user` changes → Only `UserContext` consumers re-render.

---

## Example 2: New Object Reference ❌

```jsx
<AppContext.Provider
  value={{
    user,
    theme
  }}
>
```

### Problem

A **new object** is created on every render.

Even if `user` and `theme` haven't changed, React sees a new `value` reference and notifies consumers.

---

## Solution 2: Use `useMemo` ✅

```jsx
const value = useMemo(() => {
  return { user, theme };
}, [user, theme]);

<AppContext.Provider value={value}>
```

Now the `value` object reference changes only when `user` or `theme` changes.

---

## Example 3: Frequently Changing State ❌

```jsx
const [count, setCount] = useState(0);

<AppContext.Provider value={{ count }}>
```

If:

```jsx
setCount(count + 1);
```

runs every second,

all context consumers re-render every second.

---

## Better Choice

For frequently changing global state (chat messages, live counters, stock prices, etc.), libraries like **Redux**, **Zustand**, or selector-based state management can be more efficient because they allow components to subscribe to only the data they need.

---

## Common Performance Issues

| Issue                          | Result                                   |
| ------------------------------ | ---------------------------------------- |
| Large context object           | Unnecessary re-renders                   |
| Frequently changing values     | All consumers re-render often            |
| New object/function in `value` | Consumers re-render due to new reference |
| Single context for everything  | Every consumer gets notified             |

---

## Best Practices

* ✅ Split large contexts into smaller ones.
* ✅ Memoize the provider value using `useMemo`.
* ✅ Memoize callback functions with `useCallback` if they are passed in the context.
* ✅ Keep frequently changing state out of a single global context when possible.

---

## Difference Summary

| Bad Practice                       | Better Practice                          |
| ---------------------------------- | ---------------------------------------- |
| One large context                  | Multiple focused contexts                |
| New object in `value`              | `useMemo` for stable value               |
| Frequently changing global state   | Use optimized state management if needed |
| Passing new functions every render | `useCallback`                            |

---

### Interview Tip

The Context API is **not inherently slow**. The performance issue arises because **every consumer re-renders whenever the provider's `value` changes**. This can be minimized by **splitting contexts**, **memoizing the provider value**, and avoiding putting frequently changing or unrelated data into the same context.



17. Controlled vs uncontrolled components — real difference kya hai?

### Hinglish Explanation:

React me **Controlled** aur **Uncontrolled** components ka difference ye hai ki **form data ko kaun manage karta hai**.

* **Controlled Component** me input ki value **React state** control karti hai.
* **Uncontrolled Component** me input ki value **DOM** khud manage karta hai aur React `ref` ke through us value ko access karta hai.

---

### Interview Answer:

A **Controlled Component** is a form element whose value is managed by React state, whereas an **Uncontrolled Component** stores its value in the DOM and is accessed using refs.

---

## Controlled Component ✅

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### How it works?

* User types.
* `onChange` updates React state.
* React state updates the input value.
* React is the **single source of truth**.

---

## Uncontrolled Component ✅

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

### How it works?

* User types.
* Value is stored in the DOM.
* React reads it only when needed using `ref`.

---

## Real Difference

### Controlled Component

* React controls the value.
* Easy validation.
* Easy form handling.
* Re-renders on every value change.

### Uncontrolled Component

* DOM controls the value.
* Less code.
* Fewer re-renders.
* Harder validation and state synchronization.

---

## When to Use Controlled Components

✅ Login forms

✅ Registration forms

✅ Search inputs

✅ Real-time validation

✅ Dynamic forms

Example:

```jsx
if (email === "") {
  setError("Email is required");
}
```

---

## When to Use Uncontrolled Components

✅ File upload

```jsx
<input type="file" ref={fileRef} />
```

✅ Simple forms

✅ Third-party libraries

✅ Performance-sensitive forms with many inputs

---

## Difference Summary

| Feature            | Controlled                | Uncontrolled              |
| ------------------ | ------------------------- | ------------------------- |
| Data Stored In     | React State               | DOM                       |
| Source of Truth    | React                     | DOM                       |
| Uses `useState`    | ✅ Yes                     | ❌ No                      |
| Uses `ref`         | ❌ Optional                | ✅ Yes                     |
| Validation         | Easy                      | More manual               |
| Re-render on Input | ✅ Yes                     | ❌ No                      |
| Best For           | Dynamic & validated forms | Simple forms, file inputs |

---

## Interview Tip

* **Controlled Component** → React controls the input using **state** (`value` + `onChange`).
* **Uncontrolled Component** → The browser (DOM) controls the input, and React accesses the value using a **ref**.
* In most React applications, **controlled components are preferred** because they make validation, conditional rendering, and state management much easier. Uncontrolled components are useful for cases like **file inputs** or when integrating with non-React code.



18. SSR ke baad hydration error kyun aata hai?

### Hinglish Explanation:

**Hydration Error** tab aata hai jab **Server-Side Rendering (SSR)** se generate hua HTML aur **client-side React render** ka output match nahi karta.

React server se aaya hua HTML ko "hydrate" karta hai (usme event listeners aur interactivity add karta hai). Agar server aur client ka rendered content different ho, to React hydration warning/error de deta hai.

---

### Interview Answer:

A hydration error occurs when the HTML generated on the server does not match the HTML rendered by React on the client during hydration. React expects both outputs to be identical so it can attach event listeners without recreating the DOM.

---

## Example 1: Using `Date()` ❌

```jsx
function App() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}
```

### Problem

Server renders:

```text
10:00:00 AM
```

Client renders:

```text
10:00:02 AM
```

Since the values are different, React throws a hydration warning.

---

## Solution ✅

```jsx
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return <h1>{time}</h1>;
}
```

Now the dynamic value is generated only on the client after hydration.

---

## Example 2: Using `Math.random()` ❌

```jsx
function App() {
  return <p>{Math.random()}</p>;
}
```

### Problem

Server:

```text
0.12345
```

Client:

```text
0.98765
```

Different output → Hydration error.

---

## Example 3: Accessing `window` During SSR ❌

```jsx
function App() {
  return <h1>{window.innerWidth}</h1>;
}
```

### Problem

`window` does not exist on the server, so SSR fails or produces inconsistent output.

---

## Solution ✅

```jsx
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <h1>{width}</h1>;
}
```

---

## Example 4: Conditional Rendering ❌

```jsx
function App() {
  return (
    <>
      {typeof window !== "undefined" && <p>Client</p>}
    </>
  );
}
```

### Problem

Server renders:

```text
(empty)
```

Client renders:

```text
Client
```

Mismatch causes hydration warning.

---

## Common Causes of Hydration Errors

| Cause                                               | Reason                              |
| --------------------------------------------------- | ----------------------------------- |
| `Date()`                                            | Different time on server and client |
| `Math.random()`                                     | Different random values             |
| Browser APIs (`window`, `document`, `localStorage`) | Not available during SSR            |
| Conditional rendering based on browser state        | Different HTML output               |
| API data changes between server and client          | HTML mismatch                       |
| Invalid HTML structure                              | React cannot hydrate correctly      |

---

## Best Practices

* ✅ Keep the initial server and client render identical.
* ✅ Use `useEffect` for browser-only logic.
* ✅ Avoid `Date()` and `Math.random()` during the initial render.
* ✅ Access `window`, `document`, and `localStorage` only after the component mounts.
* ✅ Fetch the same data on the server and pass it to the client.

---

## Difference Summary

| Bad Practice                      | Better Practice                           |
| --------------------------------- | ----------------------------------------- |
| `new Date()` in render            | Generate value in `useEffect`             |
| `Math.random()` in JSX            | Generate after hydration or on the server |
| Direct `window` access            | Access inside `useEffect`                 |
| Different server/client rendering | Ensure identical initial HTML             |

---

### Interview Tip

Hydration errors occur because **React compares the server-rendered HTML with the client-rendered HTML during hydration**. If they don't match, React logs a hydration warning or recreates parts of the DOM. The most common causes are **dynamic values (`Date`, `Math.random()`), browser-only APIs (`window`, `document`), and conditional rendering that produces different output on the server and client.**





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

