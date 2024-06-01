import { formatDate } from "@/utils/formatDate";
import style from "@/styles/comments.module.css";

type CommentProps = {
  comment: {
    name: string;
    text: string;
    createdAt: number;
  };
};

const Comment = ({ comment: { name, text, createdAt } }: CommentProps) => (
  <div className={style.commentContainer}>
    <div className={style.commentItemHeader}>
      <h4>{name || "/"}</h4>
      <p>{formatDate(createdAt)}</p>
    </div>
    <p>{text || "/"}</p>
  </div>
);

export default Comment;
