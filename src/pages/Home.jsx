import React from 'react';
import { styled } from 'styled-components';

import {
  GlobalStyledSection,
  GlobalStyledContainer,
  GlobalStyledNavLink,
  GlobalStyledH1,
} from 'styles/GlobalStyle';

export const Home = () => {
  return (
    <GlobalStyledContainer>
      <GlobalStyledSection>
        <GlobalStyledH1>Your phonebook application</GlobalStyledH1>
        <p>
          What was the name of that person? A unified phone book with integrated
          keyword search is extremely helpful when this question comes up.
          Wherever, whenever. Your phone book is always at hand.
        </p>
        <br />
        To use the application, you need to
        <GlobalStyledNavLink $padding="0px 7px" $color="#437aa5" to="/login">
          Sign up
        </GlobalStyledNavLink>
        or
        <GlobalStyledNavLink $padding="0px 7px" $color="#437aa5" to="/register">
          Sign in
        </GlobalStyledNavLink>
      </GlobalStyledSection>
    </GlobalStyledContainer>
  );
};

export const StyledSpan = styled.span`
  display: block;
`;
