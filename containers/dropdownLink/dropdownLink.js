import classes from './dropdownLink.module.scss';
import { signOut } from 'next-auth/react';

const DropdownLink = ({ title }) => {
  return (
    <div className={classes.DropdownLink}>
      <header className={classes.DropdownLink__header}>
        <p className={classes.DropdownLink__title}>{title}</p>
      </header>
      <div className={classes.DropdownLink__body}>
        <ul className={classes.DropdownLink__list}>
          <li
            className={classes.DropdownLink__item}
            onClick={() => signOut()}
          >
            logout
          </li>
        </ul>
      </div>
      <div />
    </div>
  );
};

export default DropdownLink;
