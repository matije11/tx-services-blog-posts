import { GetServerSideProps } from "next";
import { PostsList, Header } from "@/components";

export type Post = {
  id: string;
  createdAt: number;
  title: string;
  description: string;
  text: string;
};

export type PostProps = {
  posts: Post[];
};

const Home = ({ posts }: PostProps) => {
  return (
    <>
      <Header />
      <PostsList posts={posts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PostProps> = async () => {
  const res = await fetch(`https://5ebd9842ec34e900161923e7.mockapi.io/post`);
  const posts: Post[] = await res.json();

  return { props: { posts } };
};

export default Home;
