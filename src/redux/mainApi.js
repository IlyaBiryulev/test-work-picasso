import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const LIST_URL = 'https://jsonplaceholder.typicode.com/'

export const listApi = createApi({
    reducerPath: 'listApi',
    baseQuery: fetchBaseQuery({baseUrl: LIST_URL}),
    endpoints: (build) => ({
        getList: build.query({
            query: () => `posts`,
        }),
        getPostById: build.query({
            query: (id) => `posts/${id}`,
        })
    })
});

export const { useGetListQuery, useGetPostByIdQuery } = listApi;