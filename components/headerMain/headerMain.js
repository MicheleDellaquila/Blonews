import classes from './headerMain.module.scss';
import Button from '../../reusable/button/button';
import { useRouter } from 'next/router';
import Logo from '../../reusable/logo/logo';
import Searchbar from '../searchbar/searchbar';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
import SearchbarMenu from '../searchbarMenu/searchbarMenu';
import Avatar from '../avatar/avatar';
import { useSession } from 'next-auth/react';

const HeaderMain = () => {
  const { data: session } = useSession();
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
        {!session?.expires && (
          <Button
            size='sm'
            variant='primary'
            onClick={() => router.push('/accedi')}
          >
            Accedi
          </Button>
        )}
        {session?.expires && (
          <Avatar
            name={session.user.name + ' ' + session.user.surname}
            image={session.user.image}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
