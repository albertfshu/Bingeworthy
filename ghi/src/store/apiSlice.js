import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi =  createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
        // process.env.REACT_APP_API_HOST
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => '/movie/popular',
            providesTags: [{type: 'Movie', id: 'LIST'}]
        }),

        getMovieDetails: builder.query({
            query: (movie_id) => `/movie/${movie_id}`,
            providesTags: (result, error, id) => [{type: 'Movie', id}]
        }),

    endpoints: (builder) => ({
        getPopularTV: builder.query({
            query: () => '/tv/popular',
            providesTags: [{type: 'TV', id: 'LIST'}]
        }),

        getTVDetails: builder.query({
            query: (tv_id) => `/tv/${tv_id}`,
            providesTags: (result, error, id) => [{type: 'TV', id}]
        }),
        getAllFavorites: builder.query({
            query: () => ({
                url: `/api/favorites`,
                credentials: 'include'
            }),
            providesTags: ['Favorites'],
            transformResponse: (response) => response?.favorites
        }),
        deleteFavorite: builder.mutation({
            query: (id) => ({
                url: `/api/favorites/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        }),
        createFavorite: builder.mutation({
            query: (body) => ({
                url: `/api/favorites`,
                method: 'POST',
                body,
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        })
    })
})
})


export const {
    useGetPopularMoviesQuery,
    useGetMovieDetailsQuery,
    useGetPopularTVQuery,
    useGetTVDetailsQuery,
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
    useGetAllFavoritesQuery,
    useDeleteFavoriteMutation,
    useCreateFavoriteMutation,
} = movieApi;
