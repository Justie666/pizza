import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';

const Search: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const updateSearchValue = useCallback(
    debounce((value: any) => {
      dispatch(setSearchValue(value));
    }, 250),
    [],
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
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
