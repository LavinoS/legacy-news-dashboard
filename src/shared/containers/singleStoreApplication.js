import { connect } from 'react-redux';
import { registerMethod } from '../store/site/siteDispatchProps';
import dispatchPropsBuilder from '../helpers/dispatchPropsBuilder';
import singleStoreContainer from '../../containers/singleStoreContainer';

export const mapStateToProps = (state) => ({
  state: state.app,
});

const mapDispatchToProps = dispatchPropsBuilder({
  registerMethod,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(singleStoreContainer);
