import { connect } from 'react-redux';
import * as actions from './actions';
import { State } from '..';

function mapState({
  alert: {
    icon,
    message,
    open,
    type,
  },
}: State) {
  return {
    icon,
    message,
    open,
    type,
  };
}

export default connect(mapState, actions);
