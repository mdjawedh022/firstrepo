import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './pages/Home'
import Protectedroute from './services/Protectedroute'

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Protectedroute/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
    </Routes>

    </>
  )
}

export default App
