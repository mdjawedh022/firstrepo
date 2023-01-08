import React from 'react'
import {useRouter} from "next/router"
const page = () => {
  const router=useRouter();
  console.log(router)
return (
    <div>
       page
    </div>
  )
}

export default page 

