import { Fragment, useState } from 'react';
import classes from './comments.create.module.scss';
import { createComment } from '../../utility/httpRequests';
import { useSession } from 'next-auth/react';
import Toast from '../../reusable/toast/toast';
import Loader from '../../reusable/loader/loader';

const CommentsCreate = ({ newsId, onCreate }) => {
  const [textComment, setTextComment] = useState('');
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);
  const { data: session } = useSession();

  // create comment
  const createCommentHandler = async () => {
    try {
      setLoader((prev) => !prev);

      // check if text comment is empty
      if (!textComment) {
        setTypeMessage('error');
        setMessage('Inserire almeno una lettera');
        setLoader((prev) => !prev);
        return;
      }

      // call api
      const response = await createComment(
        session.token,
        newsId,
        session._id,
        textComment,
      );

      onCreate({ ...response.data.comment });
      setLoader((prev) => !prev);
    } catch (e) {
      setTypeMessage('error');
      setMessage(e.response?.data.message);
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
      <div className={classes.CommentsCreate}>
        <h1 className={classes.CommentsCreate__title}>Lascia un commento</h1>
        {!loader && (
          <form className={classes.CommentsCreate__box}>
            <textarea
              className={classes.CommentsCreate__boxTexarea}
              placeholder='Inserisci commento articolo'
              onBlur={createCommentHandler}
              onChange={(e) => setTextComment(e.target.value)}
              value={textComment}
            />
          </form>
        )}
        {loader && (
          <div className={classes.CommentsCreate__box}>
            <Loader />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CommentsCreate;
