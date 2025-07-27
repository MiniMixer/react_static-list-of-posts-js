import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ post, comments }) => (
  <div className="CommentList">
    {comments.map(comment =>
      comment.postId === post ? (
        <CommentInfo comment={comment} key={comment.id} />
      ) : null,)}
  </div>
);
