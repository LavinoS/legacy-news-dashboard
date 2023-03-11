import { fetchUsersAction, registerAction } from '../siteActions';

export const registerMethod = (dispatch) => () => {
  dispatch(registerAction);
};

export const fetchUsers = (dispatch) => () => {
  dispatch(fetchUsersAction());
};
