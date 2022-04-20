import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDocumentaries = createAsyncThunk(
  "movies/getDocumentaries",
  async () => {
    return await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&with_genres=99&append_to_response=videos"
    ).then((res) => res.json());
  }
);

const documentariesSlice = createSlice({
  name: "documentaries",
  initialState: {
    documentaries: [],
    statusbar: null,
  },
  extraReducers: {
    [getDocumentaries.pending]: (state) => {
      state.statusbar = "pending";
    },

    [getDocumentaries.fulfilled]: (state, action) => {
      state.statusbar = "success";
      state.documentaries = action.payload;
    },

    [getDocumentaries.rejected]: (state) => {
      state.statusbar = "failed";
    },
  },
});

export default documentariesSlice.reducer;
