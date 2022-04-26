import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loggedInUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loggedInUser } = userSlice.actions;

export default userSlice.reducer;
