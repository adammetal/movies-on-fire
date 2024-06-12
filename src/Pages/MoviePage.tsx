import { useParams } from 'react-router-dom';
import MovieContainer from '../components/MovieContainer';
import { useMovieDocument } from '../hooks/useMovieDocument';


const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, loading] = useMovieDocument(id!);

  if (loading) {
    return <div>Loading...</div>
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <MovieContainer movie={movie} />
    </div>
  );
};

export default MoviePage;
