import { Heading } from '@chakra-ui/react';

import { GameQuery } from '../models/game-query';

interface Props {
  gameQuery: GameQuery;
}

function ResultsHeading({ gameQuery }: Props): JSX.Element {
  const { platform, genre } = gameQuery;

  return (
    <Heading as="h1" marginBlockEnd="1.25rem" fontSize="5xl">
      {`${platform?.name || ''} ${genre?.name || ''} Games`.trim()}
    </Heading>
  );
}

export default ResultsHeading;