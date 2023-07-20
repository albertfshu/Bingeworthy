import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountDetailsApi = createApi({
  reducerPath: "accountDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getAccountDetails: builder.query({
      query: (accountId) => "/api/account-details/${accountId}",
    }),
    updateAccountDetails: builder.mutation({
      query: ({ id, ...data }) => ({
        url: "/api/account-details/${id}",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetAccountDetailsQuery, useUpdateAccountDetailsMutation } =
  accountDetailsApi;
