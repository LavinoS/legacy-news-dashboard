import React from 'react';

export default (props) => {
  const { fetchUsers } = props;
  fetchUsers();

  return <div></div>;
};
