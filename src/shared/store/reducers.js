import { combineReducers } from 'redux';
import { GET_ALL_USERS } from './siteActionTypes';

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

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state };
    default:
      return state;
  }
};

export default combineReducers({ app: appReducer });
