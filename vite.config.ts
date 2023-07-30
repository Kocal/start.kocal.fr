import * as path from 'path';
import react from '@vitejs/plugin-react';
import { generateSW } from 'rollup-plugin-workbox';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
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
