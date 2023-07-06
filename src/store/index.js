import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { todoReducer } from './slices/todoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export default store;

export * from './thunks/userThunk';
export * from './thunks/todoThunk';
