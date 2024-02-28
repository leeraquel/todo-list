import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
