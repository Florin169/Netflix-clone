import React, { useState } from "react";
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import profile from "../assets/profile.png";
import logo from "../assets/Netflix-logo.svg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  const sgnOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-between w-full p-5  ">
      <div className="flex items-center">
        <Link to="/home">
          <img src={logo} alt="logo" className="w-20 mr-5" />
        </Link>
        <p className="md:hidden" onClick={() => setMenu(!menu)}>
          Browse
        </p>
        <div className={`${!menu && "hidden"} sm:nav-mobile md:nav-desktop`}>
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <Link to="/my-list">My List</Link>
        </div>
      </div>

      <div className="flex items-center space-x-3 ">
        <BsSearch className="text-xl" />
        <p>Kids</p>
        <BsFillBellFill className="text-xl" />
        <img
          src={profile}
          alt="profile"
          className="rounded-md cursor-pointer"
          onClick={sgnOut}
        />
      </div>
    </div>
  );
};

export default Navbar;
