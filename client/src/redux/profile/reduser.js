
import { createSlice } from '@reduxjs/toolkit'
import { login, logout, register, getCurrentUser } from './actions'


const initialState = {
    user: null,
    isLoading: null,

}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers:
        (builder) => {
            builder.addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            builder.addCase(login.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(login.rejected, (state) => {
                state.user = null
            })
            builder.addCase(register.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            builder.addCase(register.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(register.rejected, (state) => {
                state.user = null
            })
            builder.addCase(logout.fulfilled, (state, action) => {
                state.user = action.payload
            })
            builder.addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            builder.addCase(getCurrentUser.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(getCurrentUser.rejected, (state) => {
                state.user = null

            })
        },

})

export default profileSlice.reducer
