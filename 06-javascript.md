[⬅ Back to Index](./README.md)

## 🧠 JavaScript (1-120)

1. JavaScript kya hai?

`Hinglish Explanation:`

JavaScript ek high-level programming language hai jo web pages ko interactive banati hai. Aaj JavaScript frontend, backend (Node.js), mobile aur desktop applications me bhi use hoti hai.

`Interview Answer:`

JavaScript is a high-level, dynamically typed programming language used to build interactive web applications. It supports event-driven, asynchronous, and object-oriented programming paradigms.

Example:

```javascript
console.log("Hello JavaScript");
```

---

2. JS dynamically typed kaise hai?

`Hinglish Explanation:`

JavaScript me variable ka type declare nahi karna padta. Ek hi variable runtime par different types ki values hold kar sakta hai.

`Interview Answer:`

JavaScript is dynamically typed because variable types are determined at runtime rather than during compilation. A variable can hold values of different types over its lifetime.

Example:

```javascript
let data = "Raj";
data = 25;
```

---

3. var vs let vs const?

`Hinglish Explanation:`

`var` function-scoped hota hai aur redeclare ho sakta hai. `let` block-scoped hota hai aur reassign ho sakta hai. `const` block-scoped hota hai aur reassign nahi ho sakta.

`Interview Answer:`

`var` is function-scoped and can be redeclared. `let` is block-scoped and reassignable, while `const` is block-scoped and cannot be reassigned.

Example:

```javascript
let age = 25;
const PI = 3.14;
```

---

4. Hoisting kya hai?

`Hinglish Explanation:`

Hoisting JavaScript ka behavior hai jisme declarations execution se pehle memory me move ho jati hain. Variables aur functions hoist hote hain, lekin initialization nahi.

`Interview Answer:`

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase of execution.

Example:

```javascript
console.log(a);

var a = 10;
```

---

5. Temporal Dead Zone kya hai?

`Hinglish Explanation:`

TDZ wo area hai jahan `let` aur `const` variables declare to ho jate hain lekin initialization se pehle access nahi kiye ja sakte.

`Interview Answer:`

The Temporal Dead Zone is the period between variable declaration and initialization where accessing a `let` or `const` variable throws an error.

Example:

```javascript
console.log(name);

let name = "Raj";
```

---

6. Scope kya hota hai?

`Hinglish Explanation:`

Scope define karta hai ki variable program ke kis part se access kiya ja sakta hai.

`Interview Answer:`

Scope determines the accessibility and visibility of variables within different parts of a program.

Example:

```javascript
function test() {
  let x = 10;
}
```

---

7. Scope types?

`Hinglish Explanation:`

JavaScript me mainly Global Scope, Function Scope aur Block Scope hote hain. Variable ki visibility scope ke according decide hoti hai.

`Interview Answer:`

The main scope types in JavaScript are Global Scope, Function Scope, and Block Scope.

Example:

```javascript
let globalVar = 1;

function demo() {
  let localVar = 2;
}
```

---

8. Lexical scope kya hai?

`Hinglish Explanation:`

Lexical Scope ka matlab hai ki function apne surrounding scope ke variables access kar sakta hai, jahan wo define hua tha.

`Interview Answer:`

Lexical Scope means a function can access variables from its parent scope based on where it was defined in the code.

Example:

```javascript
function outer() {
  let name = "Raj";

  function inner() {
    console.log(name);
  }
}
```

---

9. Closure kya hai?

`Hinglish Explanation:`

Closure tab banta hai jab ek inner function apne outer function ke variables ko outer function execute hone ke baad bhi access kar sakta hai.

`Interview Answer:`

A closure is created when a function remembers and accesses variables from its lexical scope even after the outer function has finished executing.

Example:

```javascript
function outer() {
  let count = 0;

  return function () {
    count++;
  };
}
```

---

10. Closure ka real use case?

`Hinglish Explanation:`

Closures private variables create karne, data hiding aur function factories banane ke liye use hote hain.

`Interview Answer:`

Closures are commonly used for data encapsulation, private state management, and creating reusable function factories.

Example:

```javascript
function counter() {
  let count = 0;

  return () => ++count;
}
```

---

11. Execution context kya hai?

`Hinglish Explanation:`

Execution Context environment hota hai jahan JavaScript code execute hota hai. Isme variables, functions aur `this` ki information store hoti hai.

`Interview Answer:`

An Execution Context is the environment in which JavaScript code is evaluated and executed.

Example:

```javascript
function greet() {
  console.log("Hello");
}
```

---

12. Call stack kya hai?

`Hinglish Explanation:`

Call Stack ek data structure hai jo function calls ko track karta hai. Functions Last-In-First-Out order me execute hote hain.

`Interview Answer:`

The Call Stack is a stack data structure that keeps track of function execution order in JavaScript.

Example:

```javascript
function a() {
  b();
}

function b() {}
```

---

13. Event loop kya hai?

`Hinglish Explanation:`

Event Loop asynchronous tasks ko manage karta hai. Jab Call Stack empty hota hai tab callback queue se tasks uthakar execute karta hai.

`Interview Answer:`

The Event Loop continuously checks the Call Stack and processes queued asynchronous callbacks when the stack becomes empty.

Example:

```javascript
setTimeout(() => {
  console.log("Done");
}, 0);
```

---

14. Callback queue kya hai?

`Hinglish Explanation:`

Callback Queue me asynchronous callbacks wait karte hain jab tak Call Stack empty na ho jaye.

