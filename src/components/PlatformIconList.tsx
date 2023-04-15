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

import { Platform } from '../models/platform';

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

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props): JSX.Element {
  return (
    <HStack marginY={'.25rem'}>
      {platforms.map((platform) => {
        return <Icon key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500" />
      })}
    </HStack>
  );
}

export default PlatformIconList