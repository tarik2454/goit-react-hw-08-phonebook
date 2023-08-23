import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { GlobalStyledContainer, GlobalStyledMain } from 'styles/GlobalStyle';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyledContainer>
        <Header>
          <Navigation />
        </Header>
      </GlobalStyledContainer>
      <GlobalStyledMain>
        <Outlet />
      </GlobalStyledMain>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
