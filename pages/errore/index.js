import classes from './index.module.scss';
import Button from '../../reusable/button/button';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  return (
    <div className={classes.Error}>
      <div className={classes.Error__box}>
        <h1 className={classes.Error__title}>Abbiamo riscontrato un errore</h1>
        <h2 className={classes.Error__subtitle}>
          Ci scusiamo , abbiamo riscontrato un errore. <br />
          Torna alla home per continuare la tua esperienza
        </h2>
        <Button size='lg' variant='primary' onClick={() => router.push('/')}>
          Torna alla home
        </Button>
      </div>
    </div>
  );
};

export default Error;
