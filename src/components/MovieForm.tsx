import { useState } from "react";
import { NewMovie } from "../types/Movie";

import "./MovieForm.css";

interface MovieFormProps {
  onSave: (movie: NewMovie) => void;
}

const MovieForm = ({ onSave }: MovieFormProps) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [mainActor, setMainActor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave({
      title,
      year: Number(year),
      director,
      mainActor,
      description,
    });

    setTitle("");
    setYear("");
    setDirector("");
    setMainActor("");
    setDescription("");
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title (required):</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          id="director"
          name="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mainActor">Main Actor:</label>
        <input
          type="text"
          id="mainActor"
          name="mainActor"
          value={mainActor}
          onChange={(e) => setMainActor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Create Movie</button>
    </form>
  );
};

export default MovieForm;
