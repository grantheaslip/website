require("@rushstack/eslint-patch/modern-module-resolution");

const eslintConfig = {
  extends: [
    "@grantheaslip/eslint-config",
    "@grantheaslip/eslint-config/react",
    "@grantheaslip/eslint-config/next",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};

module.exports = eslintConfig;
