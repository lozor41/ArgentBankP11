import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null, token: null },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        },
    },
})

export const { setToken, setUser, logOut } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.user.user
export const selectCurrentToken = (state) => state.user.token