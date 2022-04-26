import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: {
    myList: [],
  },
  reducers: {
    add: (state, action) => {
      state.myList = [...state.myList, action.payload];
    },

    remove: (state, action) => {
      state.myList = state.myList.filter((e) => e.id !== action.payload.id);
    },
  },
});

export const { add, remove } = myListSlice.actions;

export default myListSlice.reducer;
