import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [age, setAge] = useState("");
  const [team, setTeam] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", { email, password, age, team })
      .then(result => {
        if(result.data.success) {
          alert("Registered Successfully!");
          navigate('/');
        } else {
          alert(result.data.message || "Registration failed!");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      <div
        className="p-4 rounded shadow-lg"
        style={{ background: "white", minWidth: "350px", maxWidth: "450px" }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            background: "linear-gradient(90deg, #ffb347, #ffcc33)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Register
        </h2>

        <form>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ageInput" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="ageInput"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="teamInput" className="form-label">Team</label>
            <input
              type="text"
              className="form-control"
              id="teamInput"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
          </div>

          <button
            onClick={handleClick}
            type="submit"
            className="btn"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              color: "white",
              fontWeight: "600",
              borderRadius: "25px"
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
