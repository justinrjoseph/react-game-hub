import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../models/platform';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props): JSX.Element | null {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button}
        rightIcon={<BsChevronDown />}
        marginInlineEnd={5}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>

      <MenuList>
        {platforms.map((platform) => {
          return <MenuItem key={platform.id}
            onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;