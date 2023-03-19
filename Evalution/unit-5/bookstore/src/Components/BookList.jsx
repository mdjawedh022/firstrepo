/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getBook } from "../Redux/Book/action";
import BookCard from "./BookCard";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.bookReducer.book);
  const location=useLocation();
  const [searchParams]=useSearchParams()
  console.log(location);
  useEffect(() => {
    const order=searchParams.get("order")
    let paramObj={
      params:{
        category:searchParams.getAll('category'),
        _sort:order && "release_year",
        _order:order,
      }
    }
    dispatch(getBook(paramObj));
  }, [location.search]);
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(4,1fr)",
      }}
      gap={"15px"}
      m={"auto"}
    >
      {books.length>0 && books.map((el) => (
        <BookCard key={el.id} book={el} />
      ))}
    </Box>
  );
};

export default BookList;
