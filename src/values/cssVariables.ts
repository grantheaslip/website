export const cssVariableNames = {
  documentBackground: "--color-document-background",
  pageBackground: "--color-page-background",
  pageBorder: "--color-page-border",
  pageLink: "--color-page-link",
  text: "--color-text",
} as const;

const cssVariables = Object.entries(cssVariableNames).reduce(
  (acc, [key, cssVariableName]) => ({
    ...acc,
    [key]: `var(${cssVariableName})`,
  }),
  {} as {
    [Key in keyof typeof cssVariableNames]: `var(${(typeof cssVariableNames)[Key]})`;
  },
);

export default cssVariables;
