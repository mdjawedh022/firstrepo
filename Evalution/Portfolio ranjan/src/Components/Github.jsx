
/* eslint-disable no-lone-blocks */
// /* eslint-disable no-lone-blocks */
import React from "react";
import { Box, Text, Center, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
// import './Github.css'

const Github = () => {
  return (
    <>
      <Box w={{ base: "100%", md: "100%", lg: "100%" }} margin={"40px auto"}>
        <Box mb={"30px"}>
          <Text
            fontSize={{ base: "35px", md: "45px", lg: "50px" }}
            fontWeight={"500"}
            fontFamily={
              "Cambria, Cochin, Georgia, Times, Times New Roman, serif"
            }
          >
            Github
          </Text>
        </Box>
        <Box
          w={{ base: "95%", md: "87%", lg: "87%" }}
          m={"auto"}
          paddingLeft={{base:"",md:'70px',lg:'100px'}}
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={"10px"}
          alignItems={'center'}
          // borderWidth={'1px'}
        >
          <Box  
          //  borderWidth={'1px'}
          >
          <Image
          h={'100%'}
          w={'100%'}
            blockSize={{lg:"300px"}}
            className="gitub-photo"
            src="https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false"
            alt=""
          />
</Box>
<Box 
  // borderWidth={'1px'}
  >
          <Image
          // m={'auto'}
            // mt={{ base: "0", md: "0", lg: "0" }}
            blockSize={{base:"195px",md:'136px',lg:"220px"}}
            className="gitub-photo"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
            alt=""
          />
         </Box> 
        </Box>
       <Center>
        <Box id="calendar"
        ml={{base:"",md:'',lg:"auto"}}
        mt={{base:'30px',md:"60px"}}
         w={{base:"90%",md:"90%",lg:"90%"}}
        >
            <GitHubCalendar
              fontSize={14}
              color="#4169el"
              blockRadius={1}
              blockMargin={6}
              blockSize={16}
              showWeekdayLabels
              username="ranjankumar9"
            />
          </Box>
        </Center>

      </Box>
    </>
  );
};

export default Github;

// https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false
// https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact
// https://github-readme-stats.vercel.app/api?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false
//

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="github">
<div className="github1">
  <p>Github</p>
</div>
<div className="github2">
  <div>
    <img
    className="gitub-photo"
      src="https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false"
      alt=""
    />
  </div>
  <div>
    <img
     className="gitub-photo"
      src="https://github-readme-stats.vercel.app/api?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false"
      alt=""
    />
  </div>
  <div>
    <img
     className="gitub-photo"
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
      alt=""
    />
  </div>
  <div style={{margin: "auto", marginTop: "20px"}}>
    <GitHubCalendar username="ranjankumar9" />
  </div>
</div>
</div> */
}

{
  /* <img
className="gitub-photo"
 src="https://github-readme-stats.vercel.app/api?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false"
 alt=""
/> */
}

{/* <Box m={{ base: "20px auto", md: "30px auto", lg: "50px auto" }}>
<GitHubCalendar username="ranjankumar9" style={{}} />
</Box> */}


/* eslint-disable no-lone-blocks */

// import './Github.css'








// import React from "react";
// import { Box, Text, Center, Image } from "@chakra-ui/react";
// import GitHubCalendar from "react-github-calendar";



// const Github = () => {
//   return (
//     <>
//       <Box w={{ base: "100%", md: "100%", lg: "100%" }} margin={"40px auto"}>
//         <Box mb={"30px"}>
//           <Text
//             fontSize={{ base: "35px", md: "45px", lg: "50px" }}
//             fontWeight={"500"}
//             fontFamily={
//               "Cambria, Cochin, Georgia, Times, Times New Roman, serif"
//             }
//           >
//             Github
//           </Text>
//         </Box>
//         <Box
//           w={{ base: "95%", md: "80%", lg: "87%" }}
//           m={"auto"}
//           paddingLeft={{base:"",md:'',lg:'100px'}}
//           display={"grid"}
//           gridTemplateColumns={{
//             base: "repeat(1,1fr)",
//             md: "repeat(2,1fr)",
//             lg: "repeat(2,1fr)",
//           }}
//           gap={"10px"}
//           alignItems={'center'}
//           // borderWidth={'1px'}
//         >
//           <Box>
//           <Image
          
//             blockSize={"300px"}
//             className="gitub-photo"
//             src="https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false"
//             alt=""
//           />
// </Box>
// <Box>
//           <Image
         
//             mt={{ base: "-110px", md: "0", lg: "0" }}
//             blockSize={"220px"}
//             className="gitub-photo"
//             src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
//             alt=""
//           />
//          </Box> 
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Github;
