import classes from './social.module.scss';

const Social = () => {
  return (
    <div className={classes.Social}>
      <a
        href='/facebook'
        target='_blank'
        rel='noopener noreferrer'
        className={classes.Social__link}
      >
        <img
          src='/static/icons/facebook.png'
          alt='facebook'
          className={classes.Social__image}
        />
      </a>
      <a href='/instagram' target='_blank' className={classes.Social__link}>
        <img
          src='/static/icons/instagram.png'
          alt='instagram'
          className={classes.Social__image}
        />
      </a>
      <a href='/twitter' target='_blank' className={classes.Social__link}>
        <img
          src='/static/icons/twitter.png'
          alt='twitter'
          className={classes.Social__image}
        />
      </a>
    </div>
  );
};

export default Social;
