import { configureStore } from "@reduxjs/toolkit";
import todosQuery from "../query/todosQuery";

const store = configureStore({
  reducer: {
    [todosQuery.reducerPath]: todosQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosQuery.middleware),
});

export default store;
