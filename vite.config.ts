import { defineConfig } from 'vite'
import { readFileSync } from 'fs';
import react from '@vitejs/plugin-react';
import { join } from 'path';

const packageJson = JSON.parse(
  readFileSync(join(__dirname, 'package.json'), 'utf-8')
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-version',
      transformIndexHtml(html: string) {
        return html.replace(/__APP_VERSION__/g, packageJson.version);
      },
    },
  ],
  define: {
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow', 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })),
    __APP_VERSION__: JSON.stringify(packageJson.version),
  }
})
