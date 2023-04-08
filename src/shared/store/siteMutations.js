import { GET_AUTH_USER } from './siteActionTypes';

export const receiveUserInformation = (data) => ({
  type: GET_AUTH_USER,
  data,
});
