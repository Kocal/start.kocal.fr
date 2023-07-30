import react from '@vitejs/plugin-react-swc';
import { generateSW } from 'rollup-plugin-workbox';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [generateSW(require('./workbox.config.cjs'))],
    },
  },
});
