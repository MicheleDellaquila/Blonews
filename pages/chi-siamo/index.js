import { Fragment } from 'react';
import classes from './index.module.scss';
import Avatar from '../../containers/avatar/avatar';
import Button from '../../reusable/button/button';
import { useRouter } from 'next/router';

const AboutUs = () => {
  const router = useRouter();

  return (
    <Fragment>
      <div className={`${classes.AboutUs} row`}>
        <div className='col-xs-12 col-lg-7'>
          <h1 className={classes.AboutUs__title}>
            Blonews, il sito per ogni divulgatore.
          </h1>
          <p className={classes.AboutUs__text}>
            Blonews è una startup nata nel 2022 per unire la reporstica
            giornaliera e il mondo blog in una sola piattaforma. Ogni utente
            sarà libero di divulagare le sue notizie di cronaca in semplici
            passaggi.
          </p>
        </div>
        <div className='col-xs-12 col-sm-8 col-md-6 col-lg-5'>
          <img src='/static/images/about.png' alt='chi siamo' />
        </div>
      </div>
      <div className={`${classes.AboutUs__bottom} row`}>
        <div className='col-xs-12 col-lg-6'>
          <div className={classes.AboutUs__card}>
            <div className={classes.AboutUs__latestFollower}>
              <h4 className={classes.AboutUs__cardTitle}>Ultimi follower</h4>
              <ul className={classes.AboutUs__list}>
                <li>
                  <Avatar image='/static/images/avatar.jpg' name='Teresa' />
                </li>
                <li>
                  <Avatar image='/static/images/avatar.jpg' name='Gianluca' />
                </li>
                <li>
                  <Avatar image='/static/images/avatar.jpg' name='Michele' />
                </li>
                <li>
                  <Avatar image='/static/images/avatar.jpg' name='Massimo' />
                </li>
                <li>
                  <Avatar image='/static/images/avatar.jpg' name='Mario' />
                </li>
                <li>
                  <Avatar image='/static/images/avatar.jpg' name='Luciana' />
                </li>
              </ul>
            </div>
            <div className={classes.AboutUs__container}>
              <div className={classes.AboutUs__cardInfo}>
                <h4 className={classes.AboutUs__cardTitleInfo}>
                  Ultimi follower
                </h4>
                <p className={classes.AboutUs__value}>450</p>
              </div>
              <div className={classes.AboutUs__cardInfo}>
                <h4 className={classes.AboutUs__cardTitleInfo}>Post Totali</h4>
                <p className={classes.AboutUs__value}>1200</p>
              </div>
              <div className={classes.AboutUs__cardInfo}>
                <h4 className={classes.AboutUs__cardTitleInfo}>
                  Visualizzazioni
                </h4>
                <p className={classes.AboutUs__value}>600</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xs-12 col-lg-5'>
          <h1 className={classes.AboutUs__titleUsers}>
            Utenti attivi ogni giorni in ogni singola parte d’italia
          </h1>
          <p className={classes.AboutUs__textUsers}>
            Unisciti alla nostra community per allargare l’informazione
            giornaliera italiana con miglioni d’utenti all’attivo ogni giorno.
          </p>
          <div className={classes.AboutUs__box}>
            <Button
              size='lg'
              variant='primary'
              onClick={() => router.push('/registrazione')}
            >
              Registrati
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
