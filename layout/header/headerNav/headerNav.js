import Link from 'next/link';
import classes from './headerNav.module.scss';

const HeaderNav = () => {
  return (
    <nav className={classes.HeaderNav}>
      <ul className={classes.HeaderNav__list}>
        <li className={classes.HeaderNav__item}>
          <Link href='/'>Home</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/finanza'>Finanza</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/intrattenimento'>Intrattenimento</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/notizie--generali'>Notizie generali</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/salute'>Salute</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/scienza'>Scienza</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/sports'>Sports</Link>
        </li>
        <li className={classes.HeaderNav__item}>
          <Link href='/tecnologia'>Tecnologia</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
