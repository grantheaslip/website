import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

import Layout from "src/components/Layout";

const Page: FC<{ children: ReactNode }> = memo(({ children }) => (
  <Layout>
    <main
      css={css`
        overflow: hidden;
        float: left;
        width: 100%;
        padding: 1.5em;

        background-color: #fff;
        background-color: var(--color-page-background);
        border: 1px solid #e1e1e1;
        border: 1px solid var(--color-page-border);

        h1 {
          margin: 0 0 0.5em;

          font-size: 2em;
          font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          line-height: 1em;
        }

        *:last-child {
          margin-bottom: 0;
        }

        p {
          margin: 1em 0;
        }

        a {
          color: #006ac1;
          color: var(--color-page-link);
          text-decoration: underline;
        }
      `}
    >
      {children}
    </main>
  </Layout>
));

Page.displayName = "Page";

export default Page;
