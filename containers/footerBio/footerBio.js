import classes from './footerBio.module.scss';
import Logo from '../../reusable/logo/logo';
import Social from '../../reusable/social/social';

const FooterBio = () => {
  return (
    <div className={classes.FooterBio}>
      <Logo />
      <p className={classes.FooterBio__text}>
        Blonews riporta le maggiori notizie dall'Italia ogni giorno. Un servizio
        che permette a propri utenti di creare e gestire i propri articoli
        preferiti , entrando anche essi nella cronaca giornaliera.
      </p>
      <Social />
    </div>
  );
};

export default FooterBio;
