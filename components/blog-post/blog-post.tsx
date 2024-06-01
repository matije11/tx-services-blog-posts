import { formatDate } from "@/utils/formatDate";
import { BlogPostProps } from "@/pages/blogpost-page";
import style from "@/styles/post.module.css";

const BlogPost = ({ post: { title, text, createdAt } }: BlogPostProps) => (
  <div className={style.listItem}>
    <div className={style.listItemHeader}>
      <h2>{title}</h2>
      <p>{formatDate(createdAt)}</p>
    </div>
    <p>{text}</p>
  </div>
);

export default BlogPost;
