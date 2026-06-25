import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const total = location.state?.total || 0;
  const user = JSON.parse(localStorage.getItem("user"));

  const [method, setMethod] = useState("QR");

  const upiUrl =
    "upi://pay?pa=9322952581@pthdfc&pn=Pankaj%20Rajendra%20Pendavale&cu=INR";

  const confirmPayment = async () => {
    try {
      if (!user) {
        alert("Login Required");
        return;
      }

      await axios.post("http://localhost:5000/api/cart/checkout", {
        email: user.email,
        paymentMethod: method,
      });

      alert(`${method} Payment Successful 🎉`);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Payment Failed");
    }
  };

  return (
    <div className="payment-page">
      <div className="checkout-container">

        {/* Header */}
        <div className="checkout-header">
          <div className="secure-left">
            <div className="lock-icon">🔒</div>

            <div>
              <h2>Secure Checkout</h2>
              <p>Your payment information is encrypted and secure</p>
            </div>
          </div>

          <div className="amount-box">
            <span>Amount Payable</span>
            <h1>₹{Number(total).toLocaleString("en-IN")}</h1>
          </div>
        </div>

        {/* Body */}
        <div className="checkout-body">

          {/* Sidebar */}
          <div className="payment-sidebar">

            <div
              className={`pay-option ${method === "QR" ? "active" : ""}`}
              onClick={() => setMethod("QR")}
            >
              <h3>📱 QR Code</h3>
              <p>Scan & Pay</p>
            </div>

            <div
              className={`pay-option ${method === "UPI" ? "active" : ""}`}
              onClick={() => setMethod("UPI")}
            >
              <h3>🏦 UPI ID</h3>
              <p>PhonePe, Google Pay, Paytm</p>
            </div>

            <div
              className={`pay-option ${method === "CARD" ? "active" : ""}`}
              onClick={() => setMethod("CARD")}
            >
              <h3>💳 Card</h3>
              <p>Debit / Credit Card</p>
            </div>

            <div
              className={`pay-option ${method === "BANK" ? "active" : ""}`}
              onClick={() => setMethod("BANK")}
            >
              <h3>🏛 Net Banking</h3>
              <p>All Major Banks</p>
            </div>

          </div>

          {/* Right Content */}
          <div className="payment-content">

            {method === "QR" && (
  <div className="payment-box">
    <h2>📱 QR Code Payment</h2>

    <p>Scan QR using any UPI App</p>

    <div className="qr-wrapper">
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
          upiUrl
        )}`}
        alt="QR"
      />
    </div>

    <div className="payment-steps">
      <p>1. Open PhonePe / Google Pay / Paytm</p>
      <p>2. Scan QR Code</p>
      <p>3. Complete Payment</p>
    </div>
  </div>
)}
            {method === "UPI" && (
  <div className="payment-box">

    <h2>🏦 UPI Payment</h2>

    <input
      className="payment-input"
      placeholder="Enter UPI ID (example@paytm)"
    />

    <button className="continue-btn">
      Verify UPI
    </button>

  </div>
)}

           {method === "CARD" && (
  <div className="card-payment-box">

    <h2>💳 Card Payment</h2>

    <div className="card-preview">

      <div className="card-chip"></div>

      <div className="card-number">
        XXXX XXXX XXXX 1234
      </div>

      <div className="card-bottom">
        <span>CARD HOLDER</span>
        <span>12/28</span>
      </div>

    </div>

    <div className="card-form">

      <input
        className="payment-input"
        placeholder="Card Number"
      />

      <input
        className="payment-input"
        placeholder="Card Holder Name"
      />

      <div className="card-row">

        <input
          className="payment-input"
          placeholder="MM / YY"
        />

        <input
          className="payment-input"
          placeholder="CVV"
          type="password"
        />

      </div>

    </div>

  </div>
)}

            {method === "BANK" && (
  <div className="bank-payment-box">

    <h2>🏛 Net Banking</h2>

    <div className="bank-grid">

      <div className="bank-card">HDFC Bank</div>

      <div className="bank-card">ICICI Bank</div>

      <div className="bank-card">SBI Bank</div>

      <div className="bank-card">Axis Bank</div>

      <div className="bank-card">Kotak Bank</div>

      <div className="bank-card">Bank of Baroda</div>

    </div>

    <div className="bank-login">

      <h3>Internet Banking Login</h3>

      <input
        className="payment-input"
        placeholder="Customer ID / User ID"
      />

      <input
        className="payment-input"
        type="password"
        placeholder="Password"
      />

      <button className="continue-btn">
        Continue Securely
      </button>

    </div>

  </div>
)}
          </div>
        </div>

        {/* Security Footer */}
        <div className="security-strip">
          <div>✅ 100% Secure Payment</div>
          <div>Verified by VISA</div>
          <div>MasterCard SecureCode</div>
          <div>RuPay</div>
        </div>

        {/* Pay Button */}
        <button
          className="pay-btn"
          onClick={confirmPayment}
        >
          🔒 PAY ₹{Number(total).toLocaleString("en-IN")}
        </button>

      </div>
    </div>
  );
}

export default Payment;