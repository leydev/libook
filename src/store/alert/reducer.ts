import { SET_INFO } from './actionsType';
import type {
  Action,
  State,
  SetAlertInfoReturn,
} from './interfaces';

const userState: State = {
  open: false,
  icon: '',
  message: '',
  type: 'info',
};

function reducer(state = userState, action: Action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, ...action.value as SetAlertInfoReturn };
    default:
      return state;
  }
}

export default reducer;
