import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  // operations want to perform against your server
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongsByGenre: builder.query({ query: (genreId) => `/charts/track?listId=${genreId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
    getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}` }),
    getSongsBySearch: builder.query({ query: (term) => `/search?term=${term}` }),
  }),
});

// use + endpoint name + Query
export const { useGetTopChartsQuery, useGetSongsByGenreQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetArtistTopSongsQuery, useGetSongsBySearchQuery } = shazamApi;
