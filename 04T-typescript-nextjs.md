# 04. TypeScript with Next.js (Production Setup)

## 1. Creating a New Next.js + TypeScript Project

```bash
npx create-next-app@latest my-next-app --typescript
cd my-next-app
npm run dev
```

The CLI will prompt for options — for production apps the typical answers are:
```
✔ Would you like to use ESLint?           Yes
✔ Would you like to use Tailwind CSS?     Yes (optional, common)
✔ Would you like to use `src/` directory? Yes
✔ Would you like to use App Router?       Yes (recommended, current standard)
✔ Would you like to customize import alias (@/*)?  Yes
```

Or fully non-interactive:
```bash
npx create-next-app@latest my-app --typescript --eslint --app --src-dir --import-alias "@/*" --use-npm
```

## 2. Project Structure (App Router, production)

```
my-next-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── api/
│   │   │   └── users/route.ts
│   │   └── (dashboard)/
│   │       └── dashboard/page.tsx
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   └── types/
├── public/
├── next.config.ts
├── tsconfig.json
├── package.json
├── .env.local
└── middleware.ts
```

## 3. `tsconfig.json` (Next.js auto-generates this; production-relevant options)

```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Next.js manages/validates this file automatically the first time you run `next dev` or `next build`.

## 4. Typing Pages (App Router)

```tsx
// src/app/page.tsx
export default function HomePage() {
  return <h1>Welcome</h1>;
}

// src/app/users/[id]/page.tsx — typed dynamic route params
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function UserPage({ params, searchParams }: PageProps) {
  const user = await getUser(params.id);
  return <div>{user.name}</div>;
}
```

## 5. Typing Layouts

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "Production Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 6. Typed API Routes (App Router — Route Handlers)

```typescript
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";

interface User { id: number; name: string; }

export async function GET(): Promise<NextResponse<User[]>> {
  const users: User[] = [{ id: 1, name: "Raj" }];
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const body = await req.json() as { name: string };
  return NextResponse.json({ id: Date.now(), name: body.name }, { status: 201 });
}
```

## 7. Data Fetching Patterns

```tsx
// Server Component (default) — fetch directly, typed
async function getUsers(): Promise<User[]> {
  const res = await fetch("https://api.example.com/users", { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

Legacy Pages Router typing (still used in many production codebases):
```typescript
// pages/users/[id].tsx
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{ user: User }> = async (context) => {
  const id = context.params?.id as string;
  const user = await fetchUser(id);
  return { props: { user } };
};

export default function UserPage({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{user.name}</div>;
}
```

```typescript
// getStaticProps / getStaticPaths (SSG) typing
import type { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { id: "1" } }], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<{ user: User }> = async ({ params }) => {
  const user = await fetchUser(params!.id as string);
  return { props: { user }, revalidate: 3600 }; // ISR
};
```

## 8. Middleware Typing

```typescript
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
```

## 9. Environment Variables (typed)

```bash
# .env.local
DATABASE_URL=postgres://...
NEXT_PUBLIC_API_URL=https://api.example.com
```

```typescript
// src/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_API_URL: string;
  }
}
```
> Variables prefixed `NEXT_PUBLIC_` are exposed to the browser; others stay server-only.

## 10. Server Actions (typed, App Router)

```typescript
// src/app/actions.ts
"use server";

interface CreatePostInput { title: string; content: string; }

export async function createPost(input: CreatePostInput): Promise<{ id: string }> {
  const post = await db.post.create({ data: input });
  return { id: post.id };
}
```

## 11. Installing Common Production Dependencies

```bash
npm install next react react-dom
npm install --save-dev typescript @types/react @types/react-dom @types/node

# Common production extras
npm install zod                     # runtime validation
npm install @tanstack/react-query   # client data fetching/caching
npm install next-auth               # authentication
npm install prisma @prisma/client   # ORM
```

## 12. Development, Build & Start Commands

```bash
npm run dev          # next dev            (dev server, hot reload, port 3000)
npm run build         # next build           (production build + type-check)
npm run start          # next start            (runs the production build)
npm run lint            # next lint              (ESLint)

# Direct CLI equivalents
npx next dev --turbo   # dev server with Turbopack (faster HMR)
npx next dev -p 4000     # custom port
npx next build
npx next start -p 4000
npx next lint
```

`package.json` scripts (standard, generated by `create-next-app`):
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

`next build` runs the full TypeScript type-check by default — a type error will **fail the production build**, which is the primary safety net in Next.js projects.

## 13. next.config.ts (typed config, Next.js 15+)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { domains: ["example.com"] },
  typescript: {
    // ignoreBuildErrors: false is the safe production default (do NOT set true)
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
```

## 14. Production Deployment

### Vercel (native platform for Next.js)
```bash
npm install -g vercel
vercel login
vercel                # deploy a preview
vercel --prod          # deploy to production
```

### Self-hosted / Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```
(Enable `output: "standalone"` in `next.config.ts` for the minimal Docker runtime image.)

```bash
docker build -t my-next-app .
docker run -p 3000:3000 --env-file .env.local my-next-app
```

## 15. Testing

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
npx vitest run

# or Playwright for e2e
npm install --save-dev @playwright/test
npx playwright install
npx playwright test
```

## 16. Key Command Summary

```bash
npx create-next-app@latest app --typescript --app --src-dir   # scaffold
npm run dev            # local dev server
npm run lint             # ESLint check
npm run build             # production build (type-checks automatically)
npm run start              # run production build
vercel --prod                # deploy to Vercel
docker build -t app .          # containerize for self-hosting
npx playwright test              # e2e tests
```
