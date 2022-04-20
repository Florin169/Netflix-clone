import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRomanceMovies = createAsyncThunk(
  "movies/getRomanceMovies",
  async () => {
    return await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&with_genres=10749&append_to_response=videos"
    ).then((res) => res.json());
  }
);

const romanceSlice = createSlice({
  name: "romance",
  initialState: {
    romanceMovies: [],
    statusbar: null,
  },
  extraReducers: {
    [getRomanceMovies.pending]: (state) => {
      state.statusbar = "pending";
    },

    [getRomanceMovies.fulfilled]: (state, action) => {
      state.statusbar = "success";
      state.romanceMovies = action.payload;
    },

    [getRomanceMovies.rejected]: (state) => {
      state.statusbar = "failed";
    },
  },
});

export default romanceSlice.reducer;
