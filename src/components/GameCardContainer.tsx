import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props): JSX.Element {
  return (
    <Box inlineSize="18.75rem" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;