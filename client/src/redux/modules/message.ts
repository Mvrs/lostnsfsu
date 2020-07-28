import {
  ERROR_MESSAGE,
  MESSAGE_SUCCESS,
  UserActionTypes,
  LOGOUT_SUCCESS,
} from '../user/types'
import { Reducer } from 'redux'

const INITIAL_STATE: any = []

export const messageReducer: Reducer<any, UserActionTypes> = (
  state = INITIAL_STATE,
  action: UserActionTypes,
) => {
  if (!Array.isArray(action.payload)) {
    // if action payload is non-array cast it into array
    action.payload = [action.payload]
  }

  if (action.type === MESSAGE_SUCCESS) {
    return action.payload.map((msg: any) => ({
      type: 'success',
      message: msg,
    }))
  }

  if (action.type === LOGOUT_SUCCESS) {
    return {
      type: 'success',
      message: 'Successfully Signed Out',
    }
  }
  if (action.type === ERROR_MESSAGE) {
    return action.payload.map((msg: any) => ({
      type: 'success',
      message: msg,
    }))
  }

  return state
}
