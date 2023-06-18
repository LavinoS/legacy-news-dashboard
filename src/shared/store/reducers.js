import { combineReducers } from 'redux';
import { GET_AUTH_USER } from './siteActionTypes';

const initialState = {};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_AUTH_USER:
      return { ...state, authToken: action.data.token };
    default:
      return state;
  }
};

export default combineReducers({ app: appReducer });
