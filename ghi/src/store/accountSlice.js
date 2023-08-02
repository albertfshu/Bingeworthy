import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/api/accounts",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["Account"],
    }),
    getAccount: builder.query({
      query: () => ({
        url: `/token`,
        credentials: "include",
      }),
      transformResponse: (response) => response,
      providesTags: ["Account"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Account"],
    }),
    login: builder.mutation({
      query: ({ username, password, full_name }) => {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        body.append("full_name", full_name);
        return {
          url: `/token`,
          method: `POST`,
          body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account"],
    }),
    createDetails: builder.mutation({
      query: (query) => ({
        url: `/api/accounts/${query.username}`,
        method: "POST",
        body: query.body,
        credentials: "include",
      }),
      invalidatesTag: ["AccountDetails"],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetAccountQuery,
  useCreateDetailsMutation,
} = accountApi;