`Interview Answer:`

The Callback Queue stores completed asynchronous callbacks waiting to be executed by the Event Loop.

Example:

```javascript
setTimeout(() => {
  console.log("Queue");
}, 1000);
```

---

15. Microtask queue kya hai?

`Hinglish Explanation:`

Microtask Queue high-priority queue hoti hai jisme Promise callbacks aur Mutation Observers store hote hain.

`Interview Answer:`

The Microtask Queue contains tasks such as Promise callbacks and is processed before the Callback Queue.

Example:

```javascript
Promise.resolve().then(() => {
  console.log("Microtask");
});
```

---

16. Macrotask kya hai?

`Hinglish Explanation:`

Macrotasks asynchronous operations hote hain jaise `setTimeout`, `setInterval` aur DOM events.

`Interview Answer:`

Macrotasks are tasks placed in the Callback Queue, such as timers, DOM events, and network callbacks.

Example:

```javascript
setTimeout(() => {
  console.log("Macrotask");
}, 0);
```

---

17. Promises kya hain?

`Hinglish Explanation:`

Promise asynchronous operation ka future result represent karta hai. Ye callback hell ko reduce karta hai aur code readable banata hai.

`Interview Answer:`

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Example:

```javascript
const promise =
  fetch("/users");
```

---

18. Promise states?

`Hinglish Explanation:`

Promise ki 3 states hoti hain: Pending, Fulfilled aur Rejected. Ek baar state change ho jaye to dobara change nahi hoti.

`Interview Answer:`

A Promise can be in one of three states: Pending, Fulfilled, or Rejected.

Example:

```javascript
Promise.resolve("Success");
```

---

19. Async/await kya hai?

`Hinglish Explanation:`

Async/Await Promises ke upar built syntax hai jo asynchronous code ko synchronous jaisa readable banata hai.

`Interview Answer:`

Async/Await provides a cleaner way to work with Promises by allowing asynchronous code to be written in a synchronous style.

Example:

```javascript
async function getData() {
  const data = await fetch("/api");
}
```

---

20. Promise chaining?

`Hinglish Explanation:`

Promise Chaining multiple asynchronous operations ko sequentially execute karne ke liye `.then()` methods ko chain karti hai.

`Interview Answer:`

Promise chaining allows sequential execution of asynchronous operations by returning values or Promises from `.then()` callbacks.

Example:

```javascript
fetch("/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

21. Callback hell kya hai?

`Hinglish Explanation:`

Jab multiple asynchronous callbacks ek dusre ke andar nested ho jate hain to code difficult to read aur maintain ho jata hai. Is problem ko Callback Hell ya Pyramid of Doom kehte hain.

`Interview Answer:`

Callback Hell occurs when multiple nested callbacks make code difficult to read, debug, and maintain. It is commonly solved using Promises or Async/Await.

Example:

```javascript
getUser(function(user) {
  getOrders(user.id, function(orders) {
    getPayment(orders, function(payment) {
      console.log(payment);
    });
  });
});
```

---

22. Error handling async mein kaise?

`Hinglish Explanation:`

Promises me `.catch()` aur Async/Await me `try...catch` use karke asynchronous errors handle kiye jate hain.

`Interview Answer:`

Asynchronous errors can be handled using `.catch()` with Promises or `try...catch` blocks with Async/Await.

Example:

```javascript
try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
}
```

---

23. this keyword kya hai?

`Hinglish Explanation:`

`this` current execution context ke object ko refer karta hai. Iski value function call karne ke tareeke par depend karti hai.

`Interview Answer:`

The `this` keyword refers to the object that is currently executing the function. Its value depends on how the function is invoked.

Example:

```javascript
const user = {
  name: "Raj",
  greet() {
    console.log(this.name);
  }
};
```

---

24. Arrow vs normal function?

`Hinglish Explanation:`

Arrow functions apna `this` create nahi karti, wo parent scope se inherit karti hain. Normal functions ka apna `this` hota hai.

`Interview Answer:`

Arrow functions have lexical `this` binding, while regular functions have dynamic `this` based on invocation context.

Example:

```javascript
const add = (a, b) => a + b;

function sum(a, b) {
  return a + b;
}
```

---

25. Bind kya karta hai?

`Hinglish Explanation:`

`bind()` ek naya function return karta hai jiska `this` permanently specified object se bind hota hai.

`Interview Answer:`

The `bind()` method creates a new function with a fixed `this` context and optionally predefined arguments.

Example:

```javascript
const boundFn =
  greet.bind(user);
```

---

26. Call vs apply?

`Hinglish Explanation:`

Dono function ko immediately invoke karte hain aur `this` set karte hain. Difference sirf arguments pass karne ka hai.

`Interview Answer:`

`call()` accepts arguments individually, whereas `apply()` accepts arguments as an array.

Example:

```javascript
fn.call(user, 1, 2);

fn.apply(user, [1, 2]);
```

---

27. Prototype kya hai?

`Hinglish Explanation:`

JavaScript me har object ek prototype se linked hota hai. Prototype inheritance aur shared methods provide karta hai.

`Interview Answer:`

A prototype is an object from which other objects inherit properties and methods.

Example:

```javascript
Person.prototype.greet =
  function() {};
