import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { GlobalStyledContainer } from 'styles/GlobalStyle';

export const Layout = ({ children }) => {
  return (
    <GlobalStyledContainer>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </GlobalStyledContainer>
  );
};
