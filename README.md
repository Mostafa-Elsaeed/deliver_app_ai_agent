<<<<<<< HEAD
# delivery-app-backend
=======
# Delivery App Backend (NestJS)

Replacement for Supabase backend used by the Delivery App frontend. Built with NestJS + TypeORM + SQLite by default.

## Quick start

- Install deps: `npm install`
- Run dev: `npm run start:dev` (listens on `http://localhost:3000`)
- Build: `npm run build` → `npm start`

Set `JWT_SECRET` for production. DB defaults to local SQLite (`data.sqlite`). Swap to Postgres by changing `TypeOrmModule.forRoot` in `src/modules/app.module.ts`.

## API sketch (maps to previous Supabase tables)

- Auth
  - POST /auth/register {email, name, password}
  - POST /auth/login {email, password} → {token, user}
- Users
  - GET /users/:id
- Orders
  - GET /orders
  - GET /orders/:id
  - POST /orders
  - PATCH /orders/:id/status {status}
- Bids
  - GET /bids[?orderId]
  - POST /bids
  - PATCH /bids/:id
- Wallets
  - GET /wallets/:user_id (auto-creates if missing)
  - PATCH /wallets/:user_id
- Messages
  - GET /messages
  - POST /messages
- Reviews
  - GET /reviews
  - POST /reviews

## Notes
- This is a first pass to replace Supabase data access with REST endpoints.
- Realtime channels were not implemented; we can add WebSocket gateway if needed.
- Frontend changes: replace `supabase.*` calls with `fetch`/`axios` to the endpoints above.
- Auth currently provides basic JWT; wire it into frontend login/sign-up.
>>>>>>> 8a893bb (feat: initial NestJS backend scaffolding replacing Supabase (auth, users, orders, bids, wallets, messages, reviews))
