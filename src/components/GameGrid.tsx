import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import apiClient from '../services/api-client';
import {Text} from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface GamesRes {
  count: number;
  results: Game[];
}

function GameGrid () {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<GamesRes>('/games')
      .then(({ data: { results } }) => setGames(results))
      .catch((err: AxiosError) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>
        })}
      </ul>
    </>
  );
}

export default GameGrid;