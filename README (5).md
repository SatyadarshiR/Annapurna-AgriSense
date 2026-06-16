{
  "name": "@krishisathi/client",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "node scripts/build.mjs",
    "dev": "node scripts/dev.mjs",
    "preview": "node scripts/preview.mjs",
    "lint": "eslint src --ext .js,.jsx --max-warnings 0",
    "test": "vitest run src --passWithNoTests",
    "test:e2e": "npm run build && playwright test",
    "typecheck": "tsc -p tsconfig.check.json"
  },
  "dependencies": {
    "framer-motion": "^11.11.11",
    "idb": "^8.0.0",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "workbox-window": "^7.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "@playwright/test": "^1.60.0",
    "vite": "^5.4.10",
    "vitest": "^2.1.4"
  }
}
