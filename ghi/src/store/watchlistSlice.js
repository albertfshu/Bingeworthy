import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const watchlistApi = createApi({
  reducerPath: "watchlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getUserWatchlist: builder.query({
      query: (account_id) => ({
        url: `/api/accounts/${account_id}/watchlist`,
        credentials: "include",
      }),
      providesTags: ["Watchlist"],
    }),

    addToWatchlist: builder.mutation({
      query: ({ account_id, media_id }) => ({
        url: `/api/accounts/${account_id}/watchlist`,
        method: "POST",
        body: { media_id },
        credentials: "include",
      }),
      invalidatesTags: ["Watchlist"],
    }),

    removeFromWatchlist: builder.mutation({
      query: ({ account_id, watchlist_id }) => ({
        url: `/api/accounts/${account_id}/watchlist/${watchlist_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Watchlist"],
    }),
  }),
});

export const {
  useGetUserWatchlistQuery,
  useAddToWatchlistMutation,
  useRemoveFromWatchlistMutation,
} = watchlistApi;
