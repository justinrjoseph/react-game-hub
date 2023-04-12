import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid 
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import { Platform } from '../models/game';

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props): JSX.Element {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
  };

  return (
    <HStack marginY={'.25rem'}>
      {platforms.map((platform) => {
        return <Icon as={iconMap[platform.slug]} color="gray.500" />
      })}
    </HStack>
  );
}

export default PlatformIconList