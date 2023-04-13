export interface Genre {
  id: number;
  name: string;
}

export interface GenreRes {
  count: number;
  results: Genre[];
}