import { useState } from "react";

interface CommentFormProps {
  onSave: (comment: { body: string; rating: number }) => void;
}

export default function CommentForm({ onSave }: CommentFormProps) {
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("1");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSave({
      body,
      rating: Number(rating),
    });

    setBody("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min={1}
          max={10}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
