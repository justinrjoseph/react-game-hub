import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

function GenreList(): JSX.Element {
  const { data: genres, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres.map((genre) => {
          return <ListItem key={genre.id} marginY=".3125rem">
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background)}
                boxSize="2rem"
                borderRadius={8} />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>;
        })}
      </List>
    </>
  );
}

export default GenreList;