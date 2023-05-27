import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage, Dashboard, EditDesign } from '../packages';
import useUserToken from '../hooks/useUserToken';

export default (props) => {
  const {
    registerMethod,
    loginMethod,
    receiveArticlesMethod,
    deleteArticleMethod,
    updateArticleStatusMethod,
    receiveArticleMethod,
    createArticleMethod,
    updateArticleMethod,
  } = props;
  useUserToken(sessionStorage.getItem('token'));

  const singleStoreProps = {
    injectedMethods: {
      registerMethod,
      loginMethod,
      receiveArticlesMethod,
      deleteArticleMethod,
      updateArticleStatusMethod,
      receiveArticleMethod,
      createArticleMethod,
      updateArticleMethod,
    },
  };

  return (
    <Suspense fallback={<></>}>
      <header></header>
      <main>
        <Routes>
          <Route
            path="/register"
            element={<RegisterPage {...singleStoreProps} />}
          />
          <Route path="/login" element={<LoginPage {...singleStoreProps} />} />
          <Route path="/" element={<Dashboard {...singleStoreProps} />} />
          <Route
            path="/edit-design/:id"
            element={<EditDesign {...singleStoreProps} />}
          />
        </Routes>
      </main>
      <footer></footer>
    </Suspense>
  );
};
