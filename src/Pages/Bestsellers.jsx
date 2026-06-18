import best1 from "../assets/images/best5.jpg";
import best2 from "../assets/images/best6.jpg";
import best3 from "../assets/images/best7.jpg";
import best4 from "../assets/images/best8.jpg";

function Bestsellers() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 15",
      price: "₹69,999",
      offer: "15% OFF",
      image: best1,
      desc: "One of Amazon's bestselling smartphones.",
    },
    {
      id: 2,
      name: "Noise Smart Watch",
      price: "₹2,499",
      offer: "50% OFF",
      image: best2,
      desc: "Top-selling smartwatch with fitness tracking.",
    },
    {
      id: 3,
      name: "Boat Airdopes",
      price: "₹1,299",
      offer: "60% OFF",
      image: best3,
      desc: "Wireless earbuds with premium sound quality.",
    },
    {
      id: 4,
      name: "HP Laptop",
      price: "₹54,999",
      offer: "20% OFF",
      image: best4,
      desc: "Amazon bestselling laptop for students and professionals.",
    },
  ];

  return (
    <div className="mobile-page">
      <h1>Amazon Bestsellers</h1>

      <div className="mobile-container">
        {products.map((item) => (
          <div className="mobile-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <h3>{item.price}</h3>

            <p>{item.offer}</p>

            <p>{item.desc}</p>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;