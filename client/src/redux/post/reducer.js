
import { createSlice } from '@reduxjs/toolkit'
import { getAllPosts } from './actions'


const initialState = {
    posts: [],
    isLoading: null,
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers:
        (builder) => {
            builder.addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.isLoading = false
            })
            builder.addCase(getAllPosts.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(getAllPosts.rejected, (state) => {
                state.posts = null
            })
        },

})

export default postSlice.reducer
