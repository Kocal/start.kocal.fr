const { generateConfig } = require('@yproximite/eslint-config-generator');

const config = generateConfig({
  typescript: true,
});

config.overrides.push({
  files: ['postcss.config.js', 'tailwind.config.js'],
  rules: {
    'global-require': 'off',
  },
});

module.exports = config;
