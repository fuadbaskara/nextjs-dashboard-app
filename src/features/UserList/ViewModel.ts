import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getUsersData, userListSelector } from '@/store/slices/users';
import {
  filterSelector,
  onChangeSearch,
  onChangeGender,
  onChangePagination,
  onResetFilter,
  onChangeSort,
} from '@/store/slices/filter';
import { SortOrder } from '@/api/models';

const useHomeState = () => {
  const dispatch = useAppDispatch();
  const { data, info, loading } = useAppSelector(userListSelector);
  const { filter } = useAppSelector(filterSelector);
  const [searchValue, setSearchValue] = useState('');

  const fetchUserList = (params?: any) => {
    dispatch(getUsersData({ params }));
  };

  const onSearch = (keyword: string) => {
    dispatch(onChangeSearch({ keyword }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(onSearch, 500), []);

  const onDebounceSearch = (keyword: string) => {
    setSearchValue(keyword);
    debounceSearch(keyword.toLowerCase());
  };

  const onSort = (sortBy: string, sortOrder: SortOrder) => {
    dispatch(onChangeSort({ sortBy, sortOrder }));
  };

  const onPaginationChange = (page: number) => {
    dispatch(onChangePagination({ page }));
  };

  const onGenderChange = (value: string) => {
    const gender = value as '' | 'male' | 'female';
    dispatch(onChangeGender({ gender }));
  };

  const onFilterReset = () => {
    setSearchValue('');
    dispatch(onResetFilter());
  };

  useEffect(() => {
    fetchUserList(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return {
    data,
    page: filter.page,
    filter,
    info,
    loading,
    searchValue,
    onSearch: onDebounceSearch,
    onChangeGender: onGenderChange,
    onChangePagination: onPaginationChange,
    onResetFilter: onFilterReset,
    onSort,
  };
};

export default useHomeState;
