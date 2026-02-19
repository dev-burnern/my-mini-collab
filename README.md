# Subscription-Free Collaboration Tool (Option A)

Capstone teams can self-host this collaboration tool on Vercel + Supabase free tiers.

## Project structure
- `apps/web`: Next.js application (App Router)
- `apps/web/supabase/migrations`: SQL migrations
- `docs/deploy`: deployment and environment guides
- `docs/plans`: design and execution plans

## Local setup
1. Install dependencies:
```bash
npm --prefix apps/web install
```
2. Copy environment file:
```bash
cp apps/web/.env.example apps/web/.env.local
```
3. Start development server:
```bash
npm --prefix apps/web run dev
```

## Validation commands
```bash
npm --prefix apps/web run lint
npm --prefix apps/web run test
npm --prefix apps/web run test:e2e
npm --prefix apps/web run build
```

## Supabase migration order
1. `apps/web/supabase/migrations/20260219_001_init.sql`
2. `apps/web/supabase/migrations/20260219_002_insights.sql`

## Seed script
```bash
npm --prefix apps/web run seed
```

## Deployment
See:
- `docs/deploy/vercel-supabase-quickstart.md`
- `docs/deploy/env-checklist.md`
