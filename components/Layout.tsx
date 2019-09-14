import { ReactChild } from 'react';
import { css } from 'linaria';

export const globals = css`
  :global() {
    :root {
      color-scheme: light dark;
      --colourDocumentBackground: rgb(241, 241, 241);
      --colourPageBackground: rgb(255, 255, 255);
      --colourPageBorder: rgb(225, 225, 225);
      --colourPageLink: rgb(0, 136, 204);
      --colourText: rgb(33, 33, 33);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --colourDocumentBackground: rgb(32, 32, 32);
        --colourPageBackground: rgb(0, 0, 0);
        --colourPageBorder: rgb(225, 225, 225);
        --colourPageLink: rgb(102, 187, 255);
        --colourText: rgb(222, 222, 222);
      }
    }

    html {
      overflow-x: hidden;
      overflow-y: scroll;
    }

    html,
    body {
      color: #212121;
      color: var(--colourText);
      background: #f1f1f1;
      background: var(--colourDocumentBackground);
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 400;
      text-rendering: optimizeLegibility;
      -webkit-text-size-adjust: 100%;
      margin: 0em;
      font-family: 'Georgia', serif;
    }

    @media (max-width: 360px) {
      html,
      body {
        font-size: 15px;
      }
    }

    body {
      margin-top: 3em;
      margin-top: 5vh;
    }
    body * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
`;

const styles = {
  centred: css`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border: 1em solid transparent;
    overflow: hidden;
  `,
};

export function Layout({
  children,
}: {
  children: ReactChild | Array<ReactChild>;
}) {
  return <div className={styles.centred}>{children}</div>;
}
