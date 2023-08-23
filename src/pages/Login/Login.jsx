import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/Auth/operations';
import {
  GlobalStyledButton,
  GlobalStyledContainer,
  GlobalStyledH1,
  GlobalStyledSection,
} from 'styles/GlobalStyle';
import {
  FormItem,
  StyledForm,
  StyledFormLabel,
  StyledInput,
} from './Login.styled';

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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const credentials = { email, password };

    dispatch(loginThunk(credentials))
      .unwrap()
      .then(response => {
        toast.success(`Welcome ${response.user.name}`);
      });
  };

  return (
    <GlobalStyledContainer>
      <GlobalStyledSection initial="hidden" whileInView="visible">
        <GlobalStyledH1 variants={Animate}>Login</GlobalStyledH1>
        <StyledForm onSubmit={handleSubmit}>
          <FormItem>
            <StyledFormLabel htmlFor="email">Email: </StyledFormLabel>
            <StyledInput
              variants={AnimateFromLeft}
              custom={1}
              type="email"
              id="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </FormItem>
          <FormItem>
            <StyledFormLabel htmlFor="password">Password: </StyledFormLabel>
            <StyledInput
              variants={AnimateFromRigth}
              custom={2}
              type="password"
              id="password"
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </FormItem>
          <FormItem>
            <GlobalStyledButton variants={buttonAnimate}>
              Log In
            </GlobalStyledButton>
          </FormItem>
        </StyledForm>
      </GlobalStyledSection>
    </GlobalStyledContainer>
  );
};
