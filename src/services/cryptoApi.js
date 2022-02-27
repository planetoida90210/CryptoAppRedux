import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '41a1ea1490msh6551fc2220e200ep1ed52djsn3745fb9f981f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: () => createRequest('/coins')
      })
    })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;