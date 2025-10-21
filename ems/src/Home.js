import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#2c3e50", 
          marginBottom: "20px",
        }}
      >
        Welcome to{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#ff9966,#ff5e62)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          StaffFlow
        </span>
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#2c3e50",
          marginBottom: "40px",
          maxWidth: "500px",
        }}
      >
        Manage your employees efficiently and streamline your organization's workflow.
      </p>

      <div>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "12px 25px",
            margin: "10px",
            border: "none",
            borderRadius: "30px",
            background: "#3498db",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login/Register
        </button>


      </div>
    </div>
  );
}

export default Home;
