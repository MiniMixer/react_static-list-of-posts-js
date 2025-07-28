import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import commentsFromServer from '../../api/comments.json';
export const PostInfo = ({ post }) => {
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
