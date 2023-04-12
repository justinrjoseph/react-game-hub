import { useEffect, useState } from 'react';

import { AxiosError, CanceledError } from 'axios';

import apiClient from '../services/api-client';
import { Game, GamesRes } from '../models/game';

function useGames(): { loading: boolean; games: Game[]; error: string } {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<GamesRes>('/games', { signal: controller.signal })
      .then(({ data: { results } }) => {
        setGames(results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { loading, games, error };
}

export default useGames;