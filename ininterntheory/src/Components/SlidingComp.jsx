// import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";

const append = [
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
    title: "Siddharth Viyyapu",
    company: "Intern at Gooseberry",
    description:
      "I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. They've set the bars really high! Kudos team!",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
    title: "Sshikha Bodwaani",
    company: "Sr. Exec. HR at BookMyShow",
    description:
      "We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them.",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
    title: "Harshil Bhadra",
    company: "Intern at Porsche",
    description:
      "If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start.",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
    title: "Amani Nagda",
    company: "Intern at Viacom18",
    description:
      "I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity.",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
    title: "Siddharth Viyyapu",
    company: "Intern at Gooseberry",
    description:
      "I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. They've set the bars really high! Kudos team!",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
    title: "Sshikha Bodwaani",
    company: "Sr. Exec. HR at BookMyShow",
    description:
      "We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them.",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
    title: "Harshil Bhadra",
    company: "Intern at Porsche",
    description:
      "If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start.",
  },
  {
    img: "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
    title: "Amani Nagda",
    company: "Intern at Viacom18",
    description:
      "I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity.",
  },
];
export const SlidingComp = () => {
  const [data, setData] = useState(append);

  const breakPoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
  ];

  return (
    <div className="slid">
      <div style={{ width: "80%", margin: "auto" }}>
        {
          <Carousel breakPoints={breakPoints}>
            {data.map((item) => (
              <div className="append_data">
                {/* <p>{item}</p> */}
                <div>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: "10px", color: "blue" }}>
                    {item.company}
                  </p>
                </div>
                <hr />
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        }
      </div>
    </div>
  );
};
