import { configureStore } from "@reduxjs/toolkit";
import Alertslice from "./slice/Alertslice";
import Categoryslice from "./slice/Categoryslice";

export const store = configureStore({
    reducer: {
        // alertsState: Alertslice,
        categoryState: Categoryslice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})