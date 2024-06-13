import {
  DocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  doc,
  query,
} from "firebase/firestore";
import store from "../firebase/store";
import { Movie, NewMovie } from "../types/Movie";

const converter = {
  toFirestore(movie: Movie) {
    return movie;
  },
  fromFirestore(snap: DocumentSnapshot, options: SnapshotOptions): Movie {
    const data = snap.data(options) as Omit<Movie, "id">;
    return {
      id: snap.id,
      ...data,
    };
  },
};

export const movieCollection = collection(store, "movies").withConverter<Movie>(
  converter
);

export const movieQuery = query(movieCollection);

export async function addNewMovie(movie: NewMovie) {
  return await addDoc(movieCollection, movie);
}

export function getMovieDoc(id: string) {
  return doc(store, "movies", id).withConverter<Movie>(converter);
}
