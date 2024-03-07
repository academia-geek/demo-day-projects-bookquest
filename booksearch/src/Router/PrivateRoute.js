import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute({ isAuthenticated, children, ...rest }) {
  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to="/Login" />
  );
}

