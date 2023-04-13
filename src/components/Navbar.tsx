import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import ColorModeSwitch from './ColorModeSwitch';

function Navbar(): JSX.Element {
  return (
    <HStack justifyContent="space-between" marginY="1rem">
      <Image src={logo} width="3rem" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;