import classes from './headerMain.module.scss';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../reusable/button/button';
import { useRouter } from 'next/router';
import { HiMenuAlt3 } from 'react-icons/hi';
import Logo from '../../../reusable/logo/logo';

const HeaderMain = () => {
  const router = useRouter();

  return (
    <div className={classes.HeaderMain}>
      <div className={classes.HeaderMain__left}>
        <Logo />
        <div className={classes.HeaderMain__searchbar}>
          <BsSearch className={classes.HeaderMain__icon} />
          <input
            type='text'
            placeholder='Cerca articolo'
            className={classes.HeaderMain__input}
          />
        </div>
      </div>
      <div>
        <HiMenuAlt3 />
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
