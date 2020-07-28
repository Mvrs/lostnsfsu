import { combineReducers } from '@reduxjs/toolkit'
// import listingReducer from '../store/reducers/listingReducer'
// import { AlertMessageReducer } from '../components/message-list'

import { userReducer } from './user/reducers'
// import { listingReducer } from './modules/listing'
import { messageReducer } from './modules/message'

export const rootReducer = combineReducers({
  // listings: listingReducer,
  users: userReducer,
  messages: messageReducer,
})

export type RootState = ReturnType<typeof rootReducer>
