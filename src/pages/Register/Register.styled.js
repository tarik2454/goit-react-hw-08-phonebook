import { motion } from 'framer-motion';
import { styled } from 'styled-components';

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
