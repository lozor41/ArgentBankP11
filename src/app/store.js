import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../app/AuthService'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})
