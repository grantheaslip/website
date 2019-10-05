import Head from 'next/head';

import { FunctionComponent } from 'react';

import Page from '../components/Page';
import { getFormattedTitle } from '../utils';

const title = getFormattedTitle('404');

const Error: FunctionComponent = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <h1>404: Not found</h1>

    <p>This page or file doesn’t exist.</p>

    <p>
      <a href='/'>Click here</a> to navigate to the homepage.
    </p>
  </Page>
);

export default Error;
