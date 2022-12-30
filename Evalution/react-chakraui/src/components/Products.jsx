import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Container,
  Flex,
  Box,
  Grid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const getData = (page = 1, limit = 3) => {
  return axios.get(
    `http://localhost:8080/products?_page=${page}&_limit=${limit}`
  );
};

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);


  useEffect(() => {
    setLoading(true);
    getData(page, limit)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setError(true);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, limit]);

  if (loading) {
    return (
      <Stack my={20}>
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
        <Skeleton height="40px/" />
      </Stack>
    );
  }

  if (error) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg",
        }}
      >
        <Alert
          status="erroe"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
          px={{ base: 1, sm: 1, md: 4, lg: 6 }}
        >
          <AlertIcon />
          <AlertDescription>Somthing went Wrong</AlertDescription>
        </Alert>
      </Container>
    );
  }

  const handleClick = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleLimit = (e) =>{
    let x=e.target.value
    setLimit(x)
  }
  const handleFs = () => {
    setPage(1);
  };
  const handleLs = ()=>{
    setPage()
  }


  return (
    <Box>
      {/*  AddProduct */}
      <AddProduct />
      {/* List of Products */}
      <Grid templateColumns="repeat(3,1fr)" gap={16}>
        {data.map((item) => (
          <Product
            image={item.imageSrc}
            title={item.title}
            id={item.id}
            category={item.category}
            gender={item.gender}
            price={item.price}
          />
        ))}
      </Grid>
      {/* Pagination */}
      <Pagination
        page={page}
        handleClick={handleClick}
        handlePrev={handlePrev}
        handleLimit={handleLimit}
        handleFs={handleFs}
        handleLs={handleLs}
      />
    </Box>
  );
};

export default Products;
