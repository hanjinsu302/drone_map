import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../utils/cookies';

const CheckAuth = ({ children, user }) => {
  const pathname = window.location.pathname;

  const access = getCookie('access');
  const refresh = getCookie('refresh');

  if ((!access && !refresh && pathname !== '/') || user === false) {
    return <Navigate to='/' />;
  }

  if ((!access && pathname !== '/') || user === false) {
    return <Navigate to='/' />;
  }
  if (pathname === '/' && access && user) {
    return <Navigate to='/home' />;
  }

  return children;
};

export default CheckAuth;
