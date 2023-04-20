import { useState } from "react"

const Login=()=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit=()=>{
        const payload={
            email:email,
            pass:pass
        }
        // connecting FE with BE
        fetch("http://localhost:4500/users/login",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        })
        .catch(err=>console.log(err))
    }
    return (
        <>
        <h1>Login Page</h1>
        <div>
            Email: <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            Password: <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export {Login} 