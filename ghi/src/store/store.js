import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from './apiSlice'
import { accountApi } from './accountSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {

        [movieApi.reducerPath]: movieApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware, accountApi.middleware)
})

setupListeners(store.dispatch)
