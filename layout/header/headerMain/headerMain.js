import classes from './headerMain.module.scss';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../reusable/button/button';
import { useRouter } from 'next/router';
import { HiMenuAlt3 } from 'react-icons/hi';
import Logo from '../../../reusable/logo/logo';
import Searchbar from '../../../components/searchbar/searchbar';

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
        <span className={classes.HeaderMain__box}>
          <BsSearch className={classes.HeaderMain__icon} />
        </span>
        <span className={classes.HeaderMain__box}>
          <HiMenuAlt3 className={classes.HeaderMain__icon} />
        </span>
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
