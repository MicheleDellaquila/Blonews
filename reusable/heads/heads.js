import React from 'react';
import Head from 'next/head';

const Heads = ({ title, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='./logo.png' />
      <link rel='apple-touch-icon' href='./logo.png' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Orienta&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Questrial&display=swap'
        rel='stylesheet'
      />
      <meta charSet='utf-8' />
      <meta name='author' content='Blonews' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      {children}
    </Head>
  );
};

export default Heads;
