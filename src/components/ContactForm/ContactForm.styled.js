import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  transition: ${({ theme }) => theme.$transition};
  text-align: center;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    margin-bottom: 5px;
  }
`;

export const StyledFormLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
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

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  color: ${props => props.theme.colors.$white};
  background-color: ${props => props.theme.colors.$accentColor};
`;
