import { useState } from "react";
import amazonOrder from "../assets/images/AmazonOrder.jpg";

function OrdersPage() {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        backgroundImage: `url(${amazonOrder})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* FORM BOX */}
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          padding: "30px",
          width: "380px",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Sign in or create account</h2>

        <label>Enter mobile number or email</label>

        <input
          type="text"
          placeholder="Mobile number or email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#f0c14b",
            border: "1px solid #a88734",
            cursor: "pointer",
          }}
        >
          Continue
        </button>

        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <hr />

        <h4>Buying for work?</h4>

        <a href="/">Create a free business account</a>
      </div>
    </div>
  );
}

export default OrdersPage;