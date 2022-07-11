import Link from 'next/link';
import FormSignUp from '../../components/formSignUp/formSignUp';
import classes from './index.module.scss';

const SignUp = () => {
  return (
    <div className={classes.SignUp}>
      <div className={classes.SignUp__box}>
        <h1 className={classes.SignUp__title}>Registrati</h1>
        <p className={classes.SignUp__text}>
          Iscriviti ora per far anche tu, parte della cronaca odierna nazionale
        </p>
        <FormSignUp />
        <p className={classes.SignUp__login}>
          Hai già un account ?
          <Link href='/accedi'>
            <a className={classes.SignUp__link}>Accedi</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
