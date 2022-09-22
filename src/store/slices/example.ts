import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import example from '@/api/example';
import { RootState } from '@/store';

const getExampleData = createAsyncThunk<
  any,
  { page?: number; perPage?: number },
  { state: RootState }
>('example/getExampleData', async () => {
  const res = await example.fetchExample();
  return res;
});

const initialState: any = {
  data: [],
  page: 1,
  totalCount: 0,
  loading: false,
};

const exampleSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    onChangeExampleData(state, action: PayloadAction<any>) {
      const { data, page, totalCount } = action.payload;
      state.data = data;
      state.page = page;
      state.totalCount = totalCount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExampleData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExampleData.fulfilled, (state, { payload }) => {
      const { data, page, totalCount } = payload;
      state.data = data;
      state.page = page;
      state.totalCount = totalCount;
      state.loading = false;
    });
    builder.addCase(getExampleData.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Export all of the actions:
export { getExampleData };
export const { onChangeExampleData } = exampleSlice.actions;

// Create and export the selector:
export const selectExamples = (state: RootState) => state.example;

// It is a convention to export reducer as a default export:
export default exampleSlice.reducer;
