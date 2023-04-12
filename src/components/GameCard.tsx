import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

import { Game } from '../models/game';
import getCroppedImageUrl from '../services/image-url';

import CriticScore from './CriticScore';
import GameCardContainer from './GameCardContainer';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

function GameCard({ game }: Props): JSX.Element {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />

        <CardBody>
          <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(({ platform }) => platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}

export default GameCard;