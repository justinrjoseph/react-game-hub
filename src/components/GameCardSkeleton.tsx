import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

function GameCardSkeleton(): JSX.Element {
  return (
    <Card inlineSize="18.75rem" borderRadius={10} overflow="hidden">
      <Skeleton blockSize="12.5rem" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;