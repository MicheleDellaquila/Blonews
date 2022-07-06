import classes from './logo.module.scss';
import Link from 'next/link';

const Logo = ({ textMobile }) => {
  const classText = !textMobile
    ? `${classes.Logo__caption} ${classes.Logo__caption__mobileHidden}`
    : `${classes.Logo__caption}`;

  return (
    <Link href='/'>
      <figure className={classes.Logo}>
        <img width={42} height={42} src='./static/icons/logo.png' />
        <figcaption className={classText}>Blonews</figcaption>
      </figure>
    </Link>
  );
};

export default Logo;
