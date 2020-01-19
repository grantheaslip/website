/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import Layout from './Layout';

const Page: FunctionComponent = ({ children }) => (
  <Layout>
    <main css={css`
      background-color: #fff;
      background-color: var(--colourPageBackground);
      overflow: hidden;
      padding: 1.5em;
      border: 1px solid #e1e1e1;
      border: 1px solid var(--colourPageBorder);
      float: left;
      width: 100%;

      h1 {
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        font-size: 2em;
        margin: 0 0 0.5em 0;
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
    >{children}
    </main>
  </Layout>
);

export default Page;
