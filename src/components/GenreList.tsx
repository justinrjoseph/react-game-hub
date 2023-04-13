import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

function GenreList(): JSX.Element | null {
  const { loading, data: genres, error } = useGenres();

  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <>
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