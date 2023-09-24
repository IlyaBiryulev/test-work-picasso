import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const LIST_URL = 'https://jsonplaceholder.typicode.com/'

export const listApi = createApi({
    reducerPath: 'listApi',
    baseQuery: fetchBaseQuery({baseUrl: LIST_URL}),
    endpoints: (build) => ({
        getList: build.query({
            query: ( page ) => `posts?_limit=10&_page=${page}`,
            transformResponse(apiResponse, meta) {
                return { apiResponse, totalCount: Number(meta.response.headers.get('X-Total-Count')) }
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
              },
              // Always merge incoming data to the cache entry
              merge: (currentCache, newItems) => {
                currentCache.apiResponse.push(...newItems.apiResponse);
              },
              // Refetch when the page arg changes
              forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
              }
        }),
        getPostById: build.query({
            query: (id) => `posts/${id}`,
        }),
    })
});

export const { useGetListQuery, useGetPostByIdQuery } = listApi;