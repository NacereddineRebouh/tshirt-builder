import { configureStore } from "@reduxjs/toolkit";
import targetSlice from "../slices/targetSlice";

export const store = configureStore({
  reducer: {
    target: targetSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
