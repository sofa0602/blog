import { configureStore } from '@reduxjs/toolkit'
import { profileReduser as profile } from "./root-reduser.js"
import { postReduser as post } from "./root-reduser.js"
import { auth, storage, posts } from "../services/services.js"

export const store = configureStore({
    reducer: {
        profile,
        post
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                services: {
                    auth,
                    storage,
                    posts,
                }
            }
        }
    })
})