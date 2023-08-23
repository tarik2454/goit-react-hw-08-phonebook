import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logoutThunk } from 'redux/Auth/operations';
import { selectIsLoggedIn, selectUserName } from 'redux/Auth/selectors';
import { styled } from 'styled-components';
import { GlobalStyledNavLink } from 'styles/GlobalStyle';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success(`Goodbye ${userName}!`);
      });
  };

  return (
    <StyledNav>
      {isLoggedIn ? (
        <GlobalStyledNavLink onClick={handleLogout}>
          Sign out
        </GlobalStyledNavLink>
      ) : (
        <StyledList>
          <li>
            <GlobalStyledNavLink to="/login">Login</GlobalStyledNavLink>
          </li>
          <li>
            <GlobalStyledNavLink to="/register">Register</GlobalStyledNavLink>
          </li>
        </StyledList>
      )}
    </StyledNav>
  );
};

export const StyledNav = styled.nav``;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
`;
