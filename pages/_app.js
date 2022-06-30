import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Orienta&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Questrial&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
