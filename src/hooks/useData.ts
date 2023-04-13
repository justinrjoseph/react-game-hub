import { useEffect, useState } from 'react';

import { AxiosError, CanceledError } from 'axios';

import { DataRes } from '../models/data';
import apiClient from '../services/api-client';

function useData<T>(url: string): { loading: boolean; data: T[]; error: string } {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<DataRes<T>>(url, { signal: controller.signal })
      .then(({ data: { results } }) => {
        setData(results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { loading, data, error };
}

export default useData;