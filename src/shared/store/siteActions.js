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
  ({ params, callback }) =>
  async () => {
    const { json, status } = await api.articles.receive(params);

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
    const { json } = await api.articles.receiveArticle(payload);

    if (callback && typeof callback === 'function') {
      callback(json);
    }
  };

export const createArticleAction =
  ({ payload, callback }) =>
  async () => {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const { status, json } = await api.articles.createArticle(formData);

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };

export const updateArticleAction =
  ({ payload, callback }) =>
  async () => {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const { status, json } = await api.articles.updateArticle(formData);

    if (callback && typeof callback === 'function' && status === 200) {
      callback(json);
    }
  };
