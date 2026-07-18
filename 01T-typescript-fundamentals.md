# 01. TypeScript Fundamentals

## 1. What TypeScript Is

TypeScript (TS) is a strongly-typed superset of JavaScript developed by Microsoft. It compiles ("transpiles") down to plain JavaScript. It adds:

- Static type checking (caught at compile time, not runtime)
- Interfaces, generics, enums, advanced types
- Better IDE autocomplete, refactoring safety, and self-documenting code
- Gradual adoption — you can rename `.js` to `.ts` and start typing incrementally

TypeScript does **not** run directly in browsers or Node — it is always compiled to JavaScript first (by `tsc`, or bundlers like esbuild/swc/Vite/webpack).

---

## 2. Installing TypeScript

```bash
# Install globally (lets you run `tsc` anywhere)
npm install -g typescript

# Recommended: install locally per-project (production best practice)
npm install --save-dev typescript

# Check version
tsc --version

# Initialize a tsconfig.json
npx tsc --init
```

Always prefer a **local** install per project so every developer/CI uses the exact same compiler version (pinned in `package.json`).

---

## 3. The TypeScript Compiler (`tsc`) — Core Commands

```bash
# Compile a single file (outputs file.js next to it)
tsc file.ts

# Compile using the project's tsconfig.json
tsc

# Watch mode — recompiles on save
tsc --watch
tsc -w

# Compile without emitting files (just type-check) — used in CI
tsc --noEmit

# Compile a specific project reference
tsc -b            # build mode, respects "references" in tsconfig
tsc -b --watch

# Show all compiler options
tsc --help
tsc --all
```

---

## 4. `tsconfig.json` — The Project Configuration

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",              // JS version to emit
    "module": "ESNext",              // module system (CommonJS, ESNext, NodeNext)
    "moduleResolution": "Bundler",   // or "NodeNext" for Node projects
    "lib": ["ES2022", "DOM"],        // built-in type libs available
    "outDir": "./dist",              // compiled output folder
    "rootDir": "./src",              // source folder
    "strict": true,                  // enables ALL strict checks (recommended)
    "esModuleInterop": true,         // fixes default-import interop issues
    "skipLibCheck": true,            // skip type-checking .d.ts files (faster builds)
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,       // allow importing .json files
    "declaration": true,             // emit .d.ts type declaration files
    "declarationMap": true,          // source maps for declarations
    "sourceMap": true,               // emit .js.map for debugging
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,         // required by esbuild/swc/Vite
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]               // path aliases
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

`strict: true` bundles: `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `alwaysStrict`. **Always enable it in production** — it prevents entire classes of runtime bugs.

---

## 5. Basic Types

```typescript
let id: number = 5;
let username: string = "raj";
let isActive: boolean = true;
let tags: string[] = ["a", "b"];
let coords: [number, number] = [10, 20];   // tuple
let anything: any = "avoid this";           // opts out of type checking
let notSure: unknown = 4;                   // safer than `any`
let nothing: void = undefined;               // for functions with no return
let neverHappens: never;                     // function never returns (throws/infinite loop)

enum Role {
  Admin = "ADMIN",
  User = "USER",
}
let role: Role = Role.Admin;
```

---

## 6. Interfaces vs Types

```typescript
// Interface — best for objects/class shapes, supports declaration merging
interface User {
  id: number;
  name: string;
  email?: string;       // optional property
  readonly createdAt: Date; // cannot be reassigned
}

// Type alias — best for unions, tuples, mapped/conditional types
type ID = string | number;
type Status = "pending" | "active" | "closed"; // literal union

// Extending
interface Admin extends User {
  permissions: string[];
}
type AdminType = User & { permissions: string[] }; // intersection
```

**Rule of thumb:** use `interface` for public object/class contracts, `type` for unions, primitives, tuples, and utility compositions.

---

## 7. Functions

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

// Optional & default params
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

// Rest params
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Function type
type BinaryOp = (a: number, b: number) => number;
```

---

## 8. Generics

```typescript
function identity<T>(value: T): T {
  return value;
}

interface ApiResponse<T> {
  data: T;
  error: string | null;
}

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic classes
class Box<T> {
  constructor(private content: T) {}
  getContent(): T {
    return this.content;
  }
}
```

---

## 9. Utility Types (built-in)

```typescript
Partial<T>       // all properties optional
Required<T>      // all properties required
Readonly<T>      // all properties readonly
Pick<T, "a"|"b"> // subset of properties
Omit<T, "a">     // exclude properties
Record<K, V>     // object type with keys K and values V
Exclude<T, U>    // remove types from a union
Extract<T, U>    // keep only matching types from a union
NonNullable<T>   // remove null/undefined
ReturnType<F>    // extract a function's return type
Parameters<F>    // extract a function's parameter tuple
Awaited<T>       // unwrap a Promise type
```

Example:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductPreview = Pick<Product, "id" | "name">;
type NewProduct = Omit<Product, "id">;
type ProductPatch = Partial<Product>;
```

---

## 10. Classes

```typescript
class Animal {
  protected name: string;
  private age: number;
  static species = "Unknown";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): string {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal implements Barkable {
  bark(): string {
    return `${this.name} barks!`;
  }
}

interface Barkable {
  bark(): string;
}

// Shorthand constructor properties (very common in production code)
class Point {
  constructor(public x: number, public y: number) {}
}
```

---

## 11. Type Narrowing & Guards

```typescript
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// Custom type guard
function isUser(obj: unknown): obj is User {
  return typeof obj === "object" && obj !== null && "id" in obj;
}

// Discriminated unions (extremely common pattern)
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}
```

---

## 12. Modules & Declaration Files

```typescript
// exporting
export interface User { id: number; }
export function getUser(): User { /* ... */ return { id: 1 }; }
export default class UserService {}

// importing
import UserService, { getUser, User } from "./user";

// ambient declarations for untyped JS libraries
declare module "some-untyped-lib";

// writing your own .d.ts
declare global {
  interface Window {
    myGlobalFlag: boolean;
  }
}
```

```bash
# Install community type definitions for JS-only packages
npm install --save-dev @types/lodash
npm install --save-dev @types/node
```

---

## 13. Common Compiler/CLI Flags Cheat Sheet

```bash
tsc --init                 # generate tsconfig.json
tsc --noEmit                # type-check only, no output files
tsc --watch                 # recompile on file changes
tsc --project ./tsconfig.build.json   # use a specific config
tsc --pretty                # colorized, readable errors
tsc --listFiles             # show every file included in compilation
tsc --traceResolution       # debug module resolution issues
tsc --incremental           # cache build info for faster rebuilds (.tsbuildinfo)
tsc --composite             # required for project references
```

Next: see `02-typescript-node.md` for a full production Node.js + TypeScript setup.
