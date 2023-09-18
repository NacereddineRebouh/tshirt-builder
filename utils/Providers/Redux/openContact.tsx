import { createSlice } from "@reduxjs/toolkit";

export const openContactSlice = createSlice({
  name: "openContact",
  initialState: {
    openContact: false,
  },
  reducers: {
    setOpen: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.openContact = true;
    },
    setClose: (state) => {
      state.openContact = false;
    },
  },
});

export const { setOpen, setClose } = openContactSlice.actions;
export default openContactSlice.reducer;
