import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import MyListCard from "../components/MyListCard";

const MyList = () => {
  const list = useSelector((state) => state.myList.myList);

  return (
    <div>
      <Navbar />
      <h1 className="px-5 text-5xl my-10">My List</h1>
      {list?.map((movie) => (
        <MyListCard movie={movie} />
      ))}
    </div>
  );
};

export default MyList;
