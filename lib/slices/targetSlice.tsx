import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store/store";

interface TargetState {
  modelMaterial: any;
  modelNodes: any;
}

const initialState: TargetState = {
  modelMaterial: null,
  modelNodes: "",
};

export const targetSlice = createSlice({
  name: "target",
  initialState,
  reducers: {
    setModelMaterial: (state, action) => {
      state.modelMaterial = action.payload;
    },
    setModelNodes: (state, action) => {
      state.modelNodes = action.payload;
    },
  },
});

export const { setModelMaterial, setModelNodes } = targetSlice.actions;
export const selectModelMaterial = (state: RootState) =>
  state.target.modelMaterial;
export const selectModelNodes = (state: RootState) => state.target.modelNodes;
export default targetSlice.reducer;
