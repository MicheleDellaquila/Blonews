import classes from './itemComment.children.module.scss';
import moment from 'moment';
import 'moment/locale/it';

const ItemCommentChildren = ({ children }) => {
  return (
    <div className={classes.ItemCommentChildren}>
      <figure className={classes.ItemCommentChildren__avatar}>
        <img
          src={children.avatar || '/static/images/user.png'}
          alt={children.fullName}
        />
      </figure>
      <div className={classes.ItemCommentChildren__details}>
        <h4 className={classes.ItemCommentChildren__nameUser}>
          {children.fullName}
        </h4>
        <h6 className={classes.ItemCommentChildren__date}>
          {moment(children.publishedAt).format('LLL')}
        </h6>
        <p className={classes.ItemCommentChildren__content}>
          {children.content}
        </p>
      </div>
    </div>
  );
};

export default ItemCommentChildren;
