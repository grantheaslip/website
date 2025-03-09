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
  plugins: ["@emotion/eslint-plugin"],
  rules: {
    "@emotion/syntax-preference": ["warn", "object"],
    "no-restricted-syntax": [
      "warn",
      {
        message: "Use cssVariables.* rather than hard-coded variable name",
        selector:
          "Literal[value=/^.*var\\(.*\\)/i], TemplateElement[value.cooked=/^.*var\\(.*\\)/i]",
      },
    ],
  },
};

module.exports = eslintConfig;
