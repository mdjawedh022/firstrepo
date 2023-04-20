import { useState } from "react"

const Signup=()=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [location,setLocation]=useState("")
    const [age,setAge]=useState(0)


    const handleSubmit=()=>{
        const payload={
            email:email,
            pass:pass,
            location:location,
            age:age
        }
        // connecting FE with BE
        fetch("http://localhost:4500/users/register",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <>
        <h1>Registration Page</h1>
        <div>
            Email: <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            Password: <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            Location: <input type="text" placeholder="Where are you from?" value={location} onChange={(e)=>setLocation(e.target.value)}/>
            Age: <input type="number" placeholder="Enter your age.." value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export {Signup} 