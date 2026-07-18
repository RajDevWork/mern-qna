# 02. TypeScript with Node.js (Production Setup)

## 1. Project Initialization

```bash
mkdir my-node-app && cd my-node-app
npm init -y

# Core dependencies
npm install --save-dev typescript @types/node

# Generate tsconfig.json
npx tsc --init
```

## 2. Recommended `tsconfig.json` for Node (production)

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true,
    "incremental": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

## 3. Project Structure (typical production layout)

```
my-node-app/
├── src/
│   ├── index.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   ├── config/
│   └── types/
├── dist/              # compiled JS (git-ignored)
├── tests/
├── .env
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── tsconfig.build.json
├── package.json
├── Dockerfile
└── nodemon.json
```

## 4. Running TypeScript in Development

Node cannot execute `.ts` files natively (until very recent experimental support), so use one of these runners:

### Option A: `ts-node` (classic, slower but mature)
```bash
npm install --save-dev ts-node
npx ts-node src/index.ts

# with nodemon for auto-restart
npm install --save-dev nodemon
npx nodemon --watch src --exec ts-node src/index.ts
```

### Option B: `tsx` (modern, fast, esbuild-based — most popular in 2025/2026)
```bash
npm install --save-dev tsx
npx tsx src/index.ts
npx tsx watch src/index.ts     # auto-restart on change, replaces nodemon
```

### Option C: Node's native TS stripping (Node 22.6+)
```bash
node --experimental-strip-types src/index.ts
# Node 23.6+ enables this by default (type-stripping only, no type errors caught)
```

**Production recommendation:** use `tsx` for local dev (fast feedback loop), and always run a separate `tsc --noEmit` step in CI to catch type errors, since `tsx`/esbuild-based tools do NOT type-check — they just strip types.

## 5. `package.json` Scripts (production-grade)

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.build.json",
    "start": "node dist/index.js",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "format": "prettier --write \"src/**/*.ts\"",
    "test": "vitest run",
    "test:watch": "vitest",
    "clean": "rimraf dist",
    "prebuild": "npm run clean",
    "prepare": "husky install"
  }
}
```

Run them with:
```bash
npm run dev
npm run build
npm start
npm run typecheck
npm run lint
npm test
```

## 6. Express + TypeScript Example (very common production stack)

```bash
npm install express
npm install --save-dev @types/express
```

```typescript
// src/index.ts
import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

interface HealthResponse {
  status: "ok";
  uptime: number;
}

app.get("/health", (req: Request, res: Response<HealthResponse>) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// typed error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 7. Environment Variables with Type Safety

```bash
npm install zod   # or 'envalid'
```

```typescript
// src/config/env.ts
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().default("3000"),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
```

## 8. Path Aliases (production convenience)

`tsconfig.json`:
```jsonc
"paths": { "@/*": ["src/*"] }
```

Since `tsc` does NOT rewrite path aliases at runtime, add:
```bash
npm install --save-dev tsc-alias
```
```json
"build": "tsc -p tsconfig.build.json && tsc-alias -p tsconfig.build.json"
```

Or avoid the problem entirely by using `tsx`/esbuild bundling, which resolves aliases natively.

## 9. Building for Production

```bash
npm run build          # compiles src/ -> dist/ using tsc
node dist/index.js      # run compiled JS directly (no ts-node/tsx needed in prod)
```

`tsconfig.build.json` (excludes tests/dev files from the production build):
```jsonc
{
  "extends": "./tsconfig.json",
  "exclude": ["**/*.test.ts", "**/*.spec.ts", "tests"]
}
```

## 10. Bundling (optional, for smaller/serverless deployments)

```bash
npm install --save-dev esbuild
npx esbuild src/index.ts --bundle --platform=node --target=node20 --outfile=dist/index.js
```

Or with `tsup` (zero-config wrapper over esbuild, popular for libraries):
```bash
npm install --save-dev tsup
npx tsup src/index.ts --format cjs,esm --dts
```

## 11. Process Management in Production

```bash
npm install --save-dev pm2 -g
pm2 start dist/index.js --name my-node-app
pm2 logs my-node-app
pm2 restart my-node-app
pm2 stop my-node-app
pm2 startup             # generate OS startup script
pm2 save                # persist process list across reboots
```

## 12. Dockerizing a TypeScript Node App

```dockerfile
# Dockerfile — multi-stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig*.json ./
RUN npm ci
COPY src ./src
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

```bash
docker build -t my-node-app .
docker run -p 3000:3000 --env-file .env my-node-app
```

## 13. Testing (Vitest / Jest)

```bash
npm install --save-dev vitest
npx vitest run
npx vitest watch
npx vitest --coverage
```

```typescript
// src/utils/sum.test.ts
import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
```

## 14. Summary of Key Commands

```bash
npm install --save-dev typescript @types/node tsx     # setup
npx tsc --init                                          # init config
npm run dev            # tsx watch (development)
npm run typecheck      # tsc --noEmit (CI safety net)
npm run build           # tsc -> dist/
npm start                # node dist/index.js (production run)
docker build -t app .    # containerize
pm2 start dist/index.js  # process manager
```
