import { useState } from 'react';

import { Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import { Genre } from './models/genre';

function App(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`
      }}
      templateColumns={{
        base: '1fr',
        lg: '12.5rem 1fr'
      }}
      paddingX="2rem">
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList onSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
