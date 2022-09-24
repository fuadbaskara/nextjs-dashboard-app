import { combineReducers } from '@reduxjs/toolkit';

// all reducers
import usersReducer from './slices/users';
import filterReducer from './slices/filter';

const rootReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
});

export default rootReducer;
