import { ActionType } from "./common.js"
import { createAsyncThunk } from '@reduxjs/toolkit';

const login = createAsyncThunk(
    ActionType.LOG_IN,
    async (request, { extra: { services } }) => {
        const { user, accessToken } = await services.auth.login(request);

        services.storage.setItem("token", accessToken);

        return user;
    }
);

const register = createAsyncThunk(
    ActionType.REGISTER,
    async (request, { extra: { services } }) => {
        const { user, accessToken } = await services.auth.registration(request);

        services.storage.setItem("token", accessToken);

        return user;
    }
);

const logout = createAsyncThunk(
    ActionType.LOG_OUT,
    async (_request, { extra: { services } }) => {
        await services.auth.logout();
        services.storage.removeItem("token");
        return null;
    }
);
const getCurrentUser = createAsyncThunk(
    ActionType.CURRENT_USER,
    async (_request, { extra: { services } }) => {
        const { user } = await services.auth.getCurrentUser(_request);
        return user
    }
);



// const loadCurrentUser = createAsyncThunk(
//     ActionType.LOG_IN,
//     async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
//         try {
//             return await services.auth.getCurrentUser();
//         } catch (err) {
//             const isHttpError = err instanceof HttpError;

//             if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
//                 dispatch(logout());
//             }

//             return rejectWithValue(err?.message ?? ExceptionMessage.UNKNOWN_ERROR);
//         }
//     }
// );

export { login, register, logout, getCurrentUser };