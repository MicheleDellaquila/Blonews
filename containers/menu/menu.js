import classes from './menu.module.scss';
import { GrClose } from 'react-icons/gr';
import Logo from '../../reusable/logo/logo';
import NavbarMenu from '../navbarMenu/navbarMenu';
import { Fragment } from 'react';

const Menu = ({ onClose }) => {
  return (
    <Fragment>
      <div className={classes.Backdrop} />
      <div className={classes.Menu}>
        <header className={classes.Menu__header}>
          <span className={classes.Menu__boxIcon} onClick={onClose}>
            <GrClose className={classes.Menu__icon} />
          </span>
        </header>
        <div className={classes.Menu__body}>
          <div className={classes.Menu__category}>
            <NavbarMenu />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
