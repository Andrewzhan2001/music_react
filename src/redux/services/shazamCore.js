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
  }),
});

// use + endpoint name + Query
export const { useGetTopChartsQuery } = shazamApi;
