import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, toggleModalTrue } from "../redux/singleMovie/movieSlice";
import { movieId } from "../redux/singleMovie/movieSlice";

const Card = ({ movie, id }) => {
  const dispatch = useDispatch();
  const mId = useSelector((state) => state.movie.movieId);

  return (
    <img
      onClick={() => {
        dispatch(movieId(id));
        dispatch(toggleModalTrue());
        dispatch(getMovie(mId));
      }}
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      className="max-w-[260px] h-[144px] bg-green-200 rounded-md hover:scale-105 transition duration-200 cursor-pointer"
    />
  );
};

export default Card;
