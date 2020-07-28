import { SEARCH_INPUT } from '../types'

type Action = { type: typeof SEARCH_INPUT; searchValue: string }

interface ISearch {
  searchValue?: string
  zipCode?: number
  address?: string
  state?: number
  homeType?: string
}

type State = ISearch

export const updateSearch = (action: Action) => {
  return {
    type: SEARCH_INPUT,
    searchValue: action.searchValue,
  }
}

export const searchReducer = (state: State, action: Action) => {
  if (action.type === SEARCH_INPUT) {
    return {
      ...state,
      searchValue: action.searchValue,
    }
  }

  return state
}
