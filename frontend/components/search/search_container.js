import { connect } from 'react-redux'
import Search from './search'

const mapStateToProps = state => {
  return{test: 'test'};
};

const mapDispatchToProps = dispatch => {
  return {test2: 'test2'};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