```

---

28. Prototypal inheritance?

`Hinglish Explanation:`

JavaScript objects dusre objects se properties aur methods inherit kar sakte hain using prototype chain.

`Interview Answer:`

Prototypal inheritance allows objects to inherit behavior directly from other objects through the prototype chain.

Example:

```javascript
child.__proto__ = parent;
```

---

29. Object.create kya karta hai?

`Hinglish Explanation:`

`Object.create()` specified prototype ke saath naya object create karta hai.

`Interview Answer:`

`Object.create()` creates a new object and sets its prototype to the provided object.

Example:

```javascript
const user =
  Object.create(person);
```

---

30. Deep vs shallow copy?

`Hinglish Explanation:`

Shallow copy sirf top-level properties copy karti hai, nested objects reference share karte hain. Deep copy poora object structure clone karti hai.

`Interview Answer:`

A shallow copy copies references for nested objects, while a deep copy creates completely independent copies.

Example:

```javascript
const copy =
  structuredClone(obj);
```

---

31. JSON kya hai?

`Hinglish Explanation:`

JSON (JavaScript Object Notation) lightweight data exchange format hai jo APIs aur applications ke beech data transfer ke liye use hota hai.

`Interview Answer:`

JSON is a text-based data format used for storing and exchanging structured data.

Example:

```javascript
const json =
  JSON.stringify(user);
```

---

32. Map vs Object?

`Hinglish Explanation:`

Map kisi bhi type ki keys support karta hai aur insertion order maintain karta hai. Object mainly string aur symbol keys ke liye use hota hai.

`Interview Answer:`

Map provides better support for dynamic key-value storage, while Object is primarily used for structured data representation.

Example:

```javascript
const map = new Map();

map.set("name", "Raj");
```

---

33. Set vs Array?

`Hinglish Explanation:`

Set unique values store karta hai aur duplicates allow nahi karta. Array ordered collection hai jisme duplicate values ho sakti hain.

`Interview Answer:`

A Set stores unique values only, while an Array allows duplicate values and supports indexing.

Example:

```javascript
const set =
  new Set([1, 2, 2]);
```

---

34. WeakMap kya hai?

`Hinglish Explanation:`

WeakMap me keys sirf objects ho sakti hain aur garbage collection automatically unused keys ko remove kar sakta hai.

`Interview Answer:`

WeakMap is a collection of key-value pairs where keys are objects and can be garbage collected.

Example:

```javascript
const wm =
  new WeakMap();
```

---

35. Symbol kya hai?

`Hinglish Explanation:`

Symbol unique aur immutable primitive value hoti hai jo unique object properties create karne ke liye use hoti hai.

`Interview Answer:`

A Symbol is a unique primitive value commonly used as object property keys to avoid naming collisions.

Example:

```javascript
const id =
  Symbol("id");
```

---

36. Destructuring kya hai?

`Hinglish Explanation:`

Destructuring object ya array se values extract karne ka concise syntax provide karti hai.

`Interview Answer:`

Destructuring allows extracting values from arrays or properties from objects into variables.

Example:

```javascript
const { name } = user;
```

---

37. Spread operator?

`Hinglish Explanation:`

Spread operator (`...`) array ya object ke elements ko expand karta hai. Copy aur merge operations me commonly use hota hai.

`Interview Answer:`

The spread operator expands iterable values into individual elements and is useful for copying and merging data.

Example:

```javascript
const arr2 =
  [...arr1];
```

---

38. Rest operator?

`Hinglish Explanation:`

Rest operator multiple values ko collect karke ek array me store karta hai.

`Interview Answer:`

The rest operator collects multiple values into a single array parameter or variable.

Example:

```javascript
function sum(...nums) {
  return nums;
}
```

---

39. Template literals?

`Hinglish Explanation:`

Template literals string interpolation aur multiline strings provide karti hain using backticks.

`Interview Answer:`

Template literals allow embedding expressions inside strings and support multiline formatting.

Example:

```javascript
const msg =
  `Hello ${name}`;
```

---

40. Default parameters?

`Hinglish Explanation:`

Default parameters function arguments ke liye fallback values define karne ki facility dete hain.

`Interview Answer:`

Default parameters provide predefined values when function arguments are not supplied.

Example:

```javascript
function greet(name = "Guest") {
  return name;
}
```


41. Debounce kya hai?

`Hinglish Explanation:`

Debounce function ko tab execute karta hai jab specified delay tak koi naya event trigger na ho. Search input aur resize events me commonly use hota hai.

`Interview Answer:`

Debouncing limits function execution until a specified delay has passed since the last event, reducing unnecessary calls.

Example:

```javascript
function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(
      () => fn(...args),
      delay
    );
  };
}
```

---

42. Throttle kya hai?

`Hinglish Explanation:`

Throttle function execution ko fixed interval tak limit karta hai. Chahe event kitni baar trigger ho, function specified time me ek hi baar chalega.

`Interview Answer:`

Throttling ensures a function executes at most once within a specified time interval.

Example:

```javascript
function throttle(fn, delay) {
  let flag = true;

  return () => {
    if (!flag) return;

    fn();
    flag = false;

    setTimeout(() => {
      flag = true;
    }, delay);
  };
}
```

---

43. Memoization?

`Hinglish Explanation:`

Memoization expensive function results ko cache karta hai taaki same input par computation dobara na karni pade.

`Interview Answer:`

Memoization is an optimization technique that stores function results and returns cached values for repeated inputs.

Example:

```javascript
const cache = {};

