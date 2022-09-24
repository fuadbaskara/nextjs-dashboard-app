import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import user from '@/api/user';
import { RootState } from '@/store';
import { ResponseInfo, User } from '@/api/user/model';

export type UserState = {
  data: User[];
  info: ResponseInfo | null;
  loading: boolean;
};

const getUsersData = createAsyncThunk<any, any, any>('users/getUserList', async ({ params }) => {
  const res = await user.fetchUsers(params);
  return res;
});

const initialState: UserState = {
  data: [],
  info: null,
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsersData.fulfilled, (state, { payload }) => {
      const { results } = payload;
      state.data = results.results;
      state.info = results.info;
      state.loading = false;
    });
    builder.addCase(getUsersData.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Export all of the actions:
export { getUsersData };

// Create and export the selector:
export const userListSelector = (state: RootState) => state.users;

// It is a convention to export reducer as a default export:
export default usersSlice.reducer;
