import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (dispatch, getState) => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1&append_to_response=videos"
    ).then((res) => res.json());
  }
);

const initialState = {
  upcoming: [],
  statusbar: null,
};

const moviesSlice = createSlice({
  name: "upcoming",
  initialState,
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.statusbar = "pending";
    },

    [getMovies.fulfilled]: (state, action) => {
      state.statusbar = "success";
      state.upcoming = action.payload;
    },

    [getMovies.rejected]: (state) => {
      state.statusbar = "failed";
    },
  },
});

export default moviesSlice.reducer;
