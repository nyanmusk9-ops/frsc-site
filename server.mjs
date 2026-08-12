// Minimal zero-dependency static server for local preview: `node server.mjs`
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = import.meta.dirname;
const PORT = process.env.PORT || 4321;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2'
};

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  // directory paths ("/" or "/archive/v1-current/") serve their index.html, like static hosts do
  const clean = url.replace(/^\/+/, '');
  const rel = normalize(clean === '' || clean.endsWith('/') ? clean + 'index.html' : clean);
  if (rel.startsWith('..')) { res.writeHead(403).end('Forbidden'); return; }
  try {
    const body = await readFile(join(ROOT, rel));
    res.writeHead(200, { 'content-type': TYPES[extname(rel)] || 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' }).end('404');
  }
}).listen(PORT, () => console.log(`FRSC site → http://localhost:${PORT}`));
