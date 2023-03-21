import { clientApi as api } from '../../client/clientApi';

export const fetchUsersAction = () => async () => {
  const { json, status } = await api.user.retrieve();
  console.log(json, status);
};

export const registerAction = (payload) => async () => {
  const { json, status } = await api.user.register(payload);
  console.log(json, status);
};
