import React, { useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../redux/user/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(loggedInUser(currentUser));
  });

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      user && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-5 bg-black md:bg-[#141414]">
      <h1 className="text-6xl mb-24 md:mb-0">Netflix</h1>
      <div className="flex justify-center items-center h-full ">
        <div className="w-full h-full md:w-[550px] md:h-[500px] md:bg-black">
          <div className="py-10 px-16">
            <h1 className="text-3xl mb-5">Sign in</h1>
            <form>
              <input
                type="text"
                placeholder="Email"
                value={email}
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button
              className="w-full bg-red-500 my-5 h-14 rounded-md cursor-pointer"
              onClick={signIn}
            >
              Sign in
            </button>
            <h2 className="text-gray-500">
              New to Netflix?{" "}
              <span className="text-white cursor-pointer" onClick={signUp}>
                Sign Up Now
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
