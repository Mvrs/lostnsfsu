import axios from '../../axios'
import { AxiosResponse } from 'axios'
import { UPLOAD_LISTING_SUCCESS } from '../types'
import {
  GET_ALL_LISTINGS_SUCCESS,
  CREATE_LISTING_SUCCESS,
  // SUCCESS_MESSAGE,
  DELETE_LISTING_SUCCESS,
} from '../types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../root-reducer'
import { Reducer, Dispatch } from 'redux'
import { ERROR_MESSAGE, MESSAGE_SUCCESS } from '../user/types'

interface Listings {
  listings?: any
}

interface ListingState {
  readonly id?: number
  page?: number
  readonly listings?: Listings[]
  readonly message?: string
}

// interface IListingS extends Array<ListingState> {}

const INITIAL_STATE: any[] = []

export type ListingActionTypes =
  | { type: typeof GET_ALL_LISTINGS_SUCCESS; payload: Array<any> }
  | { type: typeof CREATE_LISTING_SUCCESS; payload: Array<any> }
  | { type: typeof UPLOAD_LISTING_SUCCESS; payload: Array<any> }
  | { type: typeof DELETE_LISTING_SUCCESS; payload?: number }
  | { type: typeof ERROR_MESSAGE; payload?: string }
  | { type: typeof MESSAGE_SUCCESS; payload?: string }

type ThunkResult = ThunkAction<void, RootState, unknown, ListingActionTypes>

// const dispatch = useDispatch()

// Action creators

export const getAllListings = (page?: any): ThunkResult => async (
  dispatch: Dispatch,
) => {
  try {
    const context = axios.get(`/listings?page=${page}`)
    dispatch({
      type: GET_ALL_LISTINGS_SUCCESS,
      payload: (await context).data.listings,
    })
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err,
    })
  }
}

export const createListing = (listing: AxiosResponse): ThunkResult => async (
  dispatch,
) => {
  try {
    await axios.post('/listings', listing)
    dispatch({
      type: CREATE_LISTING_SUCCESS,
      payload: listing.data,
    })
  } catch {
    dispatch({
      type: ERROR_MESSAGE,
      payload: "Couldn't create your listing",
    })
  }
}

export const updateListing = (listing: any): ThunkResult => async (
  dispatch,
) => {
  try {
    await axios.patch(`/listings/${listing.id}`)
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: 'Successfully updated your listing',
    })
  } catch {
    dispatch({
      type: ERROR_MESSAGE,
      payload: 'Not able to update your listing',
    })
  }
}

export const deleteListing = (
  listing: AxiosResponse<ListingState>,
): ThunkResult => async (dispatch) => {
  try {
    await axios.delete<ListingState>('/listings/', {
      params: { id: listing.data.id },
    })
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: listing.data.message,
    })

    dispatch({
      type: DELETE_LISTING_SUCCESS,
      payload: listing.data.id,
    })
  } catch {
    dispatch({
      type: ERROR_MESSAGE,
      payload: 'Unable to delete your listing',
    })
  }
}

// Action Reducers

export const listingReducer: Reducer<ListingState[]> = (
  state = INITIAL_STATE,
  action: ListingActionTypes,
) => {
  if (action.type === GET_ALL_LISTINGS_SUCCESS) {
    return [...state, ...action.payload]
  }
  if (action.type === CREATE_LISTING_SUCCESS) {
    return [...action.payload, ...state]
  }
  if (action.type === UPLOAD_LISTING_SUCCESS) {
    return [...action.payload, ...state]
  }
  if (action.type === DELETE_LISTING_SUCCESS) {
    return state.filter((_: any, i: any) => action.payload !== i)
  }
  // default
  return state
}
