import { css } from "@emotion/react";

import { fontSerif } from "src/styles/fontStyles";
import modernCssResetStyles from "src/styles/modernCssResetStyles";
import cssVariables, { cssVariableNames } from "src/values/cssVariables";

const globalStyles = css(
  modernCssResetStyles,
  {
    ":root ": {
      colorScheme: "light dark",

      [cssVariableNames.documentBackground]: "rgb(241, 241, 241)",
      [cssVariableNames.pageBackground]: "rgb(255, 255, 255)",
      [cssVariableNames.pageBorder]: "rgb(225, 225, 225)",
      [cssVariableNames.pageLink]: "rgb(0, 136, 204)",
      [cssVariableNames.text]: "rgb(33, 33, 33)",
    },

    "@media (prefers-color-scheme: dark)": {
      ":root": {
        [cssVariableNames.documentBackground]: "rgb(32, 32, 32)",
        [cssVariableNames.pageBackground]: "rgb(0, 0, 0)",
        [cssVariableNames.pageBorder]: "rgb(225, 225, 225)",
        [cssVariableNames.pageLink]: "rgb(102, 187, 255)",
        [cssVariableNames.text]: "rgb(222, 222, 222)",
      },
    },
  },
  {
    html: [
      fontSerif,
      {
        background: cssVariables.documentBackground,
        color: cssVariables.text,
      },
    ],
  },
  {
    body: {
      display: "flex",
      justifyContent: "center",
      marginTop: "5vh",
      padding: "1rem",
    },
  },
);

export default globalStyles;
