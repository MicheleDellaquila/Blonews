import classes from './headerMain.module.scss';
import Button from '../../../reusable/button/button';
import { useRouter } from 'next/router';
import Logo from '../../../reusable/logo/logo';
import Searchbar from '../../../components/searchbar/searchbar';
import HamburgerMenu from '../../../components/hamburgerMenu/hamburgerMenu';
import SearchbarMenu from '../../../components/searchbarMenu/searchbarMenu';

const HeaderMain = () => {
  const router = useRouter();

  return (
    <div className={classes.HeaderMain}>
      <div className={classes.HeaderMain__left}>
        <Logo textMobile={false} />
        <span className={classes.HeaderMain__searchbarBox}>
          <Searchbar />
        </span>
      </div>
      <div className={classes.HeaderMain__right}>
        <SearchbarMenu />
        <HamburgerMenu />
        <Button
          size='sm'
          variant='primary'
          onClick={() => router.push('/accedi')}
        >
          Accedi
        </Button>
      </div>
    </div>
  );
};

export default HeaderMain;
