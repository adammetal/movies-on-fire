import { useCollectionData } from "react-firebase-hooks/firestore";
import { movieQuery } from "../service/movies";

export function useMoviesCollection() {
  const [values, loading] = useCollectionData(movieQuery);
  return [values, loading] as const;
}
