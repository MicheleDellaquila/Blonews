import classes from './layout.module.scss';
import Header from './header/header';
import Footer from './footer/footer';
import CameBackTop from '../components/cameBackTop/comeBackTop';
import { useRouter } from 'next/router';
import UserContext from '../context/userContenxt';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <UserContext>
      <Header />
      <main className={`${classes.Layout} container`}>{children}</main>
      <Footer />
      {router.pathname !== '/accedi' && <CameBackTop />}
      {router.pathname !== '/registrazione' && <CameBackTop />}
    </UserContext>
  );
};

export default Layout;
