import { Game } from '../models/game';

import useData from './useData';

function useGames(): { loading: boolean; data: Game[]; error: string } {
  return useData<Game>('/games');
}

export default useGames;