import { Fragment } from 'react';
import classes from './layout.module.scss';
import Header from './header/header';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.Layout}>{children}</main>
    </Fragment>
  );
};

export default Layout;
