import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BusinessAccount() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const createAccount = async () => {
    try {

      const res = await axios.post(
        "http://localhost:5000/api/business/create", // ✅ FIXED HERE
        form
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || "Error creating account");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #141e30, #243b55)"
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
        }}
      >
        <h2>Create Free Business Account</h2>

        <input
          name="name"
          placeholder="Business Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={createAccount} style={btnStyle}>
          Create Account
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#ff9900",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px"
};

export default BusinessAccount;