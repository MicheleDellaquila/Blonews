import classes from './footerContact.module.scss';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';

const FooterContact = () => {
  return (
    <div className={classes.FooterContact}>
      <h4 className={classes.FooterContact__name}>Contatti</h4>
      <ul className={classes.FooterContact__list}>
        <li className={classes.FooterContact__item}>
          <FiPhone className={classes.FooterContact__icon} />
          <a
            href='tel: +39 370-117-2856'
            className={classes.FooterContact__text}
          >
            3701172856
          </a>
        </li>
        <li className={classes.FooterContact__item}>
          <GoLocation className={classes.FooterContact__icon} />
          <p className={classes.FooterContact__text}>Via delle libertà , 22</p>
        </li>
        <li className={classes.FooterContact__item}>
          <MdOutlineEmail className={classes.FooterContact__icon} />
          <a
            href='mailto:blonews@gmail.com'
            className={classes.FooterContact__text}
          >
            blonews@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
