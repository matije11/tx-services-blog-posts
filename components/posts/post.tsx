import Link from "next/link";
import { Post as TPost } from "@/pages";
import style from "@/styles/post.module.css";

const Post = ({ post }: { post: TPost }) => (
  <li className={style.listItem}>
    <Link
      href={{
        pathname: "blogpost-page",
        query: {
          id: post.id,
        },
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </Link>
  </li>
);

export default Post;
