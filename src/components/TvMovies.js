import React from "react";
import Card from "./Card";

const TvMovies = ({ movies, title, list }) => {
  return (
    <div className="my-10 px-10">
      <h1 className={`my-5`}>{title}</h1>

      <div className="flex overflow-hidden space-x-5 ">
        {movies?.map((movie) => (
          <Card key={movie.id} id={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TvMovies;
