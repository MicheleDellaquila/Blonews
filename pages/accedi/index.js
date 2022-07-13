import classes from './index.module.scss';
import Link from 'next/link';
import FormSignIn from '../../components/formSignIn/formSignIn';

const SignIn = () => {
  return (
    <div className={classes.SignIn}>
      <div className={classes.SignIn__box}>
        <h1 className={classes.SignIn__title}>Accedi</h1>
        <p className={classes.SignIn__text}>
          Accedi ora a blonews per continuare la diffusione dei tuoi contenuti
        </p>
        <FormSignIn />
        <p className={classes.SignIn__signUp}>
          Non hai un account ?
          <Link href='/registrazione'>
            <a className={classes.SignIn__link}>Registrati</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
