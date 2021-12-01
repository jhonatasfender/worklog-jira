import { ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

export type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const location = useLocation();

  const isAuthorized = false;

  if (!isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
