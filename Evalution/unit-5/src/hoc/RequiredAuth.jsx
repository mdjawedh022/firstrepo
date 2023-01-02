import react from "react"
import { useSelector} from "react-redux";
import {Navigate, useLocation } from "react-router-dom"
import {useNavigate} from "react-router-dom"

const RequiredAuth = ({ children }) => {
  // const navigate = useNavigate()

const isAuthenticated= useSelector((store)=>store.auth.data.isAuthenticated) 

// const {pathname} = useLocation()

if(isAuthenticated){
  return children;
}else{
 return <Navigate to = "/login"/>
}

};

export default RequiredAuth;
