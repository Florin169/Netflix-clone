import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovie = createAsyncThunk("movie/getMovie", async (mId) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${mId}?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&append_to_response=videos`
  ).then((res) => res.json());
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    statusbar: null,
    modal: false,
    movieId: null,
  },
  reducers: {
    toggleModalTrue: (state) => {
      state.modal = true;
    },

    toggleModalFalse: (state) => {
      state.modal = false;
    },

    movieId: (state, action) => {
      state.movieId = action.payload;
    },
  },
  extraReducers: {
    [getMovie.pending]: (state) => {
      state.statusbar = "pending";
    },

    [getMovie.fulfilled]: (state, action) => {
      state.movie = action.payload;
      state.statusbar = "success";
    },

    [getMovie.rejected]: (state) => {
      state.statusbar = "failed";
    },
  },
});

export const { toggleModalTrue, toggleModalFalse, movieId } =
  movieSlice.actions;

export default movieSlice.reducer;
