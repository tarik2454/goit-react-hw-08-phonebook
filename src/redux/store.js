import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contact/contactsSlice';
import { filterReducer } from './Filter/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './Auth/authSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducerContacts = persistReducer(persistConfig, contactsReducer);
const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducerContacts,
    filter: filterReducer,
    auth: persistedReducerAuth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
