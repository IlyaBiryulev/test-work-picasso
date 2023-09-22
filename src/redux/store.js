import { configureStore } from "@reduxjs/toolkit";
import { listApi } from "./mainApi";

export const store = configureStore({
    reducer: {
        [listApi.reducerPath]: listApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listApi.middleware)
});