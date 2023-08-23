import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
