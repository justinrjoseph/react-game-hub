import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function Navbar(): JSX.Element {
  return (
    <HStack marginY="1rem">
      <Image src={logo} width="3rem" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;