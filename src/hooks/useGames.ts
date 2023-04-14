import { Game } from '../models/game';
import { Genre } from '../models/genre';

import useData from './useData';

function useGames(selectedGenre: Genre | null): {
  loading: boolean;
  data: Game[];
  error: string
} {
  return useData<Game>('/games', {
    params: { genres: selectedGenre?.id },
  }, [selectedGenre?.id]);
}

export default useGames;