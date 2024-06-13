import { Link } from "react-router-dom";
import { type Movie } from "../../../types/Movie";

interface MovieProps {
  movie: Movie;
}

export default function MoviesListItem({ movie }: MovieProps) {
  return (
    <article>
      <header>
        <Link to={`/movie/${movie.id}`}>
          <h2>{movie.title}</h2>
        </Link>
      </header>
      <p>{movie.description}</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Main Actor</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.mainActor}</td>
            <td>{movie.director}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
