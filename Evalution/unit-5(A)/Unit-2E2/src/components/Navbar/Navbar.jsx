import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link} from "react-router-dom";
import {logout} from "../../redux/auth/auth.actions"

const Navbar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const isAuthenticated=useSelector(
    (state)=>state.auth.data.isAuthenticated
  )


  const handLogin=()=>{
    if(isAuthenticated){
      dispatch(logout());
      navigate("/login")
    }else{
      navigate("/login")
    }
  }
  return (
    <div data-cy="navbar" style={{padding: "10px", display: "flex", gap:"22px" ,justifyContent: "space-between"}}>
      <div style={{display:"flex",gap:"22px"}}>
        {/* TODO: Use Link instead of anchor tag. */}
        {/* <a data-cy="navbar-home-link"></a> */}
        <Link data-cy="navbar-home-link" to="/">Home</Link>
      </div>
      <div style={{display:"flex", gap:"18px"}}>
        <div data-cy="navbar-cart-items-count"> Cart: {cartItemCount && `(${cartItemCount})`}</div>
        <button data-cy="navbar-login-logout-button" onClick={handLogin}>
          {isAuthenticated ? "Logout": "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
