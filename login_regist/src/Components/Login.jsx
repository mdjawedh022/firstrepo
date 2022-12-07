import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser= JSON.parse(localStorage.getItem("user"));
    // console.log(loggeduser)
    if (
      input.email===loggeduser.email &&
      input.password===loggeduser.password
    ) {
       navigate("/")
      localStorage.setItem("jawedfgh", true);
     
      swal({
        icon: "success",
      });
    } else {
      swal("Oops!", "Somthing wrong", "error");
    }
  };
  return (
    <>
      <section className="background">
        <div>
          <h2>Login</h2>
          <form className="form" onSubmit={handleLogin}>
            <div>
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                className="email"
                placeholder="write email..."
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value, })
                }
              />
            </div>
            <div>
              <label>Your Password</label>
              <input
                type="password"
                name="password"
                className="password"
                placeholder="write password..."
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]:e.target.value, })
                }
              />
            </div>
            <div>
              <button type="submit" className="button">
                Login
              </button>
            </div>
            <div>
              <h3>
                If you not create account{" "}
                <Link style={{ textDecoration: "none" }} to="/register">
                  Register
                </Link>{" "}
              </h3>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
