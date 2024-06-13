export interface Comment {
  id: string;
  author: string;
  body: string;
  rating: number;
  movieId: string; // connetion field
}

export type NewComment = Omit<Comment, "id">;
