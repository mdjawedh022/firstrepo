import axios from "axios"
import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actioType"

export const getBoookRequestAction=()=>{
    return {type:GET_BOOKS_REQUEST}
}

export const getBoookSuccessAction=(payload)=>{
    return {type:GET_BOOKS_SUCCESS,payload}
}

export const getBoookFailureAction=()=>{
    return {type:GET_BOOKS_FAILURE}
}

export const getBooks=(dispatch)=>{
    dispatch(getBoookRequestAction())
    axios.get("http://localhost:7070/books").then((res)=>{
      dispatch(getBoookSuccessAction(res.data))  
    }).catch((err)=>{
        dispatch(getBoookFailureAction())
    })
}

