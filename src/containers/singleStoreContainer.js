import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../packages';
import useUserToken from '../hooks/useUserToken';

export default (props) => {
  const { registerMethod, loginMethod } = props;
  useUserToken(sessionStorage.getItem('token'));

  const singleStoreProps = {
    injectedMethods: {
      registerMethod: registerMethod,
      loginMethod: loginMethod,
    },
  };

  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route
            path="/register"
            element={<RegisterPage {...singleStoreProps} />}
          />
          <Route path="/login" element={<LoginPage {...singleStoreProps} />} />
          <Route
            path="/"
            element={
              <div
                style={{
                  width: '500px',
                  height: '500px',
                  background: '#ff0',
                }}
              />
            }
          />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};
