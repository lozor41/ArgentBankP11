import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
  } from '../reducers/types'
  import axios from 'axios'
  
  export const login = (email, password) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        { email, password },
        config
      )
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
  }