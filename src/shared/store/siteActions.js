import { clientApi as api } from '../../client/clientApi';

export const fetchUsersAction = () => async () => {
  const { json, status } = await api.user.retrieve();
  console.log(json, status);
};
