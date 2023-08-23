import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    error: '',
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
