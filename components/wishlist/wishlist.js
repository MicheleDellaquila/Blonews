import { Fragment, useContext, useState } from 'react';
import classes from './wishlist.module.scss';
import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from 'react-icons/bs';
import Toast from '../../reusable/toast/toast';
import { useSession } from 'next-auth/react';
import {
  addNewsToWishlist,
  deleteNewsFromWishlist,
} from '../../utility/httpRequests';
import Loader from '../../reusable/loader/loader';

const Wishlist = ({ articleId, inWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(inWishlist);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);
  const { data: session } = useSession();

  // change status wishlist
  const changeStatusNewsWishlistHandler = async () => {
    try {
      setLoader((prev) => !prev);

      // check if user is logging or not
      if (!session.expires) {
        setTypeMessage('error');
        setMessage(
          "Sessione scaduta. Loggati per poter inserire l'articolo nella wishlist",
        );
        return;
      }

      // check if article is in wishlist or not
      if (!isInWishlist) {
        await addNewsToWishlist(session.token, session.user._id, articleId);
        setIsInWishlist(true);
        setTypeMessage('success');
        setMessage('Articolo aggiunto nei tuoi preferiti');
        setLoader((prev) => !prev);
        return;
      } else {
        await deleteNewsFromWishlist(session.token, articleId);
        setIsInWishlist(false);
        setTypeMessage('success');
        setMessage('Articolo eliminato dai tuoi preferiti');
        setLoader((prev) => !prev);
        return;
      }
    } catch (e) {
      setTypeMessage('error');
      setMessage(e.message);
      setLoader((prev) => !prev);
    }
  };

  // clear toast
  const clearToastHandler = () => {
    setTypeMessage(null);
    setMessage(null);
  };

  return (
    <Fragment>
      <Toast type={typeMessage} message={message} onClose={clearToastHandler} />
      <div className={classes.Wishlist}>
        <span
          className={classes.Wishlist__box}
          onClick={changeStatusNewsWishlistHandler}
        >
          {loader && <Loader />}
          {!loader && !isInWishlist && (
            <BsFillBookmarkFill className={classes.Wishlist__icon} />
          )}
          {!loader && isInWishlist && (
            <BsFillBookmarkCheckFill className={classes.Wishlist__icon} />
          )}
        </span>
      </div>
    </Fragment>
  );
};

export default Wishlist;
