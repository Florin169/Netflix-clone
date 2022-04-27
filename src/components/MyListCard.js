import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/myList/myListSlice";

const MyListCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className=" list-card" key={movie.id}>
      <div className="flex items-center space-x-10 md:w-[30%]">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="movie-logo"
          className="h-full w-32 md:w-40 object-cover rounded-md"
        />
        <h2 className="text-sm lg:text-base">{movie.original_title}</h2>
      </div>
      <div className="space-x-8  md:flex justify-between hidden">
        <span>{movie.release_date.slice(0, 4)}</span>
        <span className="border border-gray-500 px-1 text-gray-300">
          {movie.adult === false ? "13+" : "18+"}
        </span>
        <span>
          {Math.floor(movie.runtime / 60)}h : {Math.floor(movie.runtime % 60)}m
        </span>
      </div>
      <AiOutlineClose
        className="w-6 h-6 cursor-pointer"
        onClick={() => dispatch(remove(movie))}
      />
    </div>
  );
};

export default MyListCard;
