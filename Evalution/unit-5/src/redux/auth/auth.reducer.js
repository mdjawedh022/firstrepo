// Note: Do not update/change the initial state
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_OUT, AUTH_SIGN_IN_SUCCESS ,RESET_AUTH  } from "./auth.types";

const token = localStorage.getItem("token")

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,action) => {
        switch(action.type){
          case AUTH_SIGN_IN_LOADING:{
            return{
              ...state,
              loading:true,
              error:false
            }
          }


          case AUTH_SIGN_IN_SUCCESS:{
            localStorage.setItem("token",action.payload)
            return{
              ...state,
              loading:false,
              error:false,
              data:{token:action.payload, isAuthenticated:true}

           
            }
          }
case AUTH_SIGN_IN_ERROR:{
  localStorage.removeItem("token")
  return{
    ...state,
    loading:false,
    error:true,
    data:{token:"", isAuthenticated:false}
  }
}
case AUTH_SIGN_OUT:{
  localStorage.removeItem("token")
  return{
    loading:false,
    error:false,
    data:{token:"", isAuthenticated:false}
  }
}

        }
  return state;
};
