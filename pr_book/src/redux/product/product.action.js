import axios from "axios"
import { GET_PRODUCT_ERR, GET_PRODUCT_REQ, GET_PRODUCT_SUC } from "./product.actionTypes"

const getprodreq=()=>{
    return {type:GET_PRODUCT_REQ}
}
const getprodsuc=(payload)=>{
   return {type:GET_PRODUCT_SUC,payload}
}
const getproderr=()=>{
    return {type:GET_PRODUCT_ERR}
}

export const dataAppend=(params)=>(dispatch)=>{
dispatch(getprodreq())
axios.get(`http://localhost:8080/products`,params).then((res)=>{
    // console.log(res.data)
    dispatch(getprodsuc(res.data))
}).catch((err)=>{
    console.log(err)
    dispatch(getproderr())
})
}