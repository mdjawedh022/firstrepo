import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";
function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={
      <RequiredAuth>
        <Home />
      </RequiredAuth>
      }></Route>
<Route path="/login" element={<Login/>}></Route>

    </Routes>
  </div>;
}

export default App;
