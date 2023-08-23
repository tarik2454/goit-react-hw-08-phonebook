import { createGlobalStyle, styled } from 'styled-components';
import '@csstools/normalize.css';
import { motion } from 'framer-motion';
// import 'normalize.css';
import { Link, NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  background-color: ${({ theme }) => theme.colors.$primiryBgColor};
  font-size: 17px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  background: linear-gradient(180deg,#6a9bd8,#ffb6cd);
  }
`;

export const GlobalStyledH1 = styled(motion.h1)`
  margin-bottom: 25px;
  font-size: ${props => props.$fontSize || '25px'};
  color: ${props => props.theme.colors.$secondaryTextColor};
  text-align: center;
`;

export const GlobalStyledH2 = styled.h2`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.$primiryTextColor};
  font-size: 20px;
  text-align: center;
`;

export const GlobalStyledLink = styled(Link)`
  font-size: 20px;
  color: ${props => props.theme.colors.$primiryTextColor};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.$accentColor};
  }
`;

export const GlobalStyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: ${props => props.$padding || '0 0'};
  font-size: ${props => props.$fontSize || '20px'};
  color: ${props => props.$color || props.theme.colors.$primiryTextColor};
  transition: ${theme => theme.$transition};

  &:after {
    display: block;
    content: '';
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.$accentColor};
    transform-origin: left;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active,
  &:hover {
    &:after {
      width: 100%;
    }
  }

  &:hover:not(.active) {
  }
`;

export const GlobalStyledButton = styled(motion.button)`
  display: block;
  padding: ${props => props.$padding || '5px 15px'};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.$black};
  background-color: lightblue;
  border-radius: ${props => props.theme.$borderRadius};
  transition: ${props => props.theme.$transition};

  &:hover,
  &:focus {
    color: white;
    background-color: ${props => props.theme.colors.$accentColor};
  }
`;

export const GlobalStyledMain = styled.main``;

export const GlobalStyledSection = styled(motion.section)`
  width: 100%;
  padding: 30px 40px;
  background-color: ${props => props.theme.colors.$secondaryBgColor};
  border-radius: ${props => props.theme.$borderRadius};
  opacity: 0.7;
`;

export const GlobalStyledContainer = styled.div`
  /* width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 480px; */
  margin: 0px auto;
  padding: 0px 15px;
  max-width: 768px;

  /* @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 24px;
  } */
`;
