/**
 * State interface
 */

export interface State {
  open: boolean;
  icon: string;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
}

/**
 * Return types to actions
 */

export interface SetAlertInfoReturn {
  type: string;
  value: Partial<State>;
}

/**
 * Action interface
 */
export interface Action {
  type: string,
  value: SetUserInfoReturn
}
