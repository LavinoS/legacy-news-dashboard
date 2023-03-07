import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../packages';

export default (props) => {
  const { fetchUsers } = props;

  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};
