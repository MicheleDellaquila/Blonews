import classes from './field.module.scss';

const Field = ({
  label,
  inputIcon,
  onClickIcon,
  type,
  placeholder,
  onFocus,
  onChange,
  value,
  error,
}) => {
  return (
    <div className={classes.Field}>
      <label className={classes.Field__label}>{label}</label>
      <div className={classes.Field__box}>
        <input
          className={classes.Field__input}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          onChange={onChange}
          value={value}
        />
        {error && <p className={classes.Field__error}>{error}</p>}
        {inputIcon && (
          <span className={classes.Field__icon} onClick={onClickIcon}>
            {inputIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Field;
