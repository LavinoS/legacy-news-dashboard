import { clientApi as api } from '../../client/clientApi';
import showNotification from '../../components/ui/showNotification';
import { receiveUserInformation } from './siteMutations';

export const registerAction =
  ({ payload }) =>
  async () => {
    const { json } = await api.user.register(payload);

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

export const receiveArticlesAction =
  ({ callback }) =>
  async () => {
    const { json, status } = await api.articles.receive();

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };

export const deleteArticleAction =
  ({ payload, callback }) =>
  async () => {
    const { status, json } = await api.articles.delete(payload);

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };

export const updateArticleStatusAction =
  ({ payload, callback }) =>
  async () => {
    const { status, json } = await api.articles.changeStatus(payload);

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };

export const receiveArticleAction =
  ({ payload, callback }) =>
  async () => {
    const { status, json } = await api.articles.receiveArticle(payload);

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };
