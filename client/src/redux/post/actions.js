import { ActionType } from "./common.js"
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllPosts = createAsyncThunk(
    ActionType.GET_POSTS,
    async (_request, { extra: { services } }) => {
        const data = await services.posts.getPosts();
        return data;
    }
);
const setReaction = createAsyncThunk(
    ActionType.SET_REACTION,
    async (_request, { extra: { services } }) => {
        const data = await services.posts.setReaction();
        return data;
    }
);

export { getAllPosts, setReaction }