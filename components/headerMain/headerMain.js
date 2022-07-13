import { useContext, useRef, useEffect, useState } from 'react';
import classes from './headerMain.module.scss';
import Button from '../../reusable/button/button';
import { useRouter } from 'next/router';
import Logo from '../../reusable/logo/logo';
import Searchbar from '../searchbar/searchbar';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
import SearchbarMenu from '../searchbarMenu/searchbarMenu';
import { User } from '../../context/userContenxt';
import Avatar from '../avatar/avatar';

const HeaderMain = () => {
  const { user } = useContext(User);
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
        {!user && (
          <Button
            size='sm'
            variant='primary'
            onClick={() => router.push('/accedi')}
          >
            Accedi
          </Button>
        )}
        {user && (
          <Avatar name={user.profile.fullName} image={user.profile.avatar} />
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
