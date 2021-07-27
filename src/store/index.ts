import { combineReducers, createStore } from 'redux';
import user from './user/reducer';
import alert from './alert/reducer';

import { UserState } from './user/user';
import { State as StateAlert } from './alert/interfaces';

export interface State {
  user: UserState,
  alert: StateAlert
}

const reducers = combineReducers({
  user,
  alert,
});

export default createStore(reducers);
