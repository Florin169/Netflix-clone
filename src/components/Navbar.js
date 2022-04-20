import React, { useState } from "react";
import { BsSearch, BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between w-full p-5  ">
      <div className="flex items-center">
        <p className="mr-10">Netflix</p>
        <p className="md:hidden" onClick={() => setMenu(!menu)}>
          Browse
        </p>
        <div className={`${!menu && "hidden"} sm:nav-mobile md:nav-desktop`}>
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 ">
        <BsSearch className="text-xl" />
        <p>Kids</p>
        <BsFillBellFill className="text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
