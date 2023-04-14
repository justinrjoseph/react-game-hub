import { useState } from 'react';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';

import styles from './PlatformSelector.module.css';

function PlatformSelector(): JSX.Element | null {
  const { data: platforms, error } = usePlatforms(null);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button}
        rightIcon={<BsChevronDown />}
        className={styles.button}>
        Platforms
      </MenuButton>

      <MenuList>
        {platforms.map((platform) => {
          return <MenuItem key={platform.id}>{platform.name}</MenuItem>
        })}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;