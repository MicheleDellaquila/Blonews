import classes from './logo.module.scss';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <figure className={classes.Logo}>
        <img width={42} height={42} src='./static/icons/logo.png' />
        <figcaption className={classes.Logo__caption}>Blonews</figcaption>
      </figure>
    </Link>
  );
};

export default Logo;
