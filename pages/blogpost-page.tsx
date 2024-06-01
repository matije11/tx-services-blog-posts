import { GetServerSideProps } from "next";
import { Post } from ".";
import { BlogPost, Form, Comments } from "@/components";

export type BlogPostProps = {
  post: Post;
};

const BlogPostPage = ({ post }: BlogPostProps) => {
  return (
    <>
      <BlogPost post={post} />
      <Form />
      <Comments id={post.id} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async ({
  query,
}) => {
  const res = await fetch(
    `https://5ebd9842ec34e900161923e7.mockapi.io/post/${query.id}`
  );
  const post: Post = await res.json();

  return { props: { post } };
};

export default BlogPostPage;
