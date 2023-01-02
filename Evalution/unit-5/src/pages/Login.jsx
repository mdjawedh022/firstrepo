import React from "react";
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useLocation} from "react-router-dom"
import { login } from "../redux/auth/auth.actions";
const Login = () => {
const [loginData, setLoginData]= useState()
const {data,loading,error} = useSelector((store)=>store.auth)

const dispatch= useDispatch();
const navigate = useNavigate()
const {state} = useLocation()

const handleChange=(e)=>{
  const {name,value}= e.target

  setLoginData({
    ...loginData,
    [name]:value
  })

}

const handleSubmit=(e)=>{
  e.preventDefault();

  dispatch(login(loginData))
}

useEffect(()=>{
if(data.isAuthenticated){
  navigate('/')
}else{
  navigate("/login")
}
},[data.isAuthenticated])

if(loading){
  return <div>...LOADING</div>
}else if(error){
  return <div>...ERROR</div>
}else {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" type="email" onChange={handleChange}  />
        <input data-cy="login-password" name="password" type="password" onChange={handleChange} />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );

}


};

export default Login;
