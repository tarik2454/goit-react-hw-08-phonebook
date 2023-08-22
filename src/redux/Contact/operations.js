import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const baseURL = axios.create({
  baseURL: 'https://64df632671c3335b2582897e.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await baseURL.get('/contacts');

      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // console.log(getState());
      const isLoading = getState().contacts.isLoading;
      if (isLoading) {
        toast.info('You have active loading');
        return false;
      }
    },
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await baseURL.post('/contacts', body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await baseURL.delete(`/contacts/${String(id)}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // console.log(getState());
      const isLoading = getState().contacts.isLoading;
      if (isLoading) {
        toast.info('You delete contact');
        return false;
      }
    },
  }
);
