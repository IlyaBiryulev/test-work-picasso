import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LIST_URL } from '../utils/constants';

export const listApi = createApi({
    reducerPath: 'listApi',
    baseQuery: fetchBaseQuery({baseUrl: LIST_URL}),
    endpoints: (build) => ({
        getList: build.query({
            query: ( page ) => `posts?_limit=10&_page=${page}`,
            transformResponse(apiResponse, meta) {
                return { apiResponse }
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
              },
              merge: (currentCache, newItems) => {
                currentCache.apiResponse.push(...newItems.apiResponse);
              },
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