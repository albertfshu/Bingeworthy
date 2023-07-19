import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
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
      query: (page_id) => ({
        url: `/api/movie/${page_id}/rating`,
        credentials: "include",
      }),
      //   transformResponse: (response) => (response ? response.account : null),
      providesTags: ["Rating"],
    }),
    createComment: builder.mutation({
      query: (body, page_id) => ({
        url: `/api/comments/${page_id}`,
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["Comment"],
    }),
    getComments: builder.query({
      query: (page_id) => ({
        url: `/api/comments/{page_id}?id=${page_id}`,
      }),
      providesTags: ["Comment"],
    }),
  }),
});

export const {
  useCreateRatingMutation,
  useGetRatingQuery,
  useCreateCommentMutation,
  useGetCommentsQuery,
} = dataApi;
