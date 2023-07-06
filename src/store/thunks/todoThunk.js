import Parse from 'parse/react-native.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

const createTodo = createAsyncThunk('todo/create', async params => {
  await Parse.Cloud.run('AddNewTodo', params);
  return response.id;
});

const fetchTodos = createAsyncThunk('todo/fetch', async () => {
  const response = await Parse.Cloud.run('fetchTodos');
  return response;
});

export { createTodo, fetchTodos };
