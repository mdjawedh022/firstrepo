// Product actions here
import axios from "axios"
import { GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from "./product.types"

export const getproducts=() =>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
try{
    let res = await axios.get("http://localhost:8080/products")
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    return res.data
}catch(e){
    dispatch({type:GET_PRODUCTS_ERROR,payload:e.message})
}

}