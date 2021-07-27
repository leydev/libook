/* eslint-disable import/prefer-default-export */
import { SET_INFO } from './actionsType';
import type { State, SetAlertInfoReturn } from './interfaces';

export function setAlertInfo(value: Partial<State>): SetAlertInfoReturn {
  return {
    type: SET_INFO,
    value,
  };
}
