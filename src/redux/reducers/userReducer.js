import { ActionTypes } from '../constants/ActionTypes';

const initialState = {
  users: [
    {
      id: 'sU7Mjw2TN9id6bMYPdkJA',
      userName: 'LavinoS',
      email: 'vasile.mihalache99@gmail.com',
      password: 'test123',
    },
  ],
};
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_USERS:
      return state;
    default:
      return state;
  }
};
