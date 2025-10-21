import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function UserDetails() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/user-details", {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": token }
      })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(err => console.error(err));
    }
  }, []);

  return (
    <div className="d-flex vh-100 bg-gradient justify-content-center align-items-center" style={{ background: "linear-gradient(135deg, #74ebd5, #ACB6E5)" }}>
      <div className="w-50 bg-white rounded p-4 shadow-lg">
        <h2 className="mb-4 text-center" style={{ fontWeight: "700", background: "linear-gradient(90deg, #ff9966, #ff5e62)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          User Details
        </h2>

        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Age</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {user ? (
              <tr>
                <td>{user.email}</td>
                <td>{user.age || "N/A"}</td>
                <td>{user.team || "N/A"}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Admin Dashboard Button */}
        {user.role === "admin" && (
          <div className="text-center mt-3">
            <button
              className="btn"
              style={{
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                color: "white",
                fontWeight: "600",
                borderRadius: "25px",
                padding: "10px 20px"
              }}
              onClick={() => navigate("/all_users")}
            >
              Admin Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
