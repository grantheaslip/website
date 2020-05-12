/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FunctionComponent } from "react";

import Layout from "components/Layout";

const Page: FunctionComponent = ({ children }) => (
  <Layout>
    <main
      css={css`
        overflow: hidden;
        float: left;
        width: 100%;
        padding: 1.5em;

        background-color: #fff;
        background-color: var(--colourPageBackground);
        border: 1px solid #e1e1e1;
        border: 1px solid var(--colourPageBorder);

        h1 {
          font-size: 2em;

          margin: 0 0 0.5em 0;

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
          color: var(--colourPageLink);
          text-decoration: underline;
        }
      `}
    >
      {children}
    </main>
  </Layout>
);

export default Page;
