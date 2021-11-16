import TimeWork from './components/TimeWork';
import Toolbar from './components/Toolbar';
import GlobalStyle from './theme/globalStyles';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Toolbar />
      <TimeWork />
    </>
  );
};

export default App;
