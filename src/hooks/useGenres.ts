import { useEffect, useState } from 'react';

import { AxiosError, CanceledError } from 'axios';

import apiClient from '../services/api-client';
import { Genre, GenreRes } from '../models/genre';

function useGenres() {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<GenreRes>('/genres', { signal: controller.signal })
      .then(({ data: { results } }) => {
        setGenres(results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { loading, genres, error };
}

export default useGenres;