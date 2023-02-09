import React from "react";
import { useDispatch } from "react-redux";
import { Route,Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  const locate=useLocation();
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return <div className="App">{/* code here */}
    <Navbar/>
    <Routes>
      <Route path="login" element={<Login/>}></Route>
      <Route path="" element={
        <RequiredAuth>
          <Home/>
        </RequiredAuth>
      }></Route>
    </Routes>
  </div>;
}

export default App;
