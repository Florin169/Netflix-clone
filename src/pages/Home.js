import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TvMovies from "../components/TvMovies";
import { getMovies } from "../redux/movies/moviesSlice";
import { getRated } from "../redux/movies/topRatedSlice";
import { getRomanceMovies } from "../redux/movies/romanceSlice";
import { getDocumentaries } from "../redux/movies/documentariesSlice";
import { getHorrorMovies } from "../redux/movies/horrorMoviesSlice";
import Modal from "../components/Modal";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.upcoming.upcoming.results);
  const rated = useSelector((state) => state.topRated.topRated.results);
  const romance = useSelector((state) => state.romance.romanceMovies.results);
  const documentaries = useSelector(
    (state) => state.documentaries.documentaries.results
  );
  const horror = useSelector((state) => state.horror.horrorMovies.results);
  const myList = useSelector((state) => state.myList.myList);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getRated());
    dispatch(getRomanceMovies());
    dispatch(getDocumentaries());
    dispatch(getHorrorMovies());
  }, [dispatch]);

  const randomNr = Math.floor(Math.random() * 20);

  return (
    <div className="h-full ">
      {movies && (
        <div
          className="h-[60vh] px-10 w-full bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[randomNr].backdrop_path})`,
          }}
        >
          <h1 className="text-2xl lg:text-7xl pt-32">
            {movies[randomNr].original_title}
          </h1>
          <p className="lg:text-xl my-3 lg:w-[50%]">
            {movies[randomNr].overview}
          </p>
          <div className="flex space-x-2">
            <button className="px-5 lg:px-10 py-2 rounded-md bg-gray-800">
              Play
            </button>
            <button className="px-5 lg:px-10 py-2 rounded-md bg-gray-500">
              More info
            </button>
          </div>
        </div>
      )}
      <TvMovies movies={movies} title="Trending" />
      <TvMovies movies={rated} title="Top Rated" />
      <TvMovies movies={romance} title="Romance Movies" />
      <TvMovies movies={myList} title="My List" list />
      <TvMovies movies={documentaries} title="Documentaries" />
      <TvMovies movies={horror} title="Horror Movies" />
      <Modal />
    </div>
  );
};

export default Home;
