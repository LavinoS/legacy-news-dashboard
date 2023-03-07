import { fetchUsersAction } from '../siteActions';

export const fetchUsers = (dispatch) => () => {
  dispatch(fetchUsersAction());
};
