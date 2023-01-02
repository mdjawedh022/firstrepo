import React from "react";
import {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { getproducts } from "../../redux/product/product.actions";
import Product from "./Product/Product";
const Products = () => {

  const products= useSelector((store)=>store.product.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getproducts())
  },[])


return <div>{products.map((elem)=><Product key={elem.id} elem={elem}/>)}</div>;


 
};

export default Products;
