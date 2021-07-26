import { SET_INFO, SET_TOKEN } from './actionsType';
import type {
  Action,
  UserState,
  SetUserTokenReturn,
} from './user';

const userState: UserState = {
  token: '',
  firstName: '',
  lastName: '',
  email: 'wesley.waaraujo@gmail.com',
  password: '123456789',
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
