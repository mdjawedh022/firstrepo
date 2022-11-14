import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


function SignUp() {

  const[name,setFirst]=useState('')
  const[last,setLast]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[mobile,setMobile]=useState('')
  const[username,setusername]=useState('')
  const[description,setdescription]=useState('')
  const navigate = useNavigate()
  // const history=useHistory()


  async function signuPP(){
  let items={name,email,password,mobile,username,description}
  console.log(items);

 let result=await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
  method:"POST",
  body:JSON.stringify(items),
  headers:{
    "Content-Type":'application/json',
    "Accept":'application/json'
    }
 })
let data =await result.json()
console.log(data)
localStorage.setItem("user-info",JSON.stringify(data))

navigate("/signin")




}

  return (
    <div>
       <Navbar/>
      <div className="signup1">
   
        <div className="signup">
          <h1 style={{marginBottom:"45px",fontSize:"30px",fontWeight:"600"}}>Register Candidate</h1>
         <div className="account_already"> <p>Already have an account?</p>
          <span>
            <Link to="/SignIn"><p style={{fontSize:"15px",color:"blue"}}>SignIn</p></Link>
          </span></div>
          <Link to="">
            <div className="loginfacebook">
              <i className="fa-brands fa-square-facebook"></i>
              <h3>REGISTER WITH FACEBOOK</h3>
            </div>
          </Link>
          <Link to="">
            <div className="logingoogle">
              <i className="fa-brands fa-square-google-plus"></i>
              <h3>REGISTER WITH GOOGLE</h3>
            </div>
          </Link>
          <p>OR</p>
          <input
            type="text"
            className="input"
            placeholder="Name*"
            name="first"
            value={name}
            onChange={(e)=>setFirst(e.target.value)}
          />
         
          <br />
          <input
            type="email"
            className="input"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <input
            type="number"
            className="input"
            placeholder="Mobile Number"
            name="mobile"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="input"
            placeholder="Enter User name"
            name="city"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="input"
            placeholder="Enter your thoughts"
            name="code"
            value={description}
            onChange={(e)=>setdescription(e.target.value)}
          />
          <br />
          {/* <input type="submit" className="btn" value="Next" /> */}
          <button className="btn" onClick={signuPP}>Next</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;


// "name": "MASAI School",
//   "email": "hello@masai.com",
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!"