export const GET_ALL_LISTINGS_SUCCESS = 'GET_ALL_LISTINGS_SUCCESS'
// export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
// export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const UPLOAD_LISTING_SUCCESS = 'UPLOAD_LISTING_SUCCESS'
export const EDIT_LISTING_SUCCESS = 'EDIT_LISTING_SUCCESS'
export const CREATE_LISTING_SUCCESS = 'CREATE_LISTING_SUCCESS'
export const DELETE_LISTING_SUCCESS = 'DELETE_LISTING_SUCCESS'
// export const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE'
export const SEARCH_INPUT = 'SEARCH_INPUT'

export interface User {
  student?: {
    first_name?: string
    last_name?: string
    email?: string
  }
}

interface CreateListingAction {
  type: typeof CREATE_LISTING_SUCCESS
  payload: object
}

interface DeleteListingAction {
  type: typeof DELETE_LISTING_SUCCESS
  meta: {
    timestamp: number
  }
}

interface EditListingAction {
  type: typeof EDIT_LISTING_SUCCESS
  payload: object
}

// interface SuccessMessageAction {
//   type: typeof MESSAGE_SUCCESS
//   payload: string
// }

// interface ErrorMessageAction {
//   type: typeof ERROR_MESSAGE
//   payload: string
// }
