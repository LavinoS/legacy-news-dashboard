import {
  registerAction,
  loginAction,
  receiveArticlesAction,
  deleteArticleAction,
  updateArticleStatusAction,
  receiveArticleAction,
  createArticleAction,
  updateArticleAction,
} from '../siteActions';

export const registerMethod =
  (dispatch) =>
  ({ payload }) => {
    dispatch(registerAction({ payload }));
  };

export const loginMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(loginAction({ payload, callback }));
  };

export const receiveArticlesMethod =
  (dispatch) =>
  ({ params, callback }) => {
    dispatch(receiveArticlesAction({ params, callback }));
  };

export const deleteArticleMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(deleteArticleAction({ payload, callback }));
  };

export const updateArticleStatusMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(updateArticleStatusAction({ payload, callback }));
  };

export const receiveArticleMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(receiveArticleAction({ payload, callback }));
  };

export const createArticleMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(createArticleAction({ payload, callback }));
  };

export const updateArticleMethod =
  (dispatch) =>
  ({ payload, callback }) => {
    dispatch(updateArticleAction({ payload, callback }));
  };
