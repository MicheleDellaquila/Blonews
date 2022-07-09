import { Fragment } from 'react';
import classes from './layout.module.scss';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={`${classes.Layout} container`}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
