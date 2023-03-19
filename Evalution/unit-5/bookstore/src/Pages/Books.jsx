import { Box } from "@chakra-ui/react";
import React from "react";
import BookList from "../Components/BookList";
import SideBar from "../Components/SideBar";

const Books = () => {
  return (
    <>
      <Box display={"flex"} gap={"20px"} mt={{ base: "", md: "", lg: "4%" }}>
        <Box
          w={{ base: "45%", md: "30%", lg: "20%" }}
        //   position={"fixed"}
        //   h={"100%"}
        //   bg={"white"}
        //   zIndex={"5"}
        //   marginRight={'15%'}
        >
          <SideBar />
        </Box>
        <Box m={"10px auto"}>
          <BookList />
        </Box>
      </Box>
    </>
  );
};

export default Books;
