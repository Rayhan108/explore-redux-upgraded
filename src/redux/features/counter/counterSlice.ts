import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSLice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state,action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state,action) => {
      state.count = state.count - action.payload;
    },
  },
});
export const {increment,decrement} =counterSLice.actions;
export default counterSLice.reducer;
