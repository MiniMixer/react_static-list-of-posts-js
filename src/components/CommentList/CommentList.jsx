import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ postId, comments }) => (
  <div className="CommentList">
    {comments
      .filter(comment => comment.postId === postId)
      .map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
  </div>
);
