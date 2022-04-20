import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRated = createAsyncThunk("movies/ropRated", async () => {
  return await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1&append_to_response=videos"
  ).then((res) => res.json());
});
const topRatedSlice = createSlice({
  name: "topRated",
  initialState: {
    topRated: [],
    statusbar: null,
  },
  extraReducers: {
    [getRated.pending]: (state) => {
      state.statusbar = "pending";
    },

    [getRated.fulfilled]: (state, action) => {
      state.statusbar = "success";
      state.topRated = action.payload;
    },

    [getRated.rejected]: (state) => {
      state.statusbar = "failed";
    },
  },
});

export default topRatedSlice.reducer;
