import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import { Genre } from '../models/genre';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props): JSX.Element | null {
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
              <Button fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id
                  ? 'bold'
                  : 'normal'
                }
                variant="link"
                onClick={() => onSelectGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>;
        })}
      </List>
    </>
  );
}

export default GenreList;