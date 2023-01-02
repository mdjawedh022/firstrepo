// Auth Actions here
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_OUT, AUTH_SIGN_IN_SUCCESS ,RESET_AUTH  } from "./auth.types";

export const login = (payload)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
try{
    let res = await axios.post("https://reqres.in/api/login",payload)
    dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:res.data})
    return res.data
}catch(e){
    dispatch({type:AUTH_SIGN_IN_ERROR,payload:e.message})
}

}


export const logout = ()=>{
return ({type:AUTH_SIGN_OUT})
}


