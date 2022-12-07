import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in localStorage

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <section className="background">
        <div>
          <h2>Create an Account</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label>Your Name</label>
              <br />
              <input
                type="text"
                name="name"
                className="name"
                placeholder="write name..."
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]:e.target.value, })
                }
              />
            </div>
            <div>
              <label>Your Email</label>
              <br />
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
              <br />
              <input
                type="password"
                name="password"
                className="password"
                placeholder="write password..."
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value, })
                }
              />
            </div>
            <div>
              <button type="submit" className="button">
                Register
              </button>
            </div>
            <div>
              <h3>
                Have already account ?{" "}
                <Link style={{ textDecoration:"none" }} to="/login">
                  Login
                </Link>{" "}
              </h3>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
