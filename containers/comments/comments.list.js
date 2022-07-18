import ItemComment from '../../components/itemComment/itemComment';
import classes from './comments.list.module.scss';

const CommentsList = ({ newsId, number, comments, onResponse }) => {
  return (
    <div className={classes.CommentsList}>
      <h1 className={classes.CommentsList__title}>{number} commenti</h1>
      <div className={classes.CommentsList__container}>
        <ul className={classes.CommentsList__list}>
          {comments?.map((comment) => {
            return (
              <ItemComment
                key={comment._id}
                newsId={newsId}
                comment={comment}
                onResponse={onResponse}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CommentsList;
