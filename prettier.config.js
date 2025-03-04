/** @type {import("prettier").Config} */
const prettierConfig = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/css/global.css",
  trailingComma: "all",
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  overrides: [
    {
      files: ["*.json"],
      options: {
        // Prevent consolidating multiple values on one line
        printWidth: 1,
      },
    },
  ],
};

module.exports = prettierConfig;
