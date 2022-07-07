import React from 'react';
import Head from 'next/head';

const Heads = ({ title, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='./logo.png' />
      <link rel='apple-touch-icon' href='./logo.png' />
      <meta charSet='utf-8' />
      <meta name='author' content='Blonews' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      {children}
    </Head>
  );
};

export default Heads;
