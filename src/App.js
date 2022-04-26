import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="relative">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
