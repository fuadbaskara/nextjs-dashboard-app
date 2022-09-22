import { combineReducers } from '@reduxjs/toolkit';

// example slice
import exampleReducer from './slices/example';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
