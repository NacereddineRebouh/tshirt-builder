import { createSlice } from "@reduxjs/toolkit";

export const openSlice = createSlice({
  name: "isOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpen: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setOpen, setClose } = openSlice.actions;
export default openSlice.reducer;
