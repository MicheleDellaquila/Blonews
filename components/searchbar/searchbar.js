import classes from './searchbar.module.scss';
import { BsSearch } from 'react-icons/bs';
import Button from '../../reusable/button/button';
import { useState } from 'react';

const Searchbar = () => {
  const [text, setText] = useState('');

  // search article
  const searchArticleHandler = () => {
    return;
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
