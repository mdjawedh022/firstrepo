import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, Link} from "react-router-dom"
import { logout } from "../../redux/auth/auth.actions";
const Navbar = () => {

const isAuthenticated = useSelector((store)=>store.auth.data.isAuthenticated)


const dispatch = useDispatch()
const naviagte = useNavigate()
const handleLogin = ()=>{
  if(isAuthenticated){
    dispatch(logout())
  }else{
    naviagte("/login")
  }
}

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" data-cy="navbar-home-link">Logo</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuthenticated?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