function square(n) {
  if (cache[n]) return cache[n];

  return cache[n] = n * n;
}
```

---

44. Pure functions?

`Hinglish Explanation:`

Pure Function same input par hamesha same output deti hai aur external state ko modify nahi karti.

`Interview Answer:`

A pure function always returns the same output for the same input and has no side effects.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

---

45. Side effects kya hai?

`Hinglish Explanation:`

Jab function external state modify kare ya external resources access kare to use side effect kehte hain.

`Interview Answer:`

A side effect is any operation that modifies external state or interacts with systems outside the function.

Example:

```javascript
let count = 0;

function increment() {
  count++;
}
```

---

46. Functional programming kya hai?

`Hinglish Explanation:`

Functional Programming immutable data, pure functions aur function composition par focus karti hai.

`Interview Answer:`

Functional Programming is a paradigm that emphasizes pure functions, immutability, and declarative code.

Example:

```javascript
const result =
  [1, 2, 3].map(x => x * 2);
```

---

47. Event delegation?

`Hinglish Explanation:`

Event Delegation me parent element par event listener lagaya jata hai aur child events bubbling ke through handle kiye jate hain.

`Interview Answer:`

Event Delegation uses event bubbling to handle events from multiple child elements through a single parent listener.

Example:

```javascript
ul.addEventListener("click", e => {
  console.log(e.target);
});
```

---

48. Garbage collection?

`Hinglish Explanation:`

Garbage Collection automatically unused memory ko free karti hai taaki memory efficiently use ho sake.

`Interview Answer:`

Garbage Collection automatically removes objects that are no longer reachable from the application.

Example:

```javascript
let obj = {
  name: "Raj"
};

obj = null;
```

---

49. Memory leak kya hai?

`Hinglish Explanation:`

Memory Leak tab hota hai jab unused memory release nahi hoti aur application unnecessary memory consume karti rehti hai.

`Interview Answer:`

A memory leak occurs when allocated memory remains referenced and cannot be garbage collected.

Example:

```javascript
let cache = [];
```

---

50. Closures se leak kaise hota hai?

`Hinglish Explanation:`

Closure outer scope variables ko memory me hold rakhta hai. Agar unnecessary references maintain rahein to memory leak ho sakta hai.

`Interview Answer:`

Closures can cause memory leaks by retaining references to variables that are no longer needed.

Example:

```javascript
function outer() {
  let largeData = [];

  return function () {
    return largeData;
  };
}
```

---

51. Proxy kya hai?

`Hinglish Explanation:`

Proxy object ke operations ko intercept aur customize karne ki facility deta hai jaise get, set aur delete.

`Interview Answer:`

A Proxy wraps an object and intercepts operations such as property access, assignment, and deletion.

Example:

```javascript
const proxy = new Proxy({}, {});
```

---

52. Reflect API kya hai?

`Hinglish Explanation:`

Reflect API object operations perform karne ke liye standard methods provide karti hai aur Proxy ke saath commonly use hoti hai.

`Interview Answer:`

The Reflect API provides methods for performing object operations in a consistent and functional way.

Example:

```javascript
Reflect.get(user, "name");
```

---

53. Generators kya hain?

`Hinglish Explanation:`

Generators special functions hote hain jo execution ko pause aur resume kar sakte hain using `yield`.

`Interview Answer:`

Generators are functions that can pause execution and produce multiple values over time using `yield`.

Example:

```javascript
function* gen() {
  yield 1;
  yield 2;
}
```

---

54. Iterators kya hain?

`Hinglish Explanation:`

Iterator ek object hota hai jo sequence ke values ko one-by-one return karta hai.

`Interview Answer:`

An Iterator is an object that provides a `next()` method to traverse a collection sequentially.

Example:

```javascript
const it =
  [1, 2][Symbol.iterator]();
```

---

55. for...in vs for...of?

`Hinglish Explanation:`

`for...in` object keys iterate karta hai, jabki `for...of` iterable values iterate karta hai.

`Interview Answer:`

`for...in` iterates over property names, while `for...of` iterates over values of iterable objects.

Example:

```javascript
for (let key in obj) {}

for (let value of arr) {}
```

---

56. Module system kya hai?

`Hinglish Explanation:`

Module System code ko reusable aur maintainable parts me divide karne ki facility deta hai.

`Interview Answer:`

A module system allows code organization into reusable and independent files.

Example:

```javascript
export default add;
```

---

57. ES modules vs CommonJS?

`Hinglish Explanation:`

ES Modules modern JavaScript standard hai, jabki CommonJS Node.js ka traditional module system hai.

`Interview Answer:`

ES Modules use `import/export`, while CommonJS uses `require/module.exports`.

Example:

```javascript
import app from "./app.js";

// CommonJS
const app =
  require("./app");
```

---

58. Strict mode kya hai?

`Hinglish Explanation:`

Strict Mode JavaScript ke unsafe behaviors ko restrict karta hai aur coding mistakes detect karne me help karta hai.

`Interview Answer:`

Strict Mode enables stricter parsing and error handling, helping developers write safer code.

Example:

```javascript
"use strict";
```

---

59. Type coercion kya hai?

`Hinglish Explanation:`

Type Coercion automatic type conversion process hai jo JavaScript different types ke values compare ya operate karte waqt karti hai.

`Interview Answer:`

Type Coercion is the automatic conversion of values from one data type to another by JavaScript.

Example:

```javascript
"5" + 1; // "51"
```

---

60. == vs ===?

`Hinglish Explanation:`

`==` value compare karta hai aur type conversion allow karta hai. `===` value aur type dono compare karta hai.

`Interview Answer:`

`==` performs loose equality with type coercion, whereas `===` performs strict equality without type conversion.

Example:

```javascript
5 == "5";   // true

