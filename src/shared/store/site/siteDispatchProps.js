import {
  registerAction,
  loginAction,
  receiveArticlesAction,
  deleteArticleAction,
  updateArticleStatusAction,
  receiveArticleAction,
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
  ({ callback }) => {
    dispatch(receiveArticlesAction({ callback }));
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
