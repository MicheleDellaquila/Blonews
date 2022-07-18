import ItemCommentChildren from './itemComment.children';
import ItemCommentMain from './itemComment.main';
import classes from './itemComment.module.scss';

const ItemComment = ({ newsId, comment, onResponse }) => {
  return (
    <li className={classes.ItemComment}>
      <ItemCommentMain newsId={newsId} onResponse={onResponse} {...comment} />
      {comment?.response._id && (
        <ItemCommentChildren children={comment.response} />
      )}
    </li>
  );
};

export default ItemComment;
