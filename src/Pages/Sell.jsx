import {
  FaStore,
  FaMoneyBillWave,
  FaPercentage,
  FaChartLine,
  FaBoxOpen,
  FaRocket
} from "react-icons/fa";

function Sell() {
  const benefits = [
    {
      icon: <FaPercentage />,
      title: "ZERO Referral Fee",
      desc: "Sell over 12.5 crore products with zero referral fee.",
    },
    {
      icon: <FaStore />,
      title: "Start Your Business",
      desc: "Register with GSTIN and active bank account.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Fee Drop Highlights",
      desc: "Big savings with the latest fee reductions.",
    },
    {
      icon: <FaChartLine />,
      title: "Grow Faster",
      desc: "Reach millions of Amazon customers.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Easy Product Listing",
      desc: "Add products and manage inventory easily.",
    },
    {
      icon: <FaRocket />,
      title: "Boost Sales",
      desc: "Run promotions and grow your business.",
    },
  ];

  return (
    <div className="sell-page">

      {/* Banner */}
      <div className="sell-banner">
        <h1>Become an Amazon Seller</h1>

        <p>
          ZERO referral fee on over 12.5 crore products
        </p>

        <p>
          Register with a valid GSTIN and an active bank account
          to become an Amazon.in seller.
        </p>

        <button>Start Selling</button>
      </div>

      {/* Festive Announcement */}
      <div className="announcement-box">
        <h2>Festive Announcement</h2>
        <p>
          Big savings with the new fee reductions across all products.
        </p>
      </div>

      {/* Benefits */}
      <h2 className="section-title">
        Fee Drop Highlights
      </h2>

      <div className="sell-grid">
        {benefits.map((item, index) => (
          <div className="sell-card" key={index}>
            <div className="sell-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sell;