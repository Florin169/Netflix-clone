import React from "react";
import { useDispatch } from "react-redux";
import { getMovie, toggleModalTrue } from "../redux/singleMovie/movieSlice";

const Card = ({ movie, id }) => {
  const dispatch = useDispatch();

  return (
    <img
      onClick={() => {
        dispatch(getMovie(id));
        dispatch(toggleModalTrue());
      }}
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt=""
      className="max-w-[260px] h-[144px] bg-green-200 rounded-md hover:scale-105 transition duration-200 cursor-pointer mr-5"
    />
  );
};

export default Card;
