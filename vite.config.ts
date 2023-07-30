import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { generateSW } from 'rollup-plugin-workbox';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [generateSW(require('./workbox.config'))],
    },
  },
});
