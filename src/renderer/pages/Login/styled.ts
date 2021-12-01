import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3.1rem 1.5rem;
  height: 19.4rem;

  * {
    font-family: 'Lato', monospace;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
`;

export const Label = styled.label`
  color: #819294;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 0.2rem solid #4a5763;
  margin-bottom: 1rem;
  height: 3rem;
  color: #d5dcd9;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;
