import { GameQuery } from '../models/game-query';
import { Game } from '../models/game';

import useData from './useData';

function useGames(gameQuery: GameQuery): {
  loading: boolean;
  data: Game[];
  error: string;
} {
  return useData<Game>('/games', {
    params: {
      search: gameQuery.search,
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortCategory
    }},
    [gameQuery]);
}

export default useGames;