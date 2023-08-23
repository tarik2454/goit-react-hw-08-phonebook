import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/Auth/operations';
import {
  GlobalStyledButton,
  GlobalStyledContainer,
  GlobalStyledH1,
  GlobalStyledSection,
} from 'styles/GlobalStyle';
import { styled } from 'styled-components';

const Animate = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const AnimateFromRigth = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      // delay: custom * 0.1,
      duration: 0.1,
    },
  }),
};
const AnimateFromLeft = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      // delay: custom * 0.1,
      duration: 0.1,
    },
  }),
};
const buttonAnimate = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: custom => ({
    opacity: 1,
    scale: 1,

    transition: {
      delay: custom * 0.1,
      duration: 0.1,
    },
  }),
};

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const credentials = { name, email, password };
    dispatch(registerThunk(credentials));
  };

  return (
    <GlobalStyledContainer>
      <GlobalStyledSection initial="hidden" whileInView="visible">
        <GlobalStyledH1 variants={Animate}>Register</GlobalStyledH1>
        <StyledForm onSubmit={handleSubmit}>
          <FormItem>
            <StyledFormLabel htmlFor="name">Name: </StyledFormLabel>
            <StyledInput
              variants={AnimateFromLeft}
              custom={1}
              type="text"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <StyledFormLabel htmlFor="email">Email: </StyledFormLabel>
            <StyledInput
              variants={AnimateFromRigth}
              custom={2}
              type="text"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <StyledFormLabel htmlFor="password">Password: </StyledFormLabel>
            <StyledInput
              variants={AnimateFromLeft}
              custom={3}
              type="text"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </FormItem>
          <FormItem>
            <GlobalStyledButton variants={buttonAnimate} type="submit">
              Register
            </GlobalStyledButton>
          </FormItem>
        </StyledForm>
      </GlobalStyledSection>
    </GlobalStyledContainer>
  );
};

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: ${({ theme }) => theme.$transition};
  text-align: center;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(3) {
    margin-bottom: 5px;
  }
`;

export const StyledFormLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInput = styled(motion.input)`
  width: 100%;
  min-width: 270px;
  padding: 7px 15px;
  font-size: 15px;
  text-align: left;
  border: ${({ theme }) => theme.input.$border};
  border-radius: ${({ theme }) => theme.input.$borderRadius};
  outline: transparent;

  transition: ${({ theme }) => theme.$transition};

  &:focus {
    border: 1px solid #437aa5;
  }
`;
