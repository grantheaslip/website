import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

import Layout from "src/components/Layout";
import { fontSansSerif } from "src/styles/fontStyles";
import cssVariables from "src/values/cssVariables";

const main = css(
  {
    backgroundColor: cssVariables.pageBackground,
    border: `1px solid ${cssVariables.pageBorder}`,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "32rem",
    padding: "1.5rem",
    width: "100%",
  },
  {
    a: {
      color: cssVariables.pageLink,
    },
    h1: [
      fontSansSerif,
      {
        fontSize: "2.25rem",
        lineHeight: 1,
      },
    ],
  },
);

const Page: FC<{ children: ReactNode }> = memo(({ children }) => (
  <Layout>
    <main css={main}>{children}</main>
  </Layout>
));

Page.displayName = "Page";

export default Page;
