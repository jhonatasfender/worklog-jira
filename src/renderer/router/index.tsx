import { Routes, Route } from 'react-router-dom';

import TimeWork from '../components/TimeWork';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <TimeWork />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
