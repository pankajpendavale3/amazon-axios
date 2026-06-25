import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Success");

      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #232526, #414345)"
      }}
    >
      {/* LOGIN CARD */}
      <div
        style={{
          width: "360px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          textAlign: "center"
        }}
      >

        {/* TITLE */}
        <h2 style={{ marginBottom: "15px" }}>
          Sign in or create account
        </h2>

        {/* EMAIL INPUT */}
        <input
          type="text"
          placeholder="Enter mobile number or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />

        {/* PASSWORD INPUT */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />

        {/* BUTTON */}
        <button
          onClick={loginUser}
          style={{
            width: "100%",
            padding: "12px",
            background: "#ff9900",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Continue
        </button>

        {/* INFO TEXT */}
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#555" }}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <hr style={{ margin: "15px 0" }} />

        <p style={{ marginBottom: "5px" }}>
          Buying for work?
        </p>

        {/* BUSINESS LINK */}
        <a
          href="/business"
          style={{
            color: "#0066c0",
            textDecoration: "none",
            fontSize: "14px"
          }}
        >
          Create a free business account
        </a>

      </div>
    </div>
  );
}

export default Login;