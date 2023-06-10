import { connect } from 'react-redux';
import {
  registerMethod,
  loginMethod,
  receiveArticlesMethod,
  deleteArticleMethod,
  updateArticleStatusMethod,
  receiveArticleMethod,
  createArticleMethod,
  updateArticleMethod,
  receiveUsersMethod,
  receiveUserByIdMethod,
  deleteUserMethod,
  editUserByIdMethod,
} from '../store/site/siteDispatchProps';
import dispatchPropsBuilder from '../helpers/dispatchPropsBuilder';
import singleStoreContainer from '../../containers/singleStoreContainer';

export const mapStateToProps = (state) => ({
  state: state.app,
  authToken: state.app.authToken,
});

const mapDispatchToProps = dispatchPropsBuilder({
  registerMethod,
  loginMethod,
  receiveArticlesMethod,
  deleteArticleMethod,
  updateArticleStatusMethod,
  receiveArticleMethod,
  createArticleMethod,
  updateArticleMethod,
  receiveUsersMethod,
  receiveUserByIdMethod,
  deleteUserMethod,
  editUserByIdMethod,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(singleStoreContainer);
