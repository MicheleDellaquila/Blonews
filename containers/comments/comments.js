import { useState } from 'react';
import CommentsCreate from './comments.create';
import CommentsList from './comments.list';

const Comments = ({ newsId, comments }) => {
  const [commentsList, setCommentsList] = useState([...comments]);

  // add new comment
  const addNewComment = (newComment) => {
    setCommentsList([...comments, newComment]);
  };

  // update exist comment
  const updateComment = (comment) => {
    const copyCommentsList = commentsList.map();

    // search comment
    const indexComment = copyCommentsList.findIndex(
      (item) => item._id === comment._id,
    );

    // check index exist or not
    if (indexComment >= 0) {
      copyCommentsList.splice(indexComment, 1, comment);
      setCommentsList([...copyCommentsList]);
    }
  };

  return (
    <div className='col-xs-12'>
      <CommentsList
        newsId={newsId}
        number={commentsList.length}
        comments={commentsList}
        onResponse={updateComment}
      />
      <CommentsCreate newsId={newsId} onCreate={addNewComment} />
    </div>
  );
};

export default Comments;
