import { StrictMode } from 'react';

import { render } from 'react-dom';

import App from './renderer/App';
import reportWebVitals from './renderer/reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
