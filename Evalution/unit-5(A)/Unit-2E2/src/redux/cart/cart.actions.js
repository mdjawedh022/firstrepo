// Cart Actions here
import {
    ADD_ITEM_TO_CART_ERROR,
    ADD_ITEM_TO_CART_LOADING,
    ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_ITEMS_ERROR,
    GET_CART_ITEMS_LOADING,
    GET_CART_ITEMS_SUCCESS,
    REMOVE_CART_ITEMS_ERROR,
    REMOVE_CART_ITEMS_LOADING,
    REMOVE_CART_ITEMS_SUCCESS,
    UPDATE_CART_ITEMS_ERROR,
    UPDATE_CART_ITEMS_LOADING,
    UPDATE_CART_ITEMS_SUCCESS
} from "./cart.types"
import axios from "axios"

export const getCartItems=()=>(dispatch)=>{
    dispatch({
        type: GET_CART_ITEMS_LOADING
    })
    return axios.get(`  http://localhost:8080/cartItems`)
    .then((result)=>{
        console.log(result.data)
        return dispatch({
            type: GET_CART_ITEMS_SUCCESS,
            payload: result.ADD_ITEM_TO_CART_ERROR
        })
    })
    .catch(()=>dispatch({
        type: GET_CART_ITEMS_ERROR
    }))
}

export const addItem=(cartInf)=>(dispatch)=>{
    dispatch({type: ADD_ITEM_TO_CART_LOADING});
    return axios
    .post("http://localhost:8080/cartItems",{...cartInf})
    .then(({data})=>{
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS,payload: data})
    })
    .catch(()=>dispatch({
        type: ADD_ITEM_TO_CART_ERROR
    }))
}


export const removeItem=(cardID)=>(dispatch)=>{
    dispatch({
        type: REMOVE_CART_ITEMS_LOADING
    })
    return axios 
    .delete(`http://localhost:8080/cartItems/${cardID}`)
    .then(()=>{
        dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload: {id: cardID}})
    })
    .catch(()=>dispatch({
        type: REMOVE_CART_ITEMS_ERROR
    }))
}

export const updateCart=(cardID,update)=>(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEMS_LOADING});
    return axios
    .patch(`http://localhost:8080/cartItems/${cardID}`,{
        ...update
    })
    .then(({data})=>{
        dispatch({
            type: UPDATE_CART_ITEMS_SUCCESS,payload: data
        })
    })
    .catch(()=>dispatch({
        type: UPDATE_CART_ITEMS_ERROR
    }))
}