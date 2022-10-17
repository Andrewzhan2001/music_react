import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '173e04edb0mshd3d61b2cb3947bbp12f6a6jsnacca7fa9e33f');

      return headers;
    },
  }),
  // operations want to perform against your server
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
    getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}` }),
  }),
});

// use + endpoint name + Query
export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetArtistTopSongsQuery } = shazamApi;
