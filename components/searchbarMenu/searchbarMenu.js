import { useEffect, useRef, useState } from 'react';
import classes from './searchbarMenu.module.scss';
import { BsSearch } from 'react-icons/bs';
import SearchBar from '../searchbar/searchbar';

const SearchbarMenu = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const refSearchbarMenu = useRef();

  // close searchbar
  const closeSearchbarHandler = (event) => {
    if (!refSearchbarMenu.current.contains(event.target)) {
      setShowSearchbar(false);
    }
  };

  // effect for close searchbar
  useEffect(() => {
    window.addEventListener('click', closeSearchbarHandler);

    return () => {
      window.removeEventListener('click', closeSearchbarHandler);
    };
  }, []);

  return (
    <span ref={refSearchbarMenu} className={classes.SearchbarMenu}>
      <div
        className={classes.SearchbarMenu__wrapper}
        onClick={() => setShowSearchbar(true)}
      >
        <BsSearch className={classes.SearchbarMenu__icon} />
      </div>
      {showSearchbar && (
        <div className={classes.SearchbarMenu__box}>
          <SearchBar />
        </div>
      )}
    </span>
  );
};

export default SearchbarMenu;
