const { generateConfig } = require('@kocal/eslint-config-generator');

const config = generateConfig({
  typescript: true,
});

config.parserOptions = {
  ...config.parserOptions,
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: ['./tsconfig.json', './tsconfig.node.json'],
  tsconfigRootDir: __dirname,
}

config.extends = config.extends || [];
config.extends.push('plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime');

config.plugins = config.plugins || [];
config.plugins.push('react-refresh');

config.rules['react-refresh/only-export-components'] = [
  'warn',
  { allowConstantExport: true },
];

module.exports = config;
