import { useParams } from "react-router-dom";
import Movie from "./components/Movie";
import { useMovieDocument } from "../../hooks/useMovieDocument";
import Comments from "./components/Comments";
import useMovieComments from "../../hooks/useMovieComments";
import CommentForm from "../../components/CommentForm";
import { NewComment } from "../../types/Comment";
import { addNewComment } from "../../service/comments";
import { useAuthUnsafe } from "../../UserProvider";

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, movieLoading] = useMovieDocument(id!);
  const [comments, commentsLoding] = useMovieComments(id!);
  const user = useAuthUnsafe();

  function handleAddComment({
    body,
    rating,
  }: {
    body: string;
    rating: number;
  }) {
    const comment: NewComment = {
      body,
      rating,
      movieId: id!,
      author: user.displayName ?? user.email ?? "anonymus",
    };

    addNewComment(comment);
  }

  if (movieLoading || commentsLoding) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <Movie movie={movie} />
      <Comments comments={comments ?? []} />
      <CommentForm onSave={handleAddComment} />
    </>
  );
};

export default MoviePage;
