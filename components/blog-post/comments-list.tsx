import Comment from "./comment";
import { useFetchComments } from "@/hooks/useFetchComments";
import { Post } from "@/pages";
import style from "@/styles/comments.module.css";

type Comments = {
  id: string;
  postId: string;
  name: string;
  text: string;
  createdAt: number;
};

const Comments = ({ id }: Pick<Post, "id">) => {
  const { isLoading, comments, error } = useFetchComments(id);

  if (isLoading)
    return <p className={style.commentInfo}>Loading comments...</p>;

  if (error) return <p className={style.commentInfo}>{error}</p>;

  if (comments.length === 0)
    return <p className={style.commentInfo}>No comments yet.</p>;

  return (
    <div>
      <div className={style.commentHeader}>
        <p>Comments:</p>
        {comments.length > 0 && <p>Comment count: {comments.length}</p>}
      </div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
