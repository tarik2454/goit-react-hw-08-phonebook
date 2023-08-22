import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from './styles/theme';
import { Reset } from './styles/Reset';
import { GlobalStyle } from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { Slide, ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-08-phonebook">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <App />
          <ToastContainer autoClose={1500} hideProgressBar Transition={Slide} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
