import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import { SortCategory } from '../models/sort-category';

const sortCategories: SortCategory[] = [
  { label: 'Relevance', value: '' },
  { label: 'Date added', value: '-added' },
  { label: 'Name', value: 'name' },
  { label: 'Release date', value: '-released' },
  { label: 'Popularity', value: '-metacritic' },
  { label: 'Average rating', value: '-rating' }
];

interface Props {
  onSort: (category: string) => void;
  selectedCategory: string;
}

function SortSelector({ onSort, selectedCategory }: Props): JSX.Element {
  const sortCategory = sortCategories.find((sortCategory) => {
    return sortCategory.value === selectedCategory;
  });

  return (
    <Menu>
      <MenuButton as={Button}
        rightIcon={<BsChevronDown />}>
        Order by: {sortCategory?.label || 'Relevance'}
      </MenuButton>

      <MenuList>
        {sortCategories.map((sortCategory) => {
          return <MenuItem key={sortCategory.value}
            onClick={() => onSort(sortCategory.value)}>
            {sortCategory.label}
          </MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;