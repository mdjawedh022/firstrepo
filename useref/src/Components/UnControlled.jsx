import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const UnControlled = () => {
    const luckyName=useRef(null);
    const [show,setShow]=useState(false);

    const submitForm=(e)=>{
        e.preventDefault();
        const name=luckyName.current.value;
        name===""? alert("plz fill the data"):setShow(true);
        // console.log(luckyName.current.value)
    }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
        <label htmlFor="luckyName">Enter your lucky name</label><br />
        <input type="text"  id="luckyName" ref={luckyName} />
        </div><br />
        <button>Submit</button>
      </form>
<p>{show?`Your lucky name is ${luckyName.current.value}`:""}</p>
    </div>
  )
}

export default UnControlled;
