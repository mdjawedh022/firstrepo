import { Route, Routes } from 'react-router-dom';
import About from './About';
import Footer from './Components/Footer';
// import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
// import SliderMain from './Components/SliderMain';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>

        </Routes> 
      <Footer/>
        </div>
  );
}

export default App;
