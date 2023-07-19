import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./apiSlice";
import { accountApi } from "./accountSlice";
import { dataApi } from "./dataSlice";
import searchReducer from "./searchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      accountApi.middleware,
      dataApi.middleware
    ),
});

setupListeners(store.dispatch);
