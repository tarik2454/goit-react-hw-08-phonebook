import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operations';

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
  },

  extraReducers: builder => {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
