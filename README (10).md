import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { build } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

await build({
  root,
  configFile: false,
  plugins: [react()],
  server: {
    port: 5173
  }
});
