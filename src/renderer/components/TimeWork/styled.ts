import styled from 'styled-components';

export const Wrapper = styled.div`
  -webkit-app-region: drag;
  display: flex;
  justify-content: center;
`;

export const SVG = styled.svg`
  display: block;
  margin: 20px auto;
  max-width: 100%;
`;

export const SVGCircleBG = styled.circle`
  fill: none;
`;

export const SVGCircle = styled.circle`
  fill: none;
  transition: stroke-dashoffset 850ms ease-in-out;
`;

export const SVGCircleText = styled.text`
  font-size: 2rem;
  text-anchor: middle;
  fill: #d9edfe;
  font-weight: 400;
  font-family: 'Lato', monospace;
`;
