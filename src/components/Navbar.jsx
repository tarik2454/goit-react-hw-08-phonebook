import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutThunk } from 'redux/Auth/operations';
import { styled } from 'styled-components';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success('Goobye!');
      });
  };

  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>

      <AuthWrapper>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
        <NavLinkStyled to="/register">Register</NavLinkStyled>

        <button onClick={handleLogout}>Logout</button>
      </AuthWrapper>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavLinkStyled = styled(NavLink)``;

const AuthWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
