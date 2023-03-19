import React from "react";
import {Box,Text,Center} from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
import './Github.css'

const Github = () => {
  return (
    <>
  
   <Box w={{base:'100%',md:'100%',lg:'100%'}} margin={'40px auto'}>
    <Box mb={'30px'}>
      <Text  fontSize={{base:'35px',md:'45px',lg:'50px'}} fontWeight={'500'}
          fontFamily={'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}>Github</Text>
    </Box>
    <Box w={{base:'95%',md:'80%',lg:'80%'}} m={'auto'}>
    <img
    className="gitub-photo"
      src="https://github-readme-streak-stats.herokuapp.com/?user=ranjankumar9&theme=react&hide_border=false"
      alt=""
    />
     <img
     className="gitub-photo"
      src="https://github-readme-stats.vercel.app/api?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false"
      alt=""
    />
     <img
     className="gitub-photo"
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=ranjankumar9&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
      alt=""
    />  
    <Box m={{base:'20px auto',md:'30px auto',lg:'50px auto'}} w={{base:'95%',md:'80%',lg:'80%'}}>
    <GitHubCalendar username="ranjankumar9" />
    </Box>
    </Box>
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
{/* <div className="github">
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
</div> */}