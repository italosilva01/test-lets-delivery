import { createSlice } from "@reduxjs/toolkit";
import { Character } from "model/character";

const stock = createSlice({
  name: "stock",
  initialState: [] as Character[],

  reducers: {
    insert(state, action) {
      state.push(action.payload);
    },
  },
});

export const { insert } = stock.actions;
export default stock.reducer;
