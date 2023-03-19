import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionType";

const initialState={
  isAuth:false,
  token:"",
  isLoading:false,
  isError:false,
};

export const reducer=(state=initialState,{type,payload})=>{
  switch(type){
  case USER_LOGIN_REQUEST:{
    return{
      ...state,
      isLoading:true,
      isError:false,
    }
  }
case USER_LOGIN_SUCCESS:{
  return{
    ...state,
    isAuth:true,
    token:payload,
    isLoading:false,
    isError:false,
  }
}
case USER_LOGIN_FAIL:{
  return{
    ...state,
    isLoading:false,
    isError:true
  }
}

    default:
      return state
  }
}