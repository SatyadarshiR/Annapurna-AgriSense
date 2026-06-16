# KrishiSathi

Voice-first farm advisory platform for farmers in Jharkhand, Bihar, and West Bengal.

## Current Structure

- `client/` - React 18 PWA
- `client/src/pages` and `client/src/components` - view layer for the PWA
- `server/src/models` - data models
- `server/src/controllers` - request handling and business flow
- `server/src/routes` - thin HTTP route definitions
- `server/src/services` - integrations and reusable domain services
- `server/src/middleware` - Express middleware
- `rag-service/` - FastAPI retrieval and harvest optimization service
- `ml-models/` - model-serving and training code

## Prerequisites

- Node.js 20+
- npm 10+

## Install

Run from the repository root:

```powershell
npm install
```

## Local Development

Create the backend environment file once:

```powershell
Copy-Item server\.env.example server\.env
```

Set `MONGODB_URI` in `server\.env` to your MongoDB Atlas connection string:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/krishisathi?retryWrites=true&w=majority
```

In MongoDB Atlas, make sure the database user has read/write access and that your current IP address is allowed under Network Access. The server logs `mongo_connected` and starts with `storageMode: "mongo"` when Atlas is connected.

Start backend and frontend together:

```powershell
npm run dev
```

Or run them separately:

```powershell
npm run dev:server
npm run dev:client
```

The API gateway runs without Docker. If MongoDB is not available, farmer auth/profile data is stored locally in `server/data/farmers.json`. Redis-backed behavior uses an in-memory fallback for local development.

Verify the live Atlas connection before a demo:

```powershell
npm run verify:atlas --workspace @krishisathi/server
```

The command prints redacted connection details, database name, collection names, and ping latency.

Redis modes in `server/.env`:

```env
REDIS_URL=redis://127.0.0.1:6379
REDIS_MODE=auto
```

- `REDIS_MODE=auto` tries Redis and falls back to memory if Redis is offline.
- `REDIS_MODE=redis` requires Redis and fails startup if Redis is offline.
- `REDIS_MODE=memory` always uses the in-memory fallback.

No-Docker Redis options:

- Local Redis on WSL/Linux/macOS: start `redis-server`, then confirm `redis-cli ping` returns `PONG`.
- Hosted Redis: set `REDIS_URL` to the provider URL, for example `rediss://default:password@host:port`.
- Windows-native Redis-compatible server: set `REDIS_URL=redis://127.0.0.1:6379`.

Local URLs:

- API gateway: `http://localhost:3000/health`
- React client: `http://localhost:5173`

## Architecture

```text
React PWA
  |
  |  /api/auth, /api/services, /api/advisory
  v
Express API gateway
  |
  |-- MongoDB Atlas: farmer profiles, decision plans, scheme packs, KVK escalations, impact snapshots
  |-- Redis or memory: rate limiting and short-lived operational state
  |-- Domain services: weather, market, diagnosis, graph reasoning, health scoring
  v
Farmer workflows: advisory, protected dashboard, scheme planning, decision OS, offline kit
```

The app is designed to degrade gracefully for demos: authentication can run on local file storage when Atlas is unavailable, while production-like durable features use MongoDB models and authenticated service routes.

## Demo Script

1. Register a farmer with phone, village, crops, and land size.
2. Login with the same phone and password to verify the protected dashboard.
3. Open Decision OS, adjust rainfall, moisture, pest pressure, and market trend, then save a decision pack.
4. Open Resources, use the scheme planner to prepare an application pack, and save it to the backend.
5. Run a diagnosis flow and escalate it through the KVK trust panel.
6. Download the offline village kit to show low-connectivity readiness.

## Quality Checks

```powershell
npm run typecheck --workspace @krishisathi/server
npm run lint --workspace @krishisathi/server
npm run test --workspace @krishisathi/server
npm run typecheck --workspace @krishisathi/client
npm run lint --workspace @krishisathi/client
npm run test --workspace @krishisathi/client
npm run test:e2e --workspace @krishisathi/client
npm run build --workspace @krishisathi/client
npm run verify:atlas --workspace @krishisathi/server
```

## Notes

- Do not commit `.env` files or `node_modules/`.
- The API gateway includes working voice, market, diagnosis, farmer profile, harvest schedule, decision plan, scheme pack, KVK escalation, and impact snapshot routes.
