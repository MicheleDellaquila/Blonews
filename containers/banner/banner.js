import { useRouter } from 'next/router';
import Button from '../../reusable/button/button';
import classes from './banner.module.scss';

const Banner = () => {
  const router = useRouter();

  return (
    <div className={classes.Banner}>
      <div className={classes.Banner__container}>
        <div className={classes.Banner__box}>
          <h1 className={classes.Banner__title}>Registati su Blonews</h1>
          <p className={classes.Banner__text}>
            Iscriviti a blonews per poter far parte della cronaca odierna,
            creando , modificando i tuoi articoli e tanto altro.
          </p>
          <Button
            size='md'
            variant='secondary'
            onClick={() => router.push('/signUp')}
          >
            Registati
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
