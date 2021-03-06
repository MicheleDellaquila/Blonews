import { useState } from 'react';
import classes from './searchbar.module.scss';
import { BsSearch } from 'react-icons/bs';
import Button from '../../reusable/button/button';
import { useRouter } from 'next/router';

const Searchbar = () => {
  const [text, setText] = useState('');
  const router = useRouter();

  // search article
  const searchArticleHandler = () => {
    router.push(`/articolo/${text}`);
  };

  return (
    <div className={classes.Searchbar}>
      <BsSearch className={classes.Searchbar__icon} />
      <input
        type='text'
        placeholder='Cerca articolo'
        className={classes.Searchbar__input}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <span className={classes.Searchbar__btn}>
        <Button
          disabled={text.length === 0}
          size='sm'
          variant='primary'
          onClick={searchArticleHandler}
        >
          Cerca
        </Button>
      </span>
    </div>
  );
};

export default Searchbar;
