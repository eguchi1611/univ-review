/**
 * @type {import('@commitlint/types').UserConfig}
 */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0],
  },
};

export default config;
