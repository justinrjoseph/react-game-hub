import { useState } from 'react';

import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { GameQuery } from './models/game-query';

function App(): JSX.Element {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenreList onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
            selectedGenre={gameQuery.genre} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Flex marginBlockEnd={5}>
          <PlatformSelector onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
            selectedPlatform={gameQuery.platform} />
          <SortSelector onSort={(sortCategory) => {
              setGameQuery({ ...gameQuery, sortCategory })
            }}
            selectedCategory={gameQuery.sortCategory} />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
