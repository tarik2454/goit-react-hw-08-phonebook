import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-bottom: 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 370px;
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
