import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

import GameCardContainer from './GameCardContainer';

function GameCardSkeleton(): JSX.Element {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton blockSize="12.5rem" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}

export default GameCardSkeleton;