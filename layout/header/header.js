import classes from './header.module.scss';
import HeaderLinks from './headerLinks/headerLinks';
import HeaderMain from './headerMain/headerMain';

const Header = () => {
  return (
    <header className={classes.Header}>
      <HeaderLinks />
      <HeaderMain />
    </header>
  );
};

export default Header;
