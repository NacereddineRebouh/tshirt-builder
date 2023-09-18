import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "isNavigating",
  initialState: {
    isNavigating: false,
  },
  reducers: {
    setIsNavigating: (state, action: PayloadAction<boolean>) => {
      state.isNavigating = action.payload;
    },
  },
});

export const { setIsNavigating } = navSlice.actions;
export default navSlice.reducer;
