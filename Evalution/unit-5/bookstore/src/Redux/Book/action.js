import axios from "axios"
import { GET_BOOK_ERROR, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./actionType"



export const getBookRequestAction=()=>{
    return {type:GET_BOOK_REQUEST}
}
export const getBookSuccessAction=(payload)=>{
    return {type:GET_BOOK_SUCCESS,payload}
}
export const getBookErrorAction=()=>{
    return {type:GET_BOOK_ERROR}
}

export const getBook=(param)=>(dispatch)=>{
  dispatch(getBookRequestAction())
  axios.get(`http://localhost:0420/books`,param)
   .then((res)=>{
    dispatch(getBookSuccessAction(res.data))
   })
   .catch((e)=>{
    dispatch(getBookErrorAction())
    alert(e,"get book url not working.")
   })
};
// let obj={
//     params:{
//         category:['Novel','Motivational'],
//         _sort:"release_year",
//         _order:"asc"
//     }
// }