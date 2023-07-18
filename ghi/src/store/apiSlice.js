import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => "/movie/popular?api_key=0fd8a0e40883c8bc0578f44a534b1ed9",
      providesTags: [{ type: "Movie", id: "LIST" }],
    }),

    getMovieDetails: builder.query({
      query: (movie_id) => `/movie/${movie_id}`,
      providesTags: (result, error, id) => [{ type: "Movie", id }],
    }),

    getPopularTV: builder.query({
      query: () => "/tv/popular",
      providesTags: [{ type: "TV", id: "LIST" }],
    }),

    getTVDetails: builder.query({
      query: (tv_id) => `/tv/${tv_id}`,
      providesTags: (result, error, id) => [{ type: "TV", id }],
    }),

    getAllFavorites: builder.query({
      query: () => ({
        url: `/api/favorites`,
        credentials: "include",
      }),
      providesTags: ["Favorites"],
      transformResponse: (response) => response?.favorites,
    }),

    deleteFavorite: builder.mutation({
      query: (id) => ({
        url: `/api/favorites/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Favorites"],
    }),

    createFavorite: builder.mutation({
      query: (body) => ({
        url: `/api/favorites`,
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["Favorites"],
    }),

    searchMovies: builder.query({
      query: (searchbarinput) =>
        `/search/movie?api_key=0fd8a0e40883c8bc0578f44a534b1ed9&query=${searchbarinput}`,
      // transformResponse: (response) => response.movie,
    }),

    getMovieGenreID: builder.query({
      query: () => "/genre/movie/list",
    }),

    getTVGenreID: builder.query({
      query: () => "/genre/tv/list",
    }),

    searchTV: builder.query({
      query: (searchbarinput) => `/search/multi?query=${searchbarinput}`,
      transformResponse: (response) => response.tv,
    }),
  }),
});

export const {
  useSearchMoviesQuery,
  useSearchTVQuery,
  useGetTVGenreIDQuery,
  useGetMovieGenreIDQuery,
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
