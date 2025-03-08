require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import("eslint").Linter.LegacyConfig} */
const eslintConfig = {
  env: {
    browser: true,
  },
  extends: [
    "@grantheaslip/eslint-config",
    "@grantheaslip/eslint-config/react",
    "@grantheaslip/eslint-config/next",
    "@grantheaslip/eslint-config/typescript",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};

module.exports = eslintConfig;
