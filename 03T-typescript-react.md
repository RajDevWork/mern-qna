# 03. TypeScript with React (Production Setup)

## 1. Creating a New Project (Vite — recommended in 2026)

```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
```

Other templates:
```bash
npm create vite@latest my-app -- --template react-ts       # React + TS
npm create vite@latest my-app -- --template react-swc-ts   # faster SWC-based compilation
```

> Create React App (CRA) is deprecated/unmaintained — Vite is the production standard now. Next.js is the standard if you need SSR (see file 04).

## 2. Project Structure

```
my-react-app/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   ├── api/
│   ├── store/
│   └── assets/
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── package.json
├── .eslintrc.cjs
└── .env
```

## 3. `tsconfig.json` for React (Vite default, production-tuned)

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "isolatedModules": true,          // required since Vite compiles file-by-file
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
  "include": ["src"]
}
```

## 4. Typing Function Components

```tsx
// Props typing
interface CardProps {
  title: string;
  description?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

function Card({ title, description, onClick, children }: CardProps) {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export default Card;
```

You generally do **not** need `React.FC<Props>` anymore (community best practice moved away from it since it has awkward `children` handling); a plain typed function is preferred.

## 5. Typing Hooks

```tsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// useState — TS infers type from the initial value; annotate for unions/nullable
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// useRef
const inputRef = useRef<HTMLInputElement>(null);

// useEffect (no return type needed, but cleanup must return void | () => void)
useEffect(() => {
  const id = setInterval(() => setCount((c) => c + 1), 1000);
  return () => clearInterval(id);
}, []);

// useCallback / useMemo with explicit generics when inference is ambiguous
const handleClick = useCallback((id: number): void => {
  console.log(id);
}, []);

const total = useMemo<number>(() => items.reduce((a, b) => a + b.price, 0), [items]);
```

## 6. Custom Hooks

```tsx
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then((res) => res.json())
      .then((json: T) => { if (!cancelled) setData(json); })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

// usage
const { data, loading } = useFetch<User[]>("/api/users");
```

## 7. Events

```tsx
function Form() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
```

## 8. Context API with TypeScript

```tsx
interface AuthContextValue {
  user: User | null;
  login: (u: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
```

## 9. State Management (Redux Toolkit example, common in production)

```bash
npm install @reduxjs/toolkit react-redux
```

```typescript
// store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState { value: number; }
const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
```

```typescript
// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({ reducer: { counter: counterReducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## 10. Installing Type Definitions

```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

Vite's `react-ts` template installs these automatically. For any untyped JS package:
```bash
npm install --save-dev @types/<package-name>
```

## 11. Linting & Formatting

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
npx eslint . --ext .ts,.tsx
npx eslint . --ext .ts,.tsx --fix

npm install --save-dev prettier eslint-config-prettier
npx prettier --write "src/**/*.{ts,tsx}"
```

## 12. Development, Type-Checking & Build Commands

```bash
npm run dev            # vite dev server (HMR)
npm run build            # tsc -b && vite build  (type-check + production bundle)
npm run preview          # preview the production build locally
npx tsc --noEmit         # standalone type-check (used in CI)
```

Typical `package.json` scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  }
}
```

## 13. Production Build Output & Deployment

```bash
npm run build
# outputs static assets to dist/

# Preview locally
npm run preview

# Deploy dist/ to any static host:
npx vercel deploy dist          # Vercel
npx netlify deploy --prod --dir=dist   # Netlify
aws s3 sync dist/ s3://my-bucket --delete   # AWS S3
```

## 14. Testing (Vitest + React Testing Library)

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

```typescript
// vite.config.ts additions
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});
```

```bash
npx vitest run
npx vitest --coverage
```

## 15. Key Command Summary

```bash
npm create vite@latest app -- --template react-ts   # scaffold
npm install                                            # install deps
npm run dev                                             # dev server
npm run typecheck                                       # tsc --noEmit
npm run lint                                             # eslint
npm run build                                            # production build
npm run preview                                          # preview build
npm run test                                              # run tests
```
