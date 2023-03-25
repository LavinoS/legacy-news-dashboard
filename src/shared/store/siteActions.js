import { clientApi as api } from '../../client/clientApi';
import showNotification from '../../components/ui/showNotification';

export const registerAction =
  ({ payload, callback }) =>
  async () => {
    const { json, status } = await api.user.register(payload);

    showNotification({ message: json.message });
  };
