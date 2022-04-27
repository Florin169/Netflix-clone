import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MyList from "./pages/MyList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { loggedInUser } from "./redux/user/user";

const App = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(loggedInUser(currentUser));
  });

  return (
    <div className="relative ">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/my-list" element={<MyList />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
