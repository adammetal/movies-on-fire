import { type Comment } from "../../../types/Comment";

interface CommentProps {
  comment: Comment
}

export default function Comment({ comment }: CommentProps) {
  return (
    <article className="comment">
      <header className="author">
        <h1>{comment.author}</h1>
      </header>
      <p className="body">
        {comment.body}
      </p>
      <div className="rating">
        {comment.rating} / 10
      </div>
    </article>
  );
}
