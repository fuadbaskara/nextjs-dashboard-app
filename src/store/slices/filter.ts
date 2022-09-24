/* eslint-disable operator-linebreak */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { CommonListParams } from '@/api/models';

export type FilterState = {
  filter: CommonListParams;
};

const initialState: FilterState = {
  filter: {
    results: 10,
    page: 1,
    pageSize: 10,
    nat: 'us,fr,au',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangePagination(state, action: PayloadAction<{ page: number }>) {
      const { page } = action.payload;
      state.filter.page = page;
    },
    onChangeSearch(state, action: PayloadAction<{ keyword: string }>) {
      const { keyword } = action.payload;
      state.filter.keyword = keyword;
    },
    onChangeGender(state, action: PayloadAction<{ gender: '' | 'male' | 'female' }>) {
      const { gender } = action.payload;
      state.filter.gender = gender;
    },
    onChangeSort(
      state,
      action: PayloadAction<{ sortBy: string; sortOrder: 'ascend' | 'descend' }>,
    ) {
      const { sortBy, sortOrder } = action.payload;
      state.filter.sortBy = sortBy;
      state.filter.sortOrder = sortOrder;
    },
  },
});

// Export all of the actions:
export const { onChangePagination, onChangeSearch, onChangeGender, onChangeSort } =
  filterSlice.actions;

// Create and export the selector:
export const filterSelector = (state: RootState) => state.filter;

// It is a convention to export reducer as a default export:
export default filterSlice.reducer;
