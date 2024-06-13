import MoviesListItem from "./components/MoviesListItem";
import MovieForm from "../../components/MovieForm";
import { useMoviesCollection } from "../../hooks/useMoviesCollection";
import { addNewMovie } from "../../service/movies";
import { NewMovie } from "../../types/Movie";

import "./MoviesPage.css";

export default function MoviesPage() {
  const [values, loading] = useMoviesCollection();

  async function handleMovieCreate(movie: NewMovie) {
    await addNewMovie(movie);
  }

  if (loading) {
    return <div className="loading" />;
  }

  return (
    <div className="movies-page">
      <main>
        <header>
          <h1>Movies</h1>
        </header>
        <section>
          {values?.map((movie) => (
            <MoviesListItem key={movie.id} movie={movie} />
          ))}
        </section>
        <header>
          <h1>Create new movie</h1>
        </header>
        <section>
          <MovieForm onSave={handleMovieCreate} />
        </section>
      </main>
    </div>
  );
}
