import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (query) => ({
        url: `/api/rating/${query.page_id}/`,
        method: "POST",
        body: query.body,
        credentials: "include",
      }),
      invalidatesTags: ["Rating"],
    }),
    getRating: builder.query({
      query: (page_id) => ({
        url: `/api/rating/${page_id}/`,
      }),
      providesTags: ["Rating"],
    }),
    updateRating: builder.mutation({
      query: (query) => ({
        url: `/api/rating/${query.page_id}/`,
        method: "PUT",
        body: query.body,
        credentials: "include",
      }),
      invalidatesTags: ["Rating"],
    }),
    createComment: builder.mutation({
      query: (query) => ({
        url: `/api/comments/${query.page_id}`,
        method: "POST",
        body: query.body,
        credentials: "include",
      }),
      invalidatesTags: ["Comment"],
    }),
    getComments: builder.query({
      query: (page_id) => ({
        url: `/api/comments/${page_id}`,
      }),
      providesTags: ["Comment"],
    }),
    updateComment: builder.mutation({
      query: (query) => ({
        url: `/api/comments/${query.page_id}/${query.comment_id}`,
        method: "PUT",
        body: query.body,
        credentials: "include",
      }),
      invalidatesTags: ["Comment"],
    }),
    deleteComment: builder.mutation({
      query: (query) => ({
        url: `/api/comments/${query.page_id}/${query.comment_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useCreateRatingMutation,
  useGetRatingQuery,
  useUpdateRatingMutation,
  useCreateCommentMutation,
  useGetCommentsQuery,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = dataApi;
