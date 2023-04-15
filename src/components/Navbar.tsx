import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (term: string) => void;
}

function Navbar({ onSearch }: Props): JSX.Element {
  return (
    <HStack marginY="1rem">
      <Image src={logo} width="3rem" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;