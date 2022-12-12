import { useContext } from "react";
import { useId, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const user = {
  email: "",
  password: ""
}

function Login() {

  const [userID, setUserID] = useState(user);
  const { authState, loginUser} = useContext(AuthContext);
  const [boolean, setBoolean] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserID({
      ...userID,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    setBoolean(true);
    e.preventDefault();
    const url = `https://reqres.in/api/login`
    try {

      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({
          email: userID.email,
          password: userID.password
        })
      })

      let data = await res.json()
      if(data.token){
        loginUser(data.token)
      }
      else{
        alert("not found")
      }
      // console.log(data);

    } catch (err) {
      console.log(err.message);
    }
  }

  if (authState.isAuth) {
    return <Navigate to={"/dashboard"} />
  }

  // console.log(token, isAuth);

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input name="email" value={userID.email} onChange={handleChange} 
            data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input name="password" value={userID.password} onChange={handleChange}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button disabled={boolean} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;