import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} comments={comments} key={post.id} />
    ))}
  </div>
);
