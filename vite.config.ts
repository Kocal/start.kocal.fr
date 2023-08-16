import { defineConfig, PluginOption } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { appBackgroundsPlugin } from './build/vite/app-backgrounds';
import { macroPlugin } from '@builder.io/vite-plugin-macro';

export default defineConfig(() => {
  return {
    plugins: [
      macroPlugin({ preset: 'pandacss' }),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      appBackgroundsPlugin({
        rootPath: 'public/assets/backgrounds',
      }),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
