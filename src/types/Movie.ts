export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  mainActor: string;
  description: string;
}

export type NewMovie = Omit<Movie, "id">;

export type PatchMovie = Partial<Movie>;
