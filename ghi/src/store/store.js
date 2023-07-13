import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from './apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {

        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)
