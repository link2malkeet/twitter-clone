# Twitter clone

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## DB

[DB diagram](https://dbdiagram.io/d/64cc5ae402bd1c4a5e384b98)

## Supabase configuration for authentication

[setup](https://supabase.com/docs/guides/auth/auth-helpers/nextjs#manual-configuration)
Generate types

1. install supabase cli
2. login
3. generate types - npx supabase gen types typescript --project-id "project-id" --schema public > types/supasbase.ts
