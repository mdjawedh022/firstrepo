import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPageNew = () => {
  const [productDetails, setproductDetails] = useState({});
  const [image,setimage] = useState("")
  const { id } = useParams();
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = () => {
    axios
      .get("https://meesho-database.vercel.app/products")
      .then(({ data }) => {
        let product = data.filter((elem) => elem.id == id)[0];
        console.log(product);
        setproductDetails(product);
        setimage(product.images[0])
      })
      .catch((err) => alert("Someting went wrong"));
  };
  return (
    <>
    {productDetails && 
    <div>
      <h1>Hey I am Product Details Page New</h1>
      <img src={image} alt="product" />
    </div>
    }
    </>
  );
};

export default ProductDetailPageNew;
