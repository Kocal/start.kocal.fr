import { defineConfig, PluginOption } from 'vite';
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import { appBackgroundsPlugin } from './build/vite/app-backgrounds';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), appBackgroundsPlugin({
      rootPath: 'public/assets/backgrounds',
    })],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
