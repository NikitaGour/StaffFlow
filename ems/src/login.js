
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          localStorage.setItem("token", result.data.token);
          navigate("/user-details");
        } else {
          alert(result.data.message);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        className="p-4 rounded shadow-lg"
        style={{ background: "white", minWidth: "350px", maxWidth: "400px" }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            background: "linear-gradient(90deg, #ff9966, #ff5e62)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Login
        </h2>

        <form>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              onClick={handleClick}
              className="btn btn-primary"
              style={{ flex: 1, marginRight: "5px", borderRadius: "25px" }}
            >
              Login
            </button>
            <Link
              to="/register"
              className="btn btn-success"
              style={{ flex: 1, marginLeft: "5px", borderRadius: "25px" }}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
