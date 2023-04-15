import { default as data } from '../data/genres';
import { Genre } from '../models/genre';

// import useData from './useData';

function useGenres(): {
  loading: boolean;
  data: Genre[];
  error: string | null;
} {
  // return useData<Genre>('/genres');
  return { loading: false, data, error: null };
}

export default useGenres;