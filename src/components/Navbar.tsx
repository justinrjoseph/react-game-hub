import { HStack, Image, Text } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

import ColorModeSwitch from './ColorModeSwitch';

function Navbar(): JSX.Element {
  return (
    <HStack justifyContent="space-between" paddingRight="1rem">
      <Image src={logo} boxSize='5rem' />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;