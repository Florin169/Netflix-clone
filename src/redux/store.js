import { configureStore } from "@reduxjs/toolkit";
import documentariesSlice from "./movies/documentariesSlice";
import horrorMoviesSlice from "./movies/horrorMoviesSlice";
import moviesSlice from "./movies/moviesSlice";
import romanceSlice from "./movies/romanceSlice";
import topRatedSlice from "./movies/topRatedSlice";
import myListSlice from "./myList/myListSlice";
import movieSlice from "./singleMovie/movieSlice";
import userSlice from "./user/user";

const store = configureStore({
  reducer: {
    user: userSlice,
    upcoming: moviesSlice,
    topRated: topRatedSlice,
    romance: romanceSlice,
    documentaries: documentariesSlice,
    horror: horrorMoviesSlice,
    myList: myListSlice,
    movie: movieSlice,
  },
});

export default store;
