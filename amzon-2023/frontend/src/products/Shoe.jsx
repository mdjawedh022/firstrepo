import { Box} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProductSlider from "../Components/ProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Shoe/action";
import ProductCard from "./ProductCard";

const Shoe = () => {
  const dispatch = useDispatch();
  const { shoe } = useSelector((store) => store.shoeReducers);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  // console.log(cloths)

  return (
    <>
      <Box mt={{ lg: "7%" }}>
        <Box
          w={"95%"}
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(300px, max-content))"}
          gap={"15px"}
          m={"auto"}
        >
          {shoe.length > 0 &&
            shoe.map((el, i) => <ProductCard key={i} {...el} />)}
        </Box>
        <ProductSlider />
      </Box>
    </>
  );
};

export default Shoe;
