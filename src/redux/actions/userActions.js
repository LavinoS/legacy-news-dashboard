import { ActionTypes } from '../constants/ActionTypes';

export const getUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};
