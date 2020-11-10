import * as path from 'path';
import * as reactPlugin from 'vite-plugin-react';
import type { UserConfig } from 'vite';

const sharedConfig: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  enableRollupPluginVue: false,
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
};

const config: UserConfig = {
  ...sharedConfig,
  transforms: [require('vite-transform-globby-import')(sharedConfig)],
};

export default config;
