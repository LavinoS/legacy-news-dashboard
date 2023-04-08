import { clientApi as api } from '../../client/clientApi';
import showNotification from '../../components/ui/showNotification';
import { receiveUserInformation } from './siteMutations';

export const registerAction =
  ({ payload }) =>
  async () => {
    const { json, status } = await api.user.register(payload);

    showNotification({ message: json.message });
  };

export const loginAction =
  ({ payload, callback }) =>
  async (dispatch) => {
    const { json, status } = await api.user.login(payload);

    if (callback && typeof callback === 'function' && status === 200) {
      dispatch(receiveUserInformation(json));
      callback(json);
    }
  };
