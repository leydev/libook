import { SET_INFO, SET_TOKEN } from './actionsType';
import type {
  Action,
  UserState,
  SetUserTokenReturn,
} from './user';

const userState: UserState = {
  token: 'Bruno',
  firstName: '',
  lastName: '',
  email: '',
  role: '',
};

function reducer(state = userState, action: Action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.value as SetUserTokenReturn };
    case SET_INFO:
      return { ...state, ...action.value as SetUserTokenReturn };
    default:
      return state;
  }
}

export default reducer;
