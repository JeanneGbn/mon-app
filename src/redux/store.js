import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'

export const store = configureStore({
  reducer: {
   user: userReducer,
   devTools: true,
  }
})

export default store