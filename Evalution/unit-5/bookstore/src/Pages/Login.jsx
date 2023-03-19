import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Auth/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const loginHandler = () => {
    let userData = { email, password };
    dispatch(login(userData)).then(()=>{
      alert("successful Login")
      navigate("/")
    })
    .catch(()=>{
      alert('error')
    })
  };
  return (
    <>
      <Box mt={'120px'} >
      
        <Box borderRadius={'10px'} w={'16%'} m={'auto'} borderWidth={'1px'}p={'30px'}>
        <Text textAlign={'center'} fontWeight={'600'}>Login</Text>
          <label>email</label><br/> 
          <input
            type="email"
            placeholder="email.."
            value={email}
            style={{border:'1px solid black' ,borderRadius:'5px',paddingLeft:"10px"}}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}<br/>
          <label>password</label><br/>
          <input
            style={{border:'1px solid black',borderRadius:'5px',paddingLeft:"10px"}}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
        <button  style={{border:'1px solid black',marginTop:'10px' ,borderRadius:'5px',padding:"0px 75px"}} onClick={loginHandler}>Login</button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
