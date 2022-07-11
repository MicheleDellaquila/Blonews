import classes from './avatar.module.scss';

const Avatar = ({ image, name }) => {
  return (
    <div className={classes.Avatar}>
      <img src={image} alt={name} className={classes.Avatar__image} />
      <p className={classes.Avatar__name}>{name}</p>
    </div>
  );
};

export default Avatar;
