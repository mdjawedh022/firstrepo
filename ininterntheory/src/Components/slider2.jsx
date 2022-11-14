// import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";

const append = [
  {
    img: "https://assets.interntheory.com/uploads/company/logos/964b36c595044cf05eeab95d881e196638a6b3ef.jpg",
    title: "R Programming Course",
   
    
  },
  {
    img: "https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg",
    title: "Android App Development Using",
   
      
  },
  {
    img:"https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg",
    title:"IT Starter Pack (4 Courses)"
  },
  {
    img: "https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg",
    title: "R Programming Course",
   
    
  },
  {
    img: "https://assets.interntheory.com/uploads/company/logos/964b36c595044cf05eeab95d881e196638a6b3ef.jpg",
    title: "Android App Development Using",
   
      
  },
  {
    img:"https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg",
    title:"IT Starter Pack (4 Courses)"
  }
  
];
export const Slider2 = () => {
  const [data, setData] = useState(append);

  const breakPoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 500, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  ];

  return (
    <div className="d_slid">
      <div style={{ width: "80%" ,height:"140px", margin: "auto",background:"white" }}>
        {
          <Carousel breakPoints={breakPoints}>
            {data.map((item) => (
              <div className="d_append_data">
                {/* <p>{item}</p> */}
                <div style={{display:"flex",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </Carousel>
        }
      </div>
    </div>
  );
};
