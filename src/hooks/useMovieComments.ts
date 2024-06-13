import { useCollectionData } from "react-firebase-hooks/firestore";
import { commentQuery } from "../service/comments";

export default function useMovieComments(movieId: string) {
  const [values, loading] = useCollectionData(commentQuery(movieId));
  return [values, loading] as const;
}
