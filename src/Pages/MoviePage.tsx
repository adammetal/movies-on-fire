import { useParams } from 'react-router-dom';
import { Movie } from '../types/Movie';
import MovieContainer from '../components/MovieContainer';

// Test movie data
const movies: { [key: string]: Movie } = {
  '1': {
    id: '1',
    title: 'Epic Adventure: Quest for the Lost Meme',
    year: 2023,
    director: 'Jordan Stream',
    mainActor: 'Taylor Swiftie',
    description: 'A wild ride through the internet as our heroes search for the legendary lost meme that holds the key to the ultimate online fame. Packed with humor, references, and epic cameos.',
  },
  '2': {
    id: '2',
    title: 'VR High: School of the Future',
    year: 2024,
    director: 'Alexa Byte',
    mainActor: 'Chris TikToker',
    description: 'In a world where virtual reality is the norm, a group of high school students navigate their digital lives, forming friendships, battling cyber villains, and discovering the true meaning of connection beyond screens.',
  },
};

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies[id!];

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
