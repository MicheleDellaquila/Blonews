import HeaderLinks from '../../containers/headerLinks/headerLinks';
import HeaderMain from '../../containers/headerMain/headerMain';

const Header = () => {
  return (
    <header className='container'>
      <HeaderLinks />
      <HeaderMain />
    </header>
  );
};

export default Header;