5 === "5";  // false
```


61. NaN kya hai?

`Hinglish Explanation:`

NaN ka matlab "Not a Number" hai. Jab koi invalid mathematical operation hoti hai ya number conversion fail hota hai tab NaN return hota hai.

`Interview Answer:`

NaN is a special numeric value representing an invalid or undefined mathematical result. It is of type `number`.

Example:

```javascript
Number("abc"); // NaN

Number.isNaN(NaN); // true
```

---

62. undefined vs null?

`Hinglish Explanation:`

`undefined` ka matlab variable declare hua hai par value assign nahi hui. `null` intentionally assigned empty value ko represent karta hai.

`Interview Answer:`

`undefined` indicates a variable has not been assigned a value, while `null` represents an intentional absence of value.

Example:

```javascript
let a;

let b = null;
```

---

63. typeof operator?

`Hinglish Explanation:`

`typeof` kisi variable ya value ka data type check karne ke liye use hota hai.

`Interview Answer:`

The `typeof` operator returns the data type of a given operand as a string.

Example:

```javascript
typeof "Raj"; // string

typeof 10; // number
```

---

64. instanceof?

`Hinglish Explanation:`

`instanceof` check karta hai ki object kisi specific constructor ya class se create hua hai ya nahi.

`Interview Answer:`

The `instanceof` operator checks whether an object exists in a constructor's prototype chain.

Example:

```javascript
arr instanceof Array; // true
```

---

65. Array methods (map/filter/reduce)?

`Hinglish Explanation:`

`map()` data transform karta hai, `filter()` conditions ke basis par data select karta hai aur `reduce()` values ko single result me combine karta hai.

`Interview Answer:`

`map()` transforms elements, `filter()` selects matching elements, and `reduce()` accumulates values into a single result.

Example:

```javascript
arr.map(x => x * 2);

arr.filter(x => x > 5);

arr.reduce((a, b) => a + b);
```

---

66. Reduce ka use?

`Hinglish Explanation:`

Reduce array ke saare elements ko process karke ek final value return karta hai jaise sum, average ya object creation.

`Interview Answer:`

`reduce()` is used to accumulate array values into a single output such as totals, objects, or grouped data.

Example:

```javascript
const sum =
  [1, 2, 3].reduce(
    (acc, curr) => acc + curr,
    0
  );
```

---

67. Flatten array kaise?

`Hinglish Explanation:`

Nested arrays ko single-level array me convert karne ko flattening kehte hain.

`Interview Answer:`

Arrays can be flattened using the `flat()` method or recursion for deeply nested structures.

Example:

```javascript
const arr =
  [1, [2, [3]]];

arr.flat(Infinity);
```

---

68. Deep clone kaise?

`Hinglish Explanation:`

Deep clone nested objects aur arrays ki completely independent copy create karta hai.

`Interview Answer:`

Deep cloning creates a new copy of an object including all nested references.

Example:

```javascript
const clone =
  structuredClone(obj);
```

---

69. Object comparison?

`Hinglish Explanation:`

JavaScript objects reference ke basis par compare hote hain, values ke basis par nahi.

`Interview Answer:`

Objects are compared by reference, so two objects with identical values are not equal unless they reference the same memory location.

Example:

```javascript
{} === {}; // false
```

---

70. Immutable data kya hai?

`Hinglish Explanation:`

Immutable data create hone ke baad modify nahi hota. Changes ke liye nayi copy create ki jati hai.

`Interview Answer:`

Immutable data cannot be modified after creation, improving predictability and state management.

Example:

```javascript
const user = {
  ...oldUser,
  age: 25
};
```

---

71. Currying kya hai?

`Hinglish Explanation:`

Currying ek function ko multiple single-argument functions me convert karne ki technique hai.

`Interview Answer:`

Currying transforms a function with multiple arguments into a sequence of functions that each take one argument.

Example:

```javascript
const add =
  a => b => a + b;
```

---

72. Partial application?

`Hinglish Explanation:`

Partial Application me function ke kuch arguments pehle se fix kar diye jate hain aur remaining baad me pass kiye jate hain.

`Interview Answer:`

Partial application creates a new function by pre-filling some arguments of an existing function.

Example:

```javascript
const add =
  (a, b) => a + b;

const addFive =
  add.bind(null, 5);
```

---

73. Compose function?

`Hinglish Explanation:`

Compose multiple functions ko right-to-left order me execute karta hai.

`Interview Answer:`

Function composition combines multiple functions where the output of one becomes the input of the next.

Example:

```javascript
const compose =
  (f, g) => x => f(g(x));
```

---

74. Pipe kya hai?

`Hinglish Explanation:`

Pipe compose jaisa hi hai, lekin functions left-to-right order me execute hote hain.

`Interview Answer:`

Pipe executes functions from left to right, making data flow easier to read.

Example:

```javascript
const pipe =
  (f, g) => x => g(f(x));
