import { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getUsersData, userListSelector } from '@/store/slices/users';
import {
  filterSelector,
  onChangeSearch,
  onChangeGender,
  onChangePagination,
  onChangeSort,
} from '@/store/slices/filter';

const useHomeState = () => {
  const dispatch = useAppDispatch();
  const { data, info, loading } = useAppSelector(userListSelector);
  const { filter } = useAppSelector(filterSelector);

  const fetchUserList = (params?: any) => {
    dispatch(getUsersData({ params }));
  };

  const onSearch = (keyword: string) => {
    dispatch(onChangeSearch({ keyword: keyword.toLowerCase() }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(onSearch, 500), []);

  const onSort = (sortBy: string, sortOrder: 'ascend' | 'descend') => {
    dispatch(onChangeSort({ sortBy, sortOrder }));
  };

  const onPaginationChange = (page: number) => {
    dispatch(onChangePagination({ page }));
  };

  const onGenderChange = (value: string) => {
    const gender = value as '' | 'male' | 'female';
    dispatch(onChangeGender({ gender }));
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
    onSearch: debounceSearch,
    onChangeGender: onGenderChange,
    onChangePagination: onPaginationChange,
    onSort,
  };
};

export default useHomeState;
