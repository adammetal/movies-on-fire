import { Movie as MovieType } from '../../../types/Movie';

import './Movie.css';

interface MovieProps {
  movie: MovieType;
}

export default function Movie({ movie }: MovieProps) {
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
}
