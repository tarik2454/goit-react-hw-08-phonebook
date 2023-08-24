import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Layout } from './Layout';
import { Contacts } from 'pages/Contacts';
import { PrivateRoute } from 'HOC/PrivateRoute';
import { PublicRoute } from 'HOC/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/Auth/operations';
import { Loader } from './Loader/Loader';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/Auth/selectors';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div style={{ outline: 'hidden' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              isLoggedIn ? (
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Route>
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/contacts" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};
