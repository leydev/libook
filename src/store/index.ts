import { combineReducers, createStore } from 'redux';
import user from './user/reducer';

import { UserState } from './user/user';

export interface State {
  user: UserState
}

const reducers = combineReducers({
  user,
});

export default createStore(reducers);
