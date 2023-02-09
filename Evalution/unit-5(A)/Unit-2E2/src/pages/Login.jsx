import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/auth.actions";
const initState = {
  email: "eve.holt@reqres.in",
  password: "cityclicka",
};
const Login = () => {
  const [loginC, setLoginC] = useState(initState);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handChange = (e) => {
    const {name,value} =e.target;
    setLoginC({
      ...loginC,
      [name]: value,
    })
  };
  const handSub = (e) => {
    e.preventDefault();
    if(loginC.email && loginC.password){
      dispatch (login(loginC))
    }
  };

  if(loading) return <div>Loading...</div>
  else if(error) return <div>Error...</div>
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        maxWidth: "210px",
        gap: "11px",
      }}
    >
      Login
      <form onSubmit={handSub}>
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Email"
          value={loginC.email}
          onChange={handChange}
        />
        <input 
        data-cy="login-password"
        name="password"
        type="password"
        placeholder="Password"
        value={loginC.password}
        onChange={handChange}
        />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
