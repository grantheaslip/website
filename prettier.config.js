/** @type {import("prettier").Config} */
const prettierConfig = {
  trailingComma: "all",
  /* eslint-disable perfectionist/sort-objects */
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

export default prettierConfig;
