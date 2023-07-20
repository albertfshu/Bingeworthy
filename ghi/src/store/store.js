import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./apiSlice";
import { accountApi } from "./accountSlice";
import { dataApi } from "./dataSlice";
import { accountDetailsApi } from "./accountDetailsSlice";
import searchReducer from "./searchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
    [accountDetailsApi.reducerPath]: accountDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      accountApi.middleware,
      dataApi.middleware,
      accountDetailsApi.middleware
    ),
});

setupListeners(store.dispatch);
