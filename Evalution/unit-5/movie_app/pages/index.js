import React from 'react'
import Link from "next/link"
const index = ({blogs}) => {
  return (
    <div>
      {blogs.map((blog)=>(
        <div key={blog.id}>
           <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
           <div dangerouslySetInnerHTML={{ __html:blog.content}}></div>
<hr/>
</div>
      ))}
    </div>
  )
}
// this gets called on every request
export async function getStaticProps(){
    //fetch data from external API
    let res=await fetch("http://localhost:4000/blogs")
    let data =await res.json()
   
    return{
        props:{blogs:data}
    }
}
export default index
