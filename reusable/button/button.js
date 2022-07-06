import classes from './button.module.scss';
import { enumVariant, enumSize } from '../../utility/enumButton';

const Button = ({ children, disabled = false, onClick, size, variant }) => {
  const style = `${classes.btn} ${classes[`btn-${enumVariant[variant]}`]} ${
    classes[`btn-${enumSize[size]}`]
  }`;

  return (
    <button disabled={disabled} className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
