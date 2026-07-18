# 05. Production Tooling Cheat Sheet

Common tooling shared across Node/React/Next.js TypeScript projects.

## 1. ESLint (flat config, ESLint 9+)

```bash
npm install --save-dev eslint @eslint/js typescript-eslint
```

```javascript
// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }
);
```

```bash
npx eslint .
npx eslint . --fix
npx eslint src/**/*.ts --max-warnings=0   # used in CI (fail on any warning)
```

## 2. Prettier

```bash
npm install --save-dev prettier
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

```bash
npx prettier --write .
npx prettier --check .     # used in CI, fails if unformatted
```

## 3. Git Hooks (Husky + lint-staged)

```bash
npm install --save-dev husky lint-staged
npx husky init
echo "npx lint-staged" > .husky/pre-commit
```

```json
// package.json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

## 4. CI/CD (GitHub Actions example)

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

## 5. Monorepos (Turborepo — common for Node+React+Next.js in one repo)

```bash
npx create-turbo@latest
cd my-turborepo
npm install
npx turbo build
npx turbo dev
npx turbo lint
npx turbo test
npx turbo build --filter=web       # run only for a specific workspace
```

`package.json` workspaces (npm/pnpm):
```json
{
  "workspaces": ["apps/*", "packages/*"]
}
```

```bash
# pnpm equivalents (very common in production monorepos)
npm install -g pnpm
pnpm install
pnpm -F web dev
pnpm -F api build
```

## 6. Shared TypeScript Config Across Packages

```jsonc
// packages/tsconfig/base.json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

```jsonc
// apps/web/tsconfig.json
{
  "extends": "../../packages/tsconfig/base.json",
  "compilerOptions": { "outDir": "dist" },
  "include": ["src"]
}
```

## 7. Versioning & Publishing TypeScript Packages

```bash
npm install --save-dev tsup   # bundles + generates .d.ts
npx tsup src/index.ts --format cjs,esm --dts --minify

npm version patch|minor|major
npm publish --access public
```

`package.json` for a publishable TS library:
```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"]
}
```

## 8. Debugging TypeScript in Production

```bash
# Source maps must be enabled (sourceMap: true in tsconfig)
node --enable-source-maps dist/index.js

# Inspect / attach debugger
node --inspect dist/index.js
node --inspect-brk dist/index.js
```

## 9. Performance: Speeding Up Builds

```bash
tsc --incremental          # cache .tsbuildinfo between builds
tsc -b                       # project references, only rebuilds changed packages
```

Use `swc` or `esbuild`-based tools (`tsx`, `vite`, `tsup`, `next` with Turbopack) for transpilation in dev — they are 10-100x faster than `tsc` because they skip type-checking; always keep a separate `tsc --noEmit` step for actual type safety.

## 10. Quick Reference: All Commands in One Place

```bash
# --- Setup ---
npm install --save-dev typescript
npx tsc --init

# --- Node ---
npm install --save-dev tsx @types/node
npx tsx src/index.ts
npx tsc --noEmit && npx tsc

# --- React (Vite) ---
npm create vite@latest app -- --template react-ts
npm run dev / build / preview

# --- Next.js ---
npx create-next-app@latest app --typescript
npm run dev / build / start / lint

# --- Quality ---
npx eslint . --fix
npx prettier --write .
npx vitest run

# --- Monorepo ---
npx turbo build
pnpm -F <app> dev

# --- Deploy ---
docker build -t app .
vercel --prod
pm2 start dist/index.js
```
