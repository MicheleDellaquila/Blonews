import classes from './toast.module.scss';
import { GrClose } from 'react-icons/gr';
import Portal from '../../hoc/portal';
import enumVariant from '../../utility/enumToast';

const Toast = ({ type, message, onClose }) => {
  const className = `${classes.Toast} ${
    classes[`Toast--${enumVariant[type]}`]
  }`;

  return (
    <Portal visible={type && message}>
      <div className={className}>
        <div className={classes.Toast__box}>
          <p className={classes.Toast__text}>{message}</p>
          <span className={classes.Toast__boxIcon} onClick={onClose}>
            <GrClose className={classes.Toast__icon} />
          </span>
        </div>
      </div>
    </Portal>
  );
};

export default Toast;
