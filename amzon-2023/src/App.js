import { Route, Routes } from 'react-router-dom';
import About from './About';
// import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>

        </Routes>

        </div>
  );
}

export default App;
