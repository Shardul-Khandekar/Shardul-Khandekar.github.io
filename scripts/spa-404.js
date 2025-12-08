// if your project uses "type": "module" this is fine; else use require()
import { copyFileSync, existsSync, mkdirSync } from 'fs';
if (!existsSync('dist')) mkdirSync('dist');
if (existsSync('dist/index.html')) {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('✔ SPA fallback created: dist/404.html');
}
