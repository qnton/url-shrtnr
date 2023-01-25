const baseConfig = require('qnton-prettier-config');

module.exports = {
  ...baseConfig,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './frontend/tailwind.config.js',
};
