import classes from './navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.Navbar__list}>
        <li className={classes.Navbar__item}>
          <Link href='/' replace>
            Dashboard
          </Link>
        </li>
        <li className={classes.Navbar__item}>
          <Link href='/chi-siamo' replace>
            Chi siamo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
