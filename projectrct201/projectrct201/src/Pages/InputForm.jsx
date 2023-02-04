import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const InputForm = () => {
const[inputer,setInputerr]=useState("")

    const handleclick=()=>{
        console.log(inputer)
        axios.get("http://localhost:8008/user").then(({data})=>{
            let isAvailable=data.filter(elem=>elem.mobile==inputer)
            if(isAvailable.length>0){
                localStorage.setItem("loginUser",JSON.stringify(isAvailable[0]))

            }else{
                createUser();
            }
        }).catch((err)=>console.log(err))
        
    }

    const createUser = ()=>{
        let loginUser = {mobile:inputer, name:"",address:[], cart:[], payment:[]}
        
        axios.post("http://localhost:8008/user",loginUser).then(({data})=>{
            console.log(data)
            localStorage.setItem("loginUser",JSON.stringify(data))
        }).catch((err)=>console.log(err))
    }

 return (
    <div>
      <input style={{border:'solid'}}type="number" value={inputer} onChange={(e)=>setInputerr(e.target.value)}/>
      <button style={{border:'solid'}} onClick={handleclick}>Login</button>
    </div>
  )
}

export default InputForm;
