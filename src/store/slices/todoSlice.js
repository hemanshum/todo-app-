import { createSlice } from '@reduxjs/toolkit';
import { createTodo, fetchTodos } from '../thunks/todoThunk';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const todoReducer = todoSlice.reducer;
