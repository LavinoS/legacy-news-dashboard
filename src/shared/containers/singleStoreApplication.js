import { connect } from 'react-redux';
import { fetchUsers } from '../store/site/siteDispatchProps';
import dispatchPropsBuilder from '../helpers/dispatchPropsBuilder';
import singleStoreContainer from '../../containers/singleStoreContainer';

export const mapStateToProps = (state) => ({
  state: state.app,
});

const mapDispatchToProps = dispatchPropsBuilder({
  fetchUsers,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(singleStoreContainer);
