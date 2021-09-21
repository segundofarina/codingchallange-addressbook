import React from 'react';
import styles from './styles';

type SearchProps = {
  searchValue: string;
  changeSearchValue: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchValue, changeSearchValue }) => {
  return (
    <input
      style={styles.root}
      onChange={(e) => changeSearchValue(e.target.value)}
      value={searchValue}
    />
  );
};

Search.displayName = 'Search';
export default Search;
