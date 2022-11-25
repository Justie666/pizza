import React, { useCallback, useContext, useState } from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 250),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChangeInput}
      placeholder={'Поиск пиццы...'}
    />
  );
};

export default Search;
