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
          <Link href='/categoria/finanza'>Finanza</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/categoria/intrattenimento'>Intrattenimento</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/categoria/cronaca'>Cronaca</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/categoria/salute'>Salute</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/categoria/scienza'>Scienza</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/categoria/sports'>Sports</Link>
        </li>
        <li className={classes.NavbarMenu__item}>
          <Link href='/categoria/tecnologia'>Tecnologia</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
