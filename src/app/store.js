import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feature/UserSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})
