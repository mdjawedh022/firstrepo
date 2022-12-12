import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {
  return <div data-testid="products-container">{products.map((data) => (
    <ProductItem key={data.id}
     title={data.title} 
     image={data.image} 
     price={data.price}
     category={data.category} />
  ))}</div>;
};

// export
export default ProductList;