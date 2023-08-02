import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todosQuery = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64b3e7ab0efb99d862688405.mockapi.io/pcshop/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "pcshop",
    }),
  }),
});

export const { useGetTodosQuery } = todosQuery;

export default todosQuery;