```

---

75. Promise.all?

`Hinglish Explanation:`

`Promise.all()` multiple promises ko parallel execute karta hai aur sab successful hone par result return karta hai.

`Interview Answer:`

`Promise.all()` resolves when all promises succeed and rejects immediately if any promise fails.

Example:

```javascript
Promise.all([
  fetch("/users"),
  fetch("/posts")
]);
```

---

76. Promise.race?

`Hinglish Explanation:`

`Promise.race()` sabse pehle complete hone wale promise ka result return karta hai.

`Interview Answer:`

`Promise.race()` settles as soon as the first promise resolves or rejects.

Example:

```javascript
Promise.race([
  p1,
  p2
]);
```

---

77. Promise.any?

`Hinglish Explanation:`

`Promise.any()` pehle successful promise ka result return karta hai aur failures ignore karta hai.

`Interview Answer:`

`Promise.any()` resolves with the first fulfilled promise and rejects only if all promises fail.

Example:

```javascript
Promise.any([
  p1,
  p2
]);
```

---

78. Promise.allSettled?

`Hinglish Explanation:`

`Promise.allSettled()` sabhi promises ke complete hone ka wait karta hai, chahe success ho ya fail.

`Interview Answer:`

`Promise.allSettled()` returns the status and result of all promises without failing early.

Example:

```javascript
Promise.allSettled([
  p1,
  p2
]);
```

---

79. Retry mechanism kaise likho?

`Hinglish Explanation:`

Retry mechanism failed operation ko specified attempts tak dobara execute karta hai. Temporary network failures ke liye useful hai.

`Interview Answer:`

A retry mechanism automatically re-executes failed operations, often with delays between attempts.

Example:

```javascript
async function retry(fn, times) {
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch {}
  }
}
```

---

80. Rate limiter function?

`Hinglish Explanation:`

Rate Limiter requests ya function calls ki frequency control karta hai taaki abuse aur excessive load prevent ho sake.

`Interview Answer:`

A rate limiter restricts how often a function or API can be executed within a given time period.

Example:

```javascript
let calls = 0;

if (calls > 100) {
  throw Error("Limit Exceeded");
}
```

81. Event bubbling kya hai?

`Hinglish Explanation:`

Event Bubbling me event sabse inner element se start hota hai aur parent elements ki taraf propagate karta hai. Ye browser ka default event flow hai.

`Interview Answer:`

Event Bubbling is the process where an event propagates from the target element up through its ancestor elements.

Example:

```javascript
child.addEventListener("click", () => {
  console.log("Child");
});

parent.addEventListener("click", () => {
  console.log("Parent");
});
```

---

82. Event capturing?

`Hinglish Explanation:`

Event Capturing bubbling ka opposite hai. Event outermost parent se start hota hai aur target element tak pahunchta hai.

`Interview Answer:`

Event Capturing is the phase where events travel from the root element down to the target element.

Example:

```javascript
parent.addEventListener(
  "click",
  () => console.log("Parent"),
  true
);
```

---

83. stopPropagation?

`Hinglish Explanation:`

`stopPropagation()` event ko parent elements tak jane se rokta hai. Isse bubbling ya capturing ko stop kiya ja sakta hai.

`Interview Answer:`

`stopPropagation()` prevents an event from propagating further through the DOM hierarchy.

Example:

```javascript
button.addEventListener("click", e => {
  e.stopPropagation();
});
```

---

84. preventDefault?

`Hinglish Explanation:`

`preventDefault()` browser ke default behavior ko stop karta hai, jaise form submit ya link navigation.

`Interview Answer:`

`preventDefault()` prevents the browser's default action associated with an event.

Example:

```javascript
form.addEventListener("submit", e => {
  e.preventDefault();
});
```

---

85. DOM manipulation basics?

`Hinglish Explanation:`

DOM Manipulation se HTML elements ko select, modify, create aur remove kiya ja sakta hai JavaScript ke through.

`Interview Answer:`

DOM manipulation allows dynamic modification of webpage content, structure, and styles using JavaScript.

Example:

```javascript
document
  .getElementById("title")
  .textContent = "Hello";
```

---

86. Virtual DOM kya hai?

`Hinglish Explanation:`

Virtual DOM Real DOM ki lightweight JavaScript copy hoti hai. Frameworks jaise React changes compare karke sirf required updates Real DOM me apply karte hain.

`Interview Answer:`

The Virtual DOM is an in-memory representation of the Real DOM used to optimize UI updates.

Example:

```javascript
setState({
  name: "Raj"
});
```

---

87. Browser rendering flow?

`Hinglish Explanation:`

Browser HTML parse karta hai, DOM aur CSSOM banata hai, render tree create karta hai aur phir layout aur paint perform karta hai.

`Interview Answer:`

The browser rendering flow consists of parsing, DOM/CSSOM creation, render tree generation, layout calculation, and painting.

Example:

```text
HTML
 ↓
DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
```

---

88. Reflow vs repaint?

`Hinglish Explanation:`

Reflow layout calculations ko trigger karta hai, jabki Repaint sirf visual appearance update karta hai. Reflow generally expensive operation hota hai.

`Interview Answer:`

Reflow recalculates layout and element positions, while Repaint updates visual styles without affecting layout.

Example:

```javascript
element.style.width = "200px";
```

---

89. Web APIs kya hain?

`Hinglish Explanation:`

Web APIs browser dwara provide kiye gaye features hote hain jaise DOM, Fetch API, LocalStorage aur Geolocation.

`Interview Answer:`

Web APIs are browser-provided interfaces that enable features such as networking, storage, and DOM manipulation.

Example:

```javascript
fetch("/api/users");
```

---

90. Fetch vs Axios?

`Hinglish Explanation:`

Fetch browser built-in API hai, jabki Axios third-party library hai jo automatic JSON parsing aur interceptors provide karti hai.

`Interview Answer:`

Fetch is a native browser API, while Axios is a feature-rich HTTP client with built-in request and response handling.

Example:

```javascript
fetch("/users");

