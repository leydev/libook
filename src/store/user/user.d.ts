/**
 * State interface
 */

export interface UserState {
  token: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

/**
 * Return types to actions
 */

export interface SetUserTokenReturn {
  type: string;
  value: string;
}

export interface SetUserInfoReturn {
  type: string;
  value: Partial<UserState>;
}

/**
 * Action interface
 */
export interface Action {
  type: string,
  value: SetUserTokenReturn | SetUserInfoReturn
}
