import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./apiSlice";
import { accountApi } from "./accountSlice";
import { dataApi } from "./dataSlice";
import { accountDetailsApi } from "./accountDetailsSlice";
import searchReducer from "./searchSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { watchlistApi } from "./watchlistSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
    [accountDetailsApi.reducerPath]: accountDetailsApi.reducer,
    [watchlistApi.reducerPath]: watchlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      accountApi.middleware,
      dataApi.middleware,
      accountDetailsApi.middleware,
      watchlistApi.middleware
    ),
});

setupListeners(store.dispatch);
