import { registerAction, loginAction } from '../siteActions';

export const registerMethod =
  (dispatch) =>
  ({ payload }) => {
    dispatch(registerAction({ payload }));
  };

export const loginMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(loginAction({ payload, callback }));
  };
