import styled from 'styled-components';

export const H2 = styled.h2`
  font-family: 'Lato', monospace;
  color: #d5dcd9;
  font-weight: 400;
  width: 17.7rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
`;

export const Action = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    color: #d5dcd9;
  }
`;
