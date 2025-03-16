import grantheaslip from "@grantheaslip/eslint-config";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig({
  extends: [
    grantheaslip.base,
    grantheaslip.typescript,
    grantheaslip.react,
    grantheaslip.next,
  ],
  rules: {
    "no-restricted-syntax": [
      "warn",
      {
        message: "Use cssVariables.* rather than hard-coded variable name",
        selector:
          "Literal[value=/^.*var\\(.*\\)/i], TemplateElement[value.cooked=/^.*var\\(.*\\)/i]",
      },
    ],
  },
});

export default eslintConfig;