axios.get("/users");
```

---

91. LocalStorage vs SessionStorage?

`Hinglish Explanation:`

LocalStorage browser close hone ke baad bhi data preserve rakhta hai. SessionStorage tab close hone tak data store karta hai.

`Interview Answer:`

LocalStorage persists data indefinitely, while SessionStorage stores data only for the duration of the browser session.

Example:

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

---

92. Cookies kya hain?

`Hinglish Explanation:`

Cookies small data pieces hote hain jo browser me store hote hain aur server requests ke saath automatically send hote hain.

`Interview Answer:`

Cookies are small data files stored in the browser and commonly used for authentication and session management.

Example:

```javascript
document.cookie =
  "theme=dark";
```

---

93. CORS kya hai?

`Hinglish Explanation:`

CORS browser security mechanism hai jo different origins ke beech resource sharing control karta hai.

`Interview Answer:`

Cross-Origin Resource Sharing (CORS) allows or restricts requests between different domains.

Example:

```http
Access-Control-Allow-Origin: *
```

---

94. Same-origin policy?

`Hinglish Explanation:`

Same-Origin Policy browser security feature hai jo different domains ke resources ko directly access karne se restrict karta hai.

`Interview Answer:`

The Same-Origin Policy prevents scripts from accessing resources from different origins without explicit permission.

Example:

```text
example.com
≠
api.test.com
```

---

95. Web workers?

`Hinglish Explanation:`

Web Workers JavaScript code ko background thread me run karne ki facility dete hain taaki UI block na ho.

`Interview Answer:`

Web Workers enable background processing in separate threads without blocking the main UI thread.

Example:

```javascript
const worker =
  new Worker("worker.js");
```

---

96. Service workers?

`Hinglish Explanation:`

Service Workers browser background scripts hote hain jo caching, offline support aur push notifications handle karte hain.

`Interview Answer:`

Service Workers run independently from web pages and provide offline capabilities, caching, and background tasks.

Example:

```javascript
navigator.serviceWorker.register(
  "/sw.js"
);
```

---

97. IndexedDB kya hai?

`Hinglish Explanation:`

IndexedDB browser ka client-side NoSQL database hai jo large structured data store kar sakta hai.

`Interview Answer:`

IndexedDB is a browser-based database used for storing large amounts of structured data locally.

Example:

```javascript
indexedDB.open(
  "MyDatabase"
);
```

---

98. Memory profiling?

`Hinglish Explanation:`

Memory Profiling application ki memory usage analyze karti hai aur memory leaks identify karne me help karti hai.

`Interview Answer:`

Memory profiling helps track memory allocation, usage patterns, and potential memory leaks.

Example:

```text
Chrome DevTools
→ Memory Tab
```

---

99. Performance profiling?

`Hinglish Explanation:`

Performance Profiling slow functions, rendering bottlenecks aur expensive operations identify karne ke liye use hoti hai.

`Interview Answer:`

Performance profiling measures execution time and identifies bottlenecks affecting application performance.

Example:

```javascript
console.time("task");
console.timeEnd("task");
```

---

100. JS engine kya hai?

`Hinglish Explanation:`

JavaScript Engine JavaScript code ko parse, compile aur execute karta hai. Har browser apna JS engine use karta hai.

`Interview Answer:`

A JavaScript Engine is a program that parses, compiles, and executes JavaScript code.

Example:

```text
Chrome → V8
Firefox → SpiderMonkey
Safari → JavaScriptCore
```

101. V8 engine?

`Hinglish Explanation:`

V8 Google ka JavaScript Engine hai jo Chrome aur Node.js me use hota hai. Ye JavaScript ko machine code me compile karke fast execution provide karta hai.

`Interview Answer:`

V8 is Google's high-performance JavaScript engine used in Chrome and Node.js. It compiles JavaScript directly into machine code using Just-In-Time (JIT) compilation.

Example:

```text
JavaScript
   ↓
V8 Engine
   ↓
Machine Code
```

---

102. Garbage collector kaise kaam karta hai?

`Hinglish Explanation:`

Garbage Collector automatically memory clean karta hai by removing objects jo application se reachable nahi hote.

`Interview Answer:`

The Garbage Collector frees memory occupied by objects that are no longer reachable from the application.

Example:

```javascript
let user = {
  name: "Raj"
};

user = null;
```

---

103. Async parallel vs sequential?

`Hinglish Explanation:`

Sequential execution me tasks ek ke baad ek run hote hain. Parallel execution me multiple async tasks ek saath start ho jate hain.

`Interview Answer:`

Sequential execution waits for each task to complete, while parallel execution runs multiple asynchronous tasks simultaneously.

Example:

```javascript
await Promise.all([
  fetchUsers(),
  fetchPosts()
]);
```

---

104. Concurrency vs parallelism?

`Hinglish Explanation:`

Concurrency ka matlab multiple tasks ko manage karna hai, jabki Parallelism ka matlab multiple tasks ko same time par execute karna hai.

`Interview Answer:`

Concurrency is about handling multiple tasks efficiently, while parallelism is about executing multiple tasks at the same time.

Example:

```text
Concurrency → 1 CPU

