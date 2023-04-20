import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initalState = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initalState || []);
  //   console.log(brand);
  // console.log(searchParams.getAll("brand"))
  const handlefilter = (e) => {
    let newBrand = [...brand];
    if (newBrand.includes(e.target.value)) {
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
    } else {
      newBrand.push(e.target.value);
    }
    setBrand(newBrand);
  };

  useEffect(() => {
    const params = {
      brand,
    };
    setSearchParams(params);
  }, [brand]);
  return (
    <Box>
      <Flex flexDir={"column"} paddingLeft={"15px"} pt="30px">
        <Text>Filter by </Text>

        <Flex>
          {" "}
          <input
            type="checkbox"
            value={"GULMOHAR JAIPUR"}
            onChange={handlefilter}
            checked={brand.includes("GULMOHAR JAIPUR")}
          />
          <label>GULMOHAR JAIPUR</label>
        </Flex>
        <Flex>
          {" "}
          <input
            type="checkbox"
            value={"GLAM ROOTS"}
            onChange={handlefilter}
            checked={brand.includes("GLAM ROOTS")}
          />
          <label>GLAM ROOTS</label>
        </Flex>
        <Flex>
          {" "}
          <input type="checkbox" value={"Kimayra"} onChange={handlefilter} 
           checked={brand.includes("Kimayra")}
           />
          <label>Kimayra</label>
        </Flex>
        <Flex>
          {" "}
          <input type="checkbox" value={"SIDYAL"} onChange={handlefilter} 
           checked={brand.includes("SIDYAL")}
           />
          <label>SIDYAL</label>
        </Flex>
        <Flex>
          {" "}
          <input
            type="checkbox"
            value={"Marks &amp; Spencer"}
            onChange={handlefilter}
            checked={brand.includes("Marks &amp; Spencer")}
          />
          <label>Marks &amp; Spencer</label>
        </Flex>
        <Flex>
          {" "}
          <input
            type="checkbox"
            value={"AVAASA MIX N' MATCH"}
            onChange={handlefilter}
            checked={brand.includes("AVAASA MIX N' MATCH")}
          />
          <label>AVAASA MIX N' MATCH</label>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideBar;
