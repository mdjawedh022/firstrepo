import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import EditBook from './EditBook';
import Login from './Login';
import SignUp from './SignUp';
import SingleBook from './SingleBook';
const AllRoutes = () => {
  return (
   <>
    <Routes>
   <Route path="/" element={<Books/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/signup" element={<SignUp/>} />
   <Route path="/about" element={<h1>About</h1>} />
   <Route path="/books/:id" element={<SingleBook/>} />
   <Route path="/books/:id/edit" element={<EditBook/>}/>
   <Route path="*" element={<h1>page not found error 404</h1>} />
     </Routes>

   </>
  )
}

export default AllRoutes
