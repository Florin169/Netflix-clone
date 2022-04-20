import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHorrorMovies = createAsyncThunk(
  "movies/getHorrorMovies",
  async () => {
    return await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&with_genres=27&append_to_response=videos"
    ).then((res) => res.json());
  }
);

const horrorMoviesSlice = createSlice({
  name: "horror",
  initialState: {
    horrorMovies: [],
    statusbar: null,
  },
  extraReducers: {
    [getHorrorMovies.pending]: (state) => {
      state.statusbar = "pending";
    },

    [getHorrorMovies.fulfilled]: (state, action) => {
      state.statusbar = "success";
      state.horrorMovies = action.payload;
    },

    [getHorrorMovies.rejected]: (state) => {
      state.statusbar = "failed";
    },
  },
});

export default horrorMoviesSlice.reducer;
