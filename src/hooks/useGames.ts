import { Game } from '../models/game';
import { Genre } from '../models/genre';
import { Platform } from '../models/platform';

import useData from './useData';

function useGames(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
): {
  loading: boolean;
  data: Game[];
  error: string;
} {
  return useData<Game>('/games', {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: selectedPlatform?.id
    }},
    [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames;