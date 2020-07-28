import {
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  VERIFY_USER_SUCCESS,
  MESSAGE_SUCCESS,
  ERROR_MESSAGE,
  UserState,
} from '../user/types'

import axios from '../../axios'
import { AxiosResponse } from 'axios'

import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { UserActionTypes } from '../user/types'
import { RootState } from '../root-reducer'

type ThunkResult = ThunkAction<void, RootState, unknown, UserActionTypes>

export const userLogin = (user: AxiosResponse<UserState>) => async (
  dispatch: Dispatch<UserActionTypes>,
) => {
  try {
    const ctx = await axios.post('/login', user)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: ctx.data,
    })
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: ctx.data.message,
    })
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response?.data.message,
    })
  }
}

export const userLogout = (): ThunkResult => (
  dispatch: Dispatch<UserActionTypes>,
) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  })
}

export const userRegister = (
  user: AxiosResponse<UserState>,
): ThunkResult => async (dispatch: Dispatch<UserActionTypes>) => {
  try {
    const ctx = await axios.post('/users', user)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: ctx.data,
    })

    dispatch({
      type: MESSAGE_SUCCESS,
      payload: ctx.data.message,
    })
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response?.data.message,
    })
  }
}

export const verifyUser = (): ThunkResult => async (dispatch: Dispatch) => {
  const ctx = await axios.get('/user')
  dispatch({
    type: VERIFY_USER_SUCCESS,
    payload: ctx.data,
  })
}
