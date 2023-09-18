import { configureStore } from "@reduxjs/toolkit";
import { openSlice } from "../Redux/Open";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { navSlice } from "../Redux/IsNavigating";
import { openContactSlice } from "../Redux/openContact";

// import #      from "@/Components/Providers/Redux/Open";

export const store = configureStore({
  reducer: {
    open: openSlice.reducer,
    isnav: navSlice.reducer,
    opencontact: openContactSlice.reducer,
  },
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getOpen = (state: RootState) => state.open.isOpen;
export const getIsNav = (state: RootState) => state.isnav.isNavigating;
export const getOpenContact = (state: RootState) =>
  state.opencontact.openContact;

export default store;
