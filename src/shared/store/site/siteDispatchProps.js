import { fetchUsersAction, registerAction } from '../siteActions';

export const registerMethod = (dispatch) => (payload) => {
  dispatch(registerAction(payload));
};

export const fetchUsers = (dispatch) => () => {
  dispatch(fetchUsersAction());
};
