import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountDetailsApi = createApi({
  reducerPath: "accountDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  endpoints: (builder) => ({
    getAccountDetails: builder.query({
      query: (accountId) => `/api/accounts/${accountId}`,
      providesTags: ["AccountDetails"],
    }),
    updateAccountDetails: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/api/accounts/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["AccountDetails"],
    }),
  }),
});

export const { useGetAccountDetailsQuery, useUpdateAccountDetailsMutation } =
  accountDetailsApi;
