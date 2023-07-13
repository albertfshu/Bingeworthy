import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const accountApi =  createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:3000'
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: '/api/accounts',
                method: 'POST',
                body,
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        }),
       getAccount: builder.query({
            query: () => ({
                url: `/token`,
                credentials: 'include'
            }),
            transformResponse: (response) => response ? response.account : null,
            providesTags: ['Account']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/token',
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        }),
        login: builder.mutation({
            query: ({username, password, name}) => {
                const body = new FormData();
                body.append('username', username)
                body.append('password', password)
                body.append('name', name)
                return {
                    url: `/token`,
                    method: `POST`,
                    body,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account']
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetAccountQuery
} = accountApi;
