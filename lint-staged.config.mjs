/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "**/*": ["eslint --fix", "prettier --write --ignore-unknown"],
};

export default config;
