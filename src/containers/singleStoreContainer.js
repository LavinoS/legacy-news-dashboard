import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../packages';

export default (props) => {
  const { registerMethod } = props;

  const singleStoreProps = {
    injectedMethods: {
      registerMethod: registerMethod,
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
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};
