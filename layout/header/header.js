import HeaderLinks from './headerLinks/headerLinks';
import HeaderMain from './headerMain/headerMain';

const Header = () => {
  return (
    <header className='container'>
      <HeaderLinks />
      <HeaderMain />
    </header>
  );
};

export default Header;
