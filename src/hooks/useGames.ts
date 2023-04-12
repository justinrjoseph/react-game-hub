import { useEffect, useState } from 'react';

import { AxiosError, CanceledError } from 'axios';

import apiClient from '../services/api-client';
import { Game, GamesRes } from '../models/game';

function useGames(): { games: Game[]; error: string } {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient.get<GamesRes>('/games', { signal: controller.signal })
      .then(({ data: { results } }) => setGames(results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;