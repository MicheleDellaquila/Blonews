import { useState } from 'react';
import classes from './404.module.scss';
import { BsSearch } from 'react-icons/bs';
import Button from '../reusable/button/button';
import { useRouter } from 'next/router';

const NotFound = () => {
  const [text, setText] = useState('');
  const router = useRouter();

  // search article
  const searchArticleHandler = () => {
    router.push(`/articolo/${text}`);
  };

  return (
    <div className={classes.NotFound}>
      <div className={classes.NotFound__box}>
        <h1 className={classes.NotFound__title}>Pagina non trovata</h1>
        <h2 className={classes.NotFound__subtitle}>
          Ci scusiamo , non siamo riusciti a trovare la pagina da te cercata.
        </h2>
        <div className={classes.NotFound__searcboxContainer}>
          <span className={classes.NotFound__searchbar}>
            <BsSearch className={classes.NotFound__icon} />
            <input
              type='text'
              placeholder='Cerca articolo'
              className={classes.NotFound__input}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </span>
          <Button
            disabled={text.length === 0}
            size='md'
            variant='primary'
            onClick={searchArticleHandler}
          >
            Cerca
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
