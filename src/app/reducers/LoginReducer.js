import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT } from './types'

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}