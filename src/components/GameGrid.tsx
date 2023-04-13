import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid(): JSX.Element {
  const { loading, games, error } = useGames();

  const skeletons = Array.from({ length: 15 }, (_, i) => i)

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='.625rem'
        spacing={10}>
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