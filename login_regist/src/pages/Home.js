import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate=useNavigate();
    const userName=JSON.parse(localStorage.getItem("user"))
    const handleLogout=()=>{
        localStorage.removeItem("loggedin")
        navigate("/login")
    }
  return (
    <>
      <section className='background'>
         <div className='home_page'>
            <h1 style={{textAlign:"center",fontSize:"45px"}}>Home</h1>
             <h3 style={{textAlign:"center"}}>welcome-{userName.name}</h3>
              
              <button className='buttoon' onClick={handleLogout}>Logout</button>

         </div>
      </section>
    </>
  )
}

export default Home
