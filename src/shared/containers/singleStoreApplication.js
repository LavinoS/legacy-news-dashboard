import { connect } from 'react-redux';
import { registerMethod, loginMethod } from '../store/site/siteDispatchProps';
import dispatchPropsBuilder from '../helpers/dispatchPropsBuilder';
import singleStoreContainer from '../../containers/singleStoreContainer';

export const mapStateToProps = (state) => ({
  state: state.app,
  authToken: state.app.authToken,
});

const mapDispatchToProps = dispatchPropsBuilder({
  registerMethod,
  loginMethod,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(singleStoreContainer);
