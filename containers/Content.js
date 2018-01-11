import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const Content = connect(
  mapStateToProps
)(List)

export default Content;
