import { Genre } from '../models/genre';

import useData from './useData';

function useGenres(): { loading: boolean; data: Genre[]; error: string } {
  return useData<Genre>('/genres');
}

export default useGenres;