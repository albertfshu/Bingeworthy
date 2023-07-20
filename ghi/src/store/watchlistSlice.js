import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const watchlistSlice = createApi({
    reducerPath: "accountApi",
    baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
    endpoints: (builder) => ({
        getAllWatchlist: builder.query({
            query: (account_id) => ({
                url: `/api/accounts/${account_id}/watchlist`,
                credentials: 'include'
            }),
            invalidatesTags: ['Watchlist']
        }),

    addToWatchlist: builder.mutation({
      query: ({ account_id, media_id }) => ({
        url: `/api/accounts/${account_id}/watchlist?media_id=${media_id}`,
        method: "POST",
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
   useGetAllWatchlistQuery, useAddToWatchlistMutation, useRemoveFromWatchlistMutation
  } = watchlistSlice
