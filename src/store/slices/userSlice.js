import { createSlice } from '@reduxjs/toolkit';
import { signupUser, loginUser, logoutUser } from '../thunks/userThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    isSignedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(signupUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSignedIn = true;
      state.username = action.payload;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSignedIn = true;
      state.username = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(logoutUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSignedIn = false;
      state.username = '';
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userReducer = userSlice.reducer;
