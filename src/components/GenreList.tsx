import { Text } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';

function GenreList(): JSX.Element {
  const { genres, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
    </>
  );
}

export default GenreList;