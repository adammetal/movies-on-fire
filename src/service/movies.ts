import { addDoc, collection, query } from "firebase/firestore";
import store from "../firebase/store";
import { Movie, NewMovie } from "../types/Movie";

export const movieCollection = collection(store, "movies").withConverter<Movie>(
  {
    toFirestore(movie) {
      return movie;
    },
    fromFirestore(snap, options): Movie {
      const data = snap.data(options) as Omit<Movie, "id">;
      return {
        id: snap.id,
        ...data,
      };
    },
  }
);

export const movieQuery = query(movieCollection);

export async function addNewMovie(movie: NewMovie) {
  return await addDoc(movieCollection, movie);
}
