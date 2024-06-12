import { useDocumentData } from "react-firebase-hooks/firestore";
import { getMovieDoc } from "../service/movies";
import { Movie } from "../types/Movie";

export function useMovieDocument(id: string) {
  const [value, loading] = useDocumentData<Movie>(getMovieDoc(id));
  return [value, loading] as const;
}
