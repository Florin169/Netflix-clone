import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  return (
    <div
      className={` fixed inset-0 bg-black transition duration-500  z-[999] flex justify-center items-center `}
    >
      <h1 className="text-5xl animate-pulse font-mono tracking-widest -skew-x-12">
        NETFLIX
      </h1>
    </div>
  );
};

export default Loading;
