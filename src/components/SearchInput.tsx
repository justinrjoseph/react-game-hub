import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

function SearchInput({ onSearch }: Props): JSX.Element {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      if (searchRef.current) {
        onSearch(searchRef.current.value);
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input borderRadius={20}
          ref={searchRef}
          placeholder="Search games..."
          variant="filled" />
      </InputGroup>
    </form>
  );
}

export default SearchInput;