import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

function hasPostId(data, targetPostId) {
  return data.some(item => item.postId === targetPostId);
}

export const PostInfo = ({ post, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {comments ? (
      hasPostId(comments, post.id) ? (
        <CommentList postId={post.id} comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
