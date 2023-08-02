import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todosQuery = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64b3e7ab0efb99d862688405.mockapi.io/pcshop/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: ({ searchValue }) => {
        return `pcshop?search=${searchValue}`;
      },
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: "pcshop",
        method: "POST",
        body,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (deleteTodo) => ({
        url: `pcshop/${deleteTodo}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  todosQuery;

export default todosQuery;
