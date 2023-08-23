import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/Auth/selectors';
import { styled } from 'styled-components';
import { GlobalStyledNavLink } from 'styles/GlobalStyle';

export const Header = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <StyledHeader>
      <StyledInner>
        <GlobalStyledNavLink to="/">Home</GlobalStyledNavLink>
        {isLoggedIn ? (
          <>
            <GlobalStyledNavLink to="/contacts">Contact</GlobalStyledNavLink>
            <div>{userName}</div>
          </>
        ) : null}
        {children}
      </StyledInner>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
  border-radius: ${({ theme }) => theme.$borderRadius};
  opacity: 0.7;
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
