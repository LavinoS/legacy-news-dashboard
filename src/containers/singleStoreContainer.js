import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../packages';

export default (props) => {
  const { fetchUsers } = props;

  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};
