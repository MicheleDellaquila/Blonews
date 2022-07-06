import Layout from '../layout/layout';
import Heads from '../reusable/heads/heads';
import '../styles/_global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Heads title='Blonews' />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
