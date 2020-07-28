export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const VERIFY_USER_SUCCESS = 'VERIFY_USER_SUCCESS'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'

export interface User {
  student?: {
    first_name?: string
    last_name?: string
    email?: string
  }
}

export interface UserState {
  user?: User
  readonly token?: string | null
  readonly isAuthenticated?: boolean
}

interface LoginUserAction {
  type: typeof LOGIN_SUCCESS
  payload: any
}

interface LogoutUserAction {
  type: typeof LOGOUT_SUCCESS
  payload?: any
}

interface RegisterUserAction {
  type: typeof REGISTER_SUCCESS
  payload: any
}

interface VerifyUserAction {
  type: typeof VERIFY_USER_SUCCESS
  payload: any
}

interface SuccessMessageAction {
  type: typeof MESSAGE_SUCCESS
  payload: any
}

interface ErrorMessageAction {
  type: typeof ERROR_MESSAGE
  payload: any
}

export type UserActionTypes =
  | LoginUserAction
  | LogoutUserAction
  | VerifyUserAction
  | RegisterUserAction
  | SuccessMessageAction
  | ErrorMessageAction
