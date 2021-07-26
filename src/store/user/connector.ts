import { connect } from 'react-redux';
import * as actions from './actions';
import { State } from '..';

function mapState({
  user: {
    token,
    firstName,
    lastName,
    email,
    role,
  },
}: State) {
  return {
    token,
    firstName,
    lastName,
    email,
    role,
  };
}

export default connect(mapState, actions);
