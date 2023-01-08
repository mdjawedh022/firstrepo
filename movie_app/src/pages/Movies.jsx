import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Movies() {
    const [data,setData]=useState([]);
 
    const getData=async()=>{
       try{
        let res=await fetch(`https://movies-database-gold.vercel.app/movies`)
        let data=await res.json();
        console.log(data)
        setData(data)
       }catch(err){
       console.log("err",err)
       }
    }
    useEffect(()=>{
      getData()
    },[])
    return (
        <><h1>Movies App</h1>
    <div className='movie-app'>
        
      {data.map((el)=>(
         <div className='app_movie' key={el.id}><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="jawed" />
         <h1>{el.Title}</h1>
         <h2>Director: {el.Director}</h2>
         <h4>Actors:~ {el.Actors}</h4>
          <button>See More</button>
          
         </div>
      ))}
    </div>
    </>
  )
}

export default Movies
