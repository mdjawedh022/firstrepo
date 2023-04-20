import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'

const Allroute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/edit" element={<h1>edit</h1>}/>
      </Routes>
    </>
  )
}

export default Allroute
