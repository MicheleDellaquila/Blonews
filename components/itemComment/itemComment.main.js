import { Fragment, useState } from 'react';
import classes from './itemComment.main.module.scss';
import moment from 'moment';
import 'moment/locale/it';
import Button from '../../reusable/button/button';
import { useSession } from 'next-auth/react';
import { responseComment } from '../../utility/httpRequests';
import Toast from '../../reusable/toast/toast';
import Loader from '../../reusable/loader/loader';

const ItemCommentMain = ({
  newsId,
  idUser,
  avatar,
  fullName,
  publishedAt,
  content,
  response,
  onResponse
}) => {
  const [showResponse, setShowResponse] = useState(false);
  const [textComment, setTextComment] = useState('');
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [typeMessage, setTypeMessage] = useState(null);
  const { data: session } = useSession();

  // response comment
  const responseCommentHandler = async () => {
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
      const response = await responseComment(
        session.token,
        newsId,
        session._id,
        idUser,
        textComment,
      );

      onResponse({ ...response.data.comment });
      setLoader((prev) => !prev);
      setShowResponse(false)
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
      <div className={classes.ItemCommentMain}>
        <figure className={classes.ItemCommentMain__avatar}>
          <img src={avatar || '/static/images/user.png'} alt={fullName} />
        </figure>
        <div className={classes.ItemCommentMain__details}>
          <h4 className={classes.ItemCommentMain__nameUser}>{fullName}</h4>
          <div className={classes.ItemCommentMain__wrapper}>
            <h6 className={classes.ItemCommentMain__date}>
              {moment(publishedAt).format('LLL')}
            </h6>
            {!response._id && (
              <Button
                size='sm'
                variant='primary'
                onClick={() => setShowResponse(true)}
              >
                Rispondi
              </Button>
            )}
          </div>
          <p className={classes.ItemCommentMain__content}>{content}</p>
          {!loader && showResponse && (
            <form className={classes.ItemCommentMain__response}>
              <textarea
                className={classes.ItemCommentMain__textarea}
                placeholder='Inserire risposta commento'
                onBlur={responseCommentHandler}
                onChange={(e) => setTextComment(e.target.value)}
                value={textComment}
              />
            </form>
          )}
          {loader && (
            <div className={classes.ItemCommentMain__loader}>
              <Loader />
            </div>
          )}
        </div>
        {response._id && <div className={classes.ItemCommentMain__link} />}
      </div>
    </Fragment>
  );
};

export default ItemCommentMain;
