import Link from 'next/link';
import classes from './footerMenu.module.scss';

const FooterMenu = ({ name, list }) => {
  return (
    <div className={classes.FooterMenu}>
      <h4 className={classes.FooterMenu__name}>{name}</h4>
      <ul className={classes.FooterMenu__list}>
        {list?.map((item) => {
          return (
            <li key={item.name} className={classes.FooterMenu__item}>
              <Link href={item.href} as={item.as}>
                <a className={classes.FooterMenu__link}>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
