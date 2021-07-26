import { connect } from 'react-redux';
import * as actions from './actions';
import { State } from '..';

function mapState({
  user: {
    token,
    firstName,
    lastName,
    email,
    password,
    role,
  },
}: State) {
  return {
    token,
    firstName,
    lastName,
    email,
    password,
    role,
  };
}

export default connect(mapState, actions);
