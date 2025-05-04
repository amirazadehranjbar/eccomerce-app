import { configureStore } from '@reduxjs/toolkit'
import {AuthSlice} from "../features/auth/authSlice.js";

export const store = configureStore({
    reducer: {
        auth : AuthSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: true,
});