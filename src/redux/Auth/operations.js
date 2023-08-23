import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-toastify';

export const baseURL = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  baseURL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  baseURL.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await baseURL.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await baseURL.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await baseURL.post('users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue('Token is not exist');
    }
    try {
      setToken(savedToken);
      const { data } = await baseURL.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
