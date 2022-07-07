import { useState } from 'react';
import classes from './hamburgerMenu.module.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import Menu from '../../containers/menu/menu';

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <span className={classes.HamburgerMenu}>
      <div
        className={classes.HamburgerMenu__wrapper}
        onClick={() => setShowMenu(true)}
      >
        <HiMenuAlt3 className={classes.HamburgerMenu__icon} />
      </div>
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
    </span>
  );
};

export default HamburgerMenu;
