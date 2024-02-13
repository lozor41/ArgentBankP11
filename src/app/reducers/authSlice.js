import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setAccessToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        logOut: state => {
            state.user = null
            state.token = null
        }
    }
})

export const { setAccessToken, setUser, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = state => state.auth.user
export const selectCurrentToken = state => state.auth.token