import {
  DocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import store from "../firebase/store";
import { Comment, NewComment } from "../types/Comment";

// Make it generic dude
const converter = {
  toFirestore(movie: Comment) {
    return movie;
  },
  fromFirestore(snap: DocumentSnapshot, options: SnapshotOptions): Comment {
    const data = snap.data(options) as Omit<Comment, "id">;
    return {
      id: snap.id,
      ...data,
    };
  },
};

export const commentCollection = collection(store, "comments").withConverter(
  converter
);

export function commentQuery(movieId: string) {
  return query(commentCollection, where('movieId', '==', movieId));
}

export async function addNewComment(comment: NewComment) {
  return await addDoc(commentCollection, comment);
}
