import { useState } from "react";
import "./CustomerService.css";

function CustomerService() {
  const [search, setSearch] = useState("");

  const categories = [
    {
      title: "Your Orders",
      desc: "Track packages, edit or cancel orders",
      icon: "📦",
    },
    {
      title: "Returns & Refunds",
      desc: "Return or exchange items easily",
      icon: "🔄",
    },
    {
      title: "Manage Addresses",
      desc: "Update or add delivery addresses",
      icon: "📍",
    },
    {
      title: "Payment Settings",
      desc: "Add or update payment methods",
      icon: "💳",
    },
    {
      title: "Account Settings",
      desc: "Change email, password & login info",
      icon: "👤",
    },
    {
      title: "Device Support",
      desc: "Help with devices & troubleshooting",
      icon: "📱",
    },
  ];

  return (
    <div className="help-center">

      {/* HEADER */}
      <div className="help-header">
        <h1>👋 Hello. How can we help you?</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search help topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>
      </div>

      {/* HELP GRID */}
      <div className="help-grid">
        {categories
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <div className="help-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
      </div>

      {/* SUPPORT SECTION */}
      <div className="support-box">
        <h2>Still need help?</h2>
        <p>Our support team is available 24/7</p>

        <button className="contact-btn">
          📞 Contact Support
        </button>
      </div>

      {/* CHATBOT UI (SIMPLE FRONTEND) */}
      <div className="chatbot">
        <div className="chat-header">🤖 Support Assistant</div>

        <div className="chat-body">
          <p className="bot">Hi 👋 I’m here to help you!</p>
          <p className="bot">Ask me anything about orders, returns, payments.</p>
        </div>

        <div className="chat-input">
          <input placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;