import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { dbConnectionError, dbConnectionSuccess } from '../db/dbSlice';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    tagTypes: ["getUsers", "getPosts"],
    endpoints: (builder) => ({
        setDatabase: builder.mutation({
            query: (dbName) => ({
                url: "posts",
                method: "POST",
                body: dbName,
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                // dispatch(resetDB());
                try {
                    await queryFulfilled
                    dispatch(dbConnectionSuccess(arg));
                    localStorage.setItem("db", arg);
                } catch (err) {
                    // handle error as you need
                    const msg = "Something Wrong!"
                    dispatch(dbConnectionError(msg));
                    localStorage.removeItem("db");
                    // alert(msg);

                }
            },
            invalidatesTags: ["getUsers", "getPosts"]
        }),
        getUsers: builder.query({
            query: (arg) => ({
                url: "/users",
                method: "GET"
            }),
            providesTags: ["getUsers"]
        }),
        getPosts: builder.query({
            query: (arg) => ({
                url: "/posts",
                method: "GET"
            }),
            providesTags: ["getPosts"]
        }),

    }),
})

export const { useSetDatabaseMutation, useGetUsersQuery, useGetPostsQuery } = apiSlice;