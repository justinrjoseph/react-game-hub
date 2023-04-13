import { SimpleGrid, Text } from '@chakra-ui/react';

import useData from '../hooks/useData';
import { Game } from '../models/game';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid(): JSX.Element {
  const { loading, data: games, error } = useData<Game>('/games');

  const skeletons = Array.from({ length: 15 }, (_, i) => i)

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {loading && skeletons.map((skeleton) => {
          return <GameCardSkeleton key={skeleton} />;
        })}
        {games && games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;