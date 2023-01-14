import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import LoadingIndicator from "./LoadingIndicator"
import RestaurantCard from "./RestaurantCard"

const getData=()=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10`).then((res)=>res.json())
}
function Restaurants() {
  // const [page,setPage]=useState(1);
  // const[total,setTotal]=useState(1);
  const[loading,setLoading]=useState(true)
  const[resturant,setResturant]=useState([]);


useEffect(()=>{
  fetchData()
},[])
  const fetchData=async()=>{
    setLoading(true)
    try{
   let data=await getData()
   console.log(data)
   setResturant(data.data)
   setLoading(false)
    }catch(err){
      console.log(err,"err")
      setLoading(true)
    }

  }
if(loading){
  return <LoadingIndicator />;
}
  return (
    <div>
      {/* {loading?<LoadingIndicator/>:""} */}
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
      {resturant.map((elem)=>(
        <div key={elem.id}> <RestaurantCard  {...elem}/></div>
      ))}
      </div>
      <div>
        {/* Pagination Component */}
      </div>
    </div>
  );
}

export default Restaurants;
