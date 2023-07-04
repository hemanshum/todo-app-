import Parse from 'parse/react-native.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

const signupUser = createAsyncThunk('user/signup', async (userdetails) => {
  const user = new Parse.User();
  user.set('username', userdetails.username);
  user.set('password', userdetails.password);
  try {
    await user.signUp();
    const currentUser = await Parse.User.currentAsync();
    return currentUser.getUsername();
  } catch (error) {
    return error.message;
  }
});

const loginUser = createAsyncThunk('user/login', async (userdetails) => {
  await Parse.User.logIn(userdetails.username, userdetails.password);
  const currentUser = await Parse.User.currentAsync();
  return currentUser.getUsername();
});

const logoutUser = createAsyncThunk('user/logout', async () => {
  try {
    await Parse.User.logOut();
    const currentUser = await Parse.User.currentAsync();
    return !currentUser && '';
  } catch (error) {
    return error.message;
  }
});

export { signupUser, loginUser, logoutUser };
