const { generateConfig } = require('@yproximite/eslint-config-generator');

const config = generateConfig({
  typescript: true,
});

config.settings['import/resolver'].alias = {
  map: [
    ['react', '@pika/react'],
    ['react-dom', '@pika/react-dom'],
  ],
};

config.overrides.push({
  files: ['postcss.config.js', 'tailwind.config.js'],
  rules: {
    'global-require': 'off',
  },
});

module.exports = config;
