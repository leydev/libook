import { SET_INFO, SET_TOKEN } from './actionsType';
import type { UserState, SetUserTokenReturn } from './user';

export function setUserInfo(value: Partial<UserState>) {
  return {
    type: SET_INFO,
    value,
  };
}

export function setUserToken(value: string): SetUserTokenReturn {
  return {
    type: SET_TOKEN,
    value,
  };
}
