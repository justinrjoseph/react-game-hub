import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../models/game';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

function GameCard({ game }: Props): JSX.Element {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)} />
      </CardBody>
    </Card>
  );
}

export default GameCard;