import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
