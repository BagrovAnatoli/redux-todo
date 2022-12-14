import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "Todos", id: "LIST"};

export const todoApi = createApi({
    reducePath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://629470d963b5d108c18b87da.mockapi.io",
    }),
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => "todos",
            providesTags: (result = []) => [DATA_TAG],
        }),

        addTodo: builder.mutation({
            query: (body) => ({
                url: "todos",
                method: "POST",
                body,
            }),
            invalidatesTags: [DATA_TAG],
        }),

        updateTodo: builder.mutation({
            query(data) {
                const { id, ...body } = data;
                return {
                    url: `todos/${id}`,
                    method: "PUT",
                    body,
                };
            },
             invalidatesTags: (post) => [{ type: DATA_TAG.type, id: post?.id }],
            // invalidatesTags: [DATA_TAG],
        }),
    }),
});

export const {
    useGetAllTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
} = todoApi;