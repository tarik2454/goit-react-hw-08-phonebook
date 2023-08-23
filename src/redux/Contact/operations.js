import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseURL } from 'redux/Auth/operations';

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
    // condition: (_, { getState }) => {
    //   // console.log(getState());
    //   const isLoading = getState().contacts.isLoading;
    //   if (isLoading) {
    //     toast.info('You delete contact');
    //     return false;
    //   }
    // },
  }
);
