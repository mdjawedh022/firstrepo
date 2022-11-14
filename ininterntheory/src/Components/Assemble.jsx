import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPage from "../pages/AllPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dasboard from "../pages/Dasboard";

function Assemble() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dasboard" element={<Dasboard />} />
      </Routes>
    </div>
  );
}

export default Assemble;
