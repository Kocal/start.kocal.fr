import * as path from 'path';
import { generateSW } from 'rollup-plugin-workbox';
import type { UserConfig } from 'vite';
import * as reactPlugin from 'vite-plugin-react';

const sharedConfig: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  enableRollupPluginVue: false,
  rollupInputOptions: {
    pluginsPostBuild: [generateSW(require('./workbox.config'))],
  },
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
};

const config: UserConfig = {
  ...sharedConfig,
  transforms: [require('vite-transform-globby-import')(sharedConfig)],
};

export default config;
