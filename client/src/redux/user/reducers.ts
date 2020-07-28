import { UserActionTypes } from '../user/types'
import { Reducer } from 'redux'
import {
  UserState,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  VERIFY_USER_SUCCESS,
} from '../user/types'

const INITIAL_STATE: UserState = {
  user: {},
  token: localStorage.getItem('token'),
  isAuthenticated: true,
}

export const userReducer: Reducer<UserState, UserActionTypes> = (
  state = INITIAL_STATE,
  action: UserActionTypes,
): UserState => {
  if (action.type === REGISTER_SUCCESS) {
    return state
  }
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload.token)
    return {
      user: action.payload.user,
      token: action.payload.token,
      isAuthenticated: true,
    }
  }
  if (action.type === LOGOUT_SUCCESS) {
    localStorage.removeItem('token')
    localStorage.clear()
    return {
      user: {},
      token: null,
      isAuthenticated: false,
    }
  }
  if (action.type === VERIFY_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload,
    }
  }

  return state
}
