import classes from './navbarMenu.module.scss';
import Link from 'next/link';

const NavbarMenu = () => {
  return (
    <nav className={classes.NavbarMenu}>
      <ul className={classes.NavbarMenu__list}>
        <li className={classes.NavbarMenu__item}>
          <Link href='/'>Home</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/finanza'>Finanza</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/intrattenimento'>Intrattenimento</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/cronaca'>Cronaca</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/salute'>Salute</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/scienza'>Scienza</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/sports'>Sports</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/tecnologia'>Tecnologia</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
