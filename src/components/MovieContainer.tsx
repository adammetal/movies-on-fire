import { Movie } from '../types/Movie';

import './MovieContainer.css';

interface MovieContainerProps {
  movie: Movie;
}

const MovieContainer = ({ movie }: MovieContainerProps) => {
  return (
    <div className="movie-container">
      <header className="movie-header">
        <h1>{movie.title}</h1>
        <span className="movie-year">{movie.year}</span>
      </header>
      <section className="movie-details">
        <p className="movie-description">{movie.description}</p>
        <table className="movie-table">
          <tbody>
            <tr>
              <td><strong>Director:</strong></td>
              <td>{movie.director}</td>
            </tr>
            <tr>
              <td><strong>Main Actor:</strong></td>
              <td>{movie.mainActor}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MovieContainer;
