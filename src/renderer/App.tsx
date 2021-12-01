import { BrowserRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Router from './router';
import GlobalStyle from './theme/globalStyles';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Toolbar />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
