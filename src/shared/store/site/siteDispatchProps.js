import { registerAction } from '../siteActions';

export const registerMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(registerAction({ payload, callback }));
  };
