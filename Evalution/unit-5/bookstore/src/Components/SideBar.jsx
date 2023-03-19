import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const intialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || []);
  const [order, setOrder] = useState(intialOrder || "");
  // console.log(category);
  // console.log(searchParams.getAll("category"))

  const handleFilter = (e) => {
    let newCategory = [...category];
    //if a user change any category it should be stored in state
    //if the category is already present pop out of the state

    //arr=[61,2,3,4,5]
    //arr.splice(arr.indexOf(3),1);arr.indexOf(el)

    if (newCategory.includes(e.target.value)) {
      //filter
      //splice,slice
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);
  return (
    <>
      <Box
        p={"60px 20px"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        h={"100%"}
      >
        <Text fontWeight={"600"} fontSize={"30px"}>
          Filter By
        </Text>
        <Box>
          <input
            type="checkbox"
            value={"Novel"}
            onChange={handleFilter}
            checked={category.includes("Novel")}
          />
          <label htmlFor="">Novel</label>
        </Box>

        <Box>
          <input
            type="checkbox"
            value={"Motivational"}
            onChange={handleFilter}
            checked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </Box>

        <Box>
          <input
            type="checkbox"
            value={"Thriller"}
            onChange={handleFilter}
            checked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            value={"Science_Fiction"}
            onChange={handleFilter}
            checked={category.includes("Science_Fiction")}
          />
          <label>Science Friction</label>
        </Box>
        <Text fontWeight={"600"} fontSize={"30px"}>
          Sort By order
        </Text>
        <Box onChange={handleSort}>
          <input type="radio" name="sort_by" value={"asc"} defaultChecked={order==="asc"} />
          <label>Ascending</label>
          <input type="radio" name="sort_by" value={"desc"} defaultChecked={order==="desc"}/>
          <label>Descending</label>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
