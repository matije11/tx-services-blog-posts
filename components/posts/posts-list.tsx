import Post from "./post";
import { PostProps } from "@/pages";

const PostsList = ({ posts }: PostProps) => (
  <ul>
    {posts.map((post) => (
      <Post post={post} key={post.id} />
    ))}
  </ul>
);

export default PostsList;
