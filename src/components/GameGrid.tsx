import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import { Genre } from '../models/genre';

import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props): JSX.Element {
  const { loading, data: games, error } = useGames(selectedGenre);

  const skeletons = Array.from({ length: 15 }, (_, i) => i)

  if (selectedGenre && games.length === 0) {
    return <p>No games match that genre.</p>;
  }

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