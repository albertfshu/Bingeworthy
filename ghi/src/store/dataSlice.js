import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (body, movie_id) => ({
        url: `/api/movie/${movie_id}/rating`,
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["Rating"],
    }),
    getRating: builder.query({
      query: () => ({
        url: `/api/movie/${movie_id}/rating`,
        credentials: "include",
      }),
      //   transformResponse: (response) => (response ? response.account : null),
      providesTags: ["Rating"],
    }),
  }),
});

export const { useCreateRatingMutation, useGetRatingQuery } = dataApi;
