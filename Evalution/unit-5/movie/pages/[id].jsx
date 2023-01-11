import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
const SingleMovie = ({ movie }) => {
  // console.log(movie.Images[0]);

  const handleClick = () => {
    const payload = {
      Title: movie.Title,
      Released: movie.Released,
      Images: movie.Images[0],
    };
    axios
      .post(`http://localhost:8080/watchlist`, payload)
      .then((el) => console.log(el.data))
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <h1>Movie name: {movie.Title}</h1>
      <p>Released: {movie.Released}</p>
      <div>
        <Image src={movie.Images[0]} alt="h" width="700" height="500"></Image>
        <Image src={movie.Images[1]} alt="h" width="700" height="500"></Image>
        <Image src={movie.Images[2]} alt="h" width="700" height="500"></Image>
      </div>

      <button onClick={handleClick}>POST</button>
    </div>
  );
};

export async function getStaticPaths() {
  // console.log(context)
  const response = await axios.get(
    `https://movies-database-gold.vercel.app/movies`
  );
  let data = await response.data;
  return {
    paths: data.map((movie) => ({ params: { id: movie.id.toString() } })),
    // paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const {
    params: { id },
  } = context;
  const response = await axios.get(
    `https://movies-database-gold.vercel.app/movies/${id}`
  );
  let data = await response.data;
  return {
    props: {
      movie: data,
    },
  };
}

export default SingleMovie;
