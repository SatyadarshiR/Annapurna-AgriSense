import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const server = await preview({
  root,
  configFile: false,
  preview: {
    host: '127.0.0.1',
    port: 5173
  }
});

server.printUrls();

const close = async () => {
  await server.httpServer.close();
  process.exit(0);
};

process.on('SIGINT', close);
process.on('SIGTERM', close);