Parallelism → Multiple CPUs
```

---

105. Race condition kya hai?

`Hinglish Explanation:`

Race Condition tab hoti hai jab multiple operations same data ko simultaneously modify karte hain aur final result unpredictable ho jata hai.

`Interview Answer:`

A race condition occurs when the outcome depends on the timing or order of asynchronous operations.

Example:

```javascript
count++;

count++;
```

---

106. Deadlock kya hai?

`Hinglish Explanation:`

Deadlock tab hota hai jab do ya zyada processes ek dusre ke resources ka wait karte rehte hain aur execution stop ho jati hai.

`Interview Answer:`

A deadlock occurs when multiple processes wait indefinitely for resources held by each other.

Example:

```text
Process A → Waiting for B

Process B → Waiting for A
```

---

107. Event loop internals?

`Hinglish Explanation:`

Event Loop Call Stack, Microtask Queue aur Callback Queue ko coordinate karta hai. Pehle Microtasks execute hoti hain, phir Macrotasks.

`Interview Answer:`

The Event Loop continuously checks the Call Stack and prioritizes Microtasks before processing Macrotasks.

Example:

```javascript
Promise.resolve().then(() => {
  console.log("Microtask");
});

setTimeout(() => {
  console.log("Macrotask");
});
```

---

108. Node vs browser JS?

`Hinglish Explanation:`

JavaScript language same hai, lekin environment alag hai. Browser DOM provide karta hai, jabki Node.js file system aur server APIs provide karta hai.

`Interview Answer:`

JavaScript syntax is the same, but browsers provide Web APIs while Node.js provides server-side APIs.

Example:

```javascript
// Browser
document.querySelector();

// Node
fs.readFile();
```

---

109. Polyfills kya hain?

`Hinglish Explanation:`

Polyfills older browsers me modern JavaScript features ka support add karte hain.

`Interview Answer:`

A Polyfill is code that implements modern JavaScript features in environments where they are not natively supported.

Example:

```javascript
if (!Array.prototype.flat) {
  // Polyfill
}
```

---

110. Transpilation kya hai?

`Hinglish Explanation:`

Transpilation modern JavaScript code ko older JavaScript version me convert karti hai taaki older browsers support kar sakein.

`Interview Answer:`

Transpilation converts source code from one version of a language to another compatible version.

Example:

```javascript
// ES6
const add = (a, b) => a + b;
```

---

111. Babel kya hai?

`Hinglish Explanation:`

Babel JavaScript transpiler hai jo modern JavaScript ko older browser-compatible code me convert karta hai.

`Interview Answer:`

Babel is a JavaScript compiler that transforms modern JavaScript syntax into backward-compatible code.

Example:

```bash
npm install @babel/core
```

---

112. Tree shaking kya hai?

`Hinglish Explanation:`

Tree Shaking unused code ko final bundle se remove karta hai jisse bundle size reduce hota hai.

`Interview Answer:`

Tree Shaking is a build optimization technique that removes unused exports from the final bundle.

Example:

```javascript
import {
  usedFunction
} from "./utils";
```

---

113. Bundling kya hai?

`Hinglish Explanation:`

Bundling multiple JavaScript files ko combine karke optimized output file create karta hai.

`Interview Answer:`

Bundling combines multiple source files into one or more optimized files for deployment.

Example:

```text
app.js
utils.js
↓
bundle.js
```

---

114. Webpack kya karta hai?

`Hinglish Explanation:`

Webpack module bundler hai jo JavaScript, CSS aur assets ko process aur optimize karta hai.

`Interview Answer:`

Webpack is a module bundler that builds, optimizes, and packages application assets.

Example:

```javascript
module.exports = {
  entry: "./src/index.js"
};
```

---

115. Code splitting?

`Hinglish Explanation:`

Code Splitting application bundle ko chhote chunks me divide karta hai taaki initial load fast ho.

`Interview Answer:`

Code Splitting breaks applications into smaller bundles that are loaded only when needed.

Example:

```javascript
import("./Dashboard");
```

---

116. Lazy loading?

`Hinglish Explanation:`

Lazy Loading resources ko tab load karti hai jab unki zarurat hoti hai, initial page load ko fast banati hai.

`Interview Answer:`

Lazy Loading delays loading of resources until they are actually required.

Example:

```javascript
const module =
  await import("./module");
```

---

117. Hot reload?

`Hinglish Explanation:`

Hot Reload development me changes ko browser me instantly reflect karta hai bina full page refresh ke.

`Interview Answer:**

Hot Reload updates application modules in real time while preserving application state.

Example:

```text
Save File
↓
UI Updated
```

---

118. Source maps kya hain?

`Hinglish Explanation:`

Source Maps minified ya transpiled code ko original source code se map karte hain taaki debugging easy ho.

`Interview Answer:`

Source Maps help developers debug transformed code by mapping it back to the original source files.

Example:

```javascript
//# sourceMappingURL=app.js.map
```

---

119. Security issues JS mein?

`Hinglish Explanation:`

Common security issues me XSS, CSRF, Injection attacks aur insecure data storage shamil hain.

`Interview Answer:`

Common JavaScript security risks include XSS, CSRF, code injection, and exposure of sensitive client-side data.

Example:

```javascript
element.textContent =
  userInput;
```

---

120. Best practices JS coding?

`Hinglish Explanation:`

Meaningful variable names, modular code, error handling, immutability aur consistent formatting follow karna best practices hain.

`Interview Answer:`

JavaScript best practices include writing clean, modular, maintainable code, handling errors properly, and following consistent coding standards.

Example:

```javascript
const getUserName = user =>
  user.name;
```


---

