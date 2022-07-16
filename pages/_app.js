import Layout from '../layout/layout';
import Heads from '../reusable/heads/heads';
import '../styles/_global.scss';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Heads title='Blonews' />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
