import axios from 'axios'
import Link from 'next/link';
import React from 'react'

const Movie = ({movies}) => {
  // const {movies}=props;
  return (
    <div>
      {movies.map((movie)=>(
        <div key={movie.id}>
          <Link href={`/${movie.id}`}>{movie.Title}</Link>
        </div>
  ))}
    </div>
  )
}
export async function getServerSideProps(){
  const response= await axios.get('https://movies-database-gold.vercel.app/movies');
  let data= await response.data;
  return{
    props:{
      movies:data
    }
  }
}

export default Movie