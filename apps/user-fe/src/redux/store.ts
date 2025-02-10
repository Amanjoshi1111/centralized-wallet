import { configureStore } from "@reduxjs/toolkit";
import onRampTransactionSlice from "./slices/onRampTransactionSlice";

export const store = configureStore({
    reducer: {
        onRampTransaction: onRampTransactionSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;    


