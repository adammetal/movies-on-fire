import { type Comment as CommentType } from "../../../types/Comment";
import Comment from "./Comment";

interface CommentsProps {
  comments: CommentType[];
}

export default function Comments({ comments }: CommentsProps) {
  return (
    <section className="comments">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </section>
  );
}
