import { useEffect, useState } from "react"

const Notes=()=>{
    const [notes,setNotes]=useState([])
    //getting the notes
    useEffect(()=>{
        fetch("http://localhost:4500/notes",{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setNotes(res)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
            {notes.length>0?
                notes.map((ele)=>
                    <div>
                        <h3>{ele.title}</h3>
                        <p>{ele.body}</p>
                        <button>Delete</button>
                    </div>
                ):<div>
                    <h1>There is no note for the user</h1>
                </div>
            }
        </>
    )
}

export {Notes}