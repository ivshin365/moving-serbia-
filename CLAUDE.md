# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also runs TypeScript check)
npm run start    # Start production server
```

## Architecture

**Framework**: Next.js 16 App Router · **i18n**: next-intl v4 (sr default, en)  
**Database**: Supabase (PostgreSQL) · **Styling**: Tailwind CSS  
**Forms**: react-hook-form + zod · **SMS**: stubbed in `src/lib/sms.ts`

### Routing

All pages live under `src/app/[locale]/` so locale is always in the URL (`/sr/`, `/en/`). The `middleware.ts` handles locale detection and redirects via next-intl. Root `src/app/layout.tsx` is a passthrough shell; the real layout is `src/app/[locale]/layout.tsx`.

### Key files

| File | Purpose |
|---|---|
| `src/lib/supabase.ts` | Lazy Supabase singleton — call `getSupabase()`, never import `supabase` directly |
| `src/lib/sms.ts` | SMS stub — replace `sendSMS()` body with Twilio/Infobip SDK when ready |
| `src/lib/types.ts` | Shared TypeScript types for form data, movers, requests |
| `src/components/MultiStepForm.tsx` | Orchestrates 3-step form state |
| `messages/sr.json` + `messages/en.json` | All UI strings — add new keys to both files |

### Admin

`/admin` checks for an `admin_token` httpOnly cookie set by `POST /api/admin-auth`. The token is the raw `ADMIN_PASSWORD` env var value. `/admin/login` sets it; `/api/admin-auth DELETE` clears it.

### Environment variables (`.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
ADMIN_PASSWORD=
```

### Supabase schema

Run these in the Supabase SQL editor:

```sql
create table requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  from_address text not null,
  from_city text not null,
  from_floor int not null default 0,
  from_elevator boolean not null default false,
  to_address text not null,
  to_city text not null,
  to_floor int not null default 0,
  to_elevator boolean not null default false,
  move_date date not null,
  items jsonb not null default '[]',
  boxes int not null default 0,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table movers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  city text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
```
