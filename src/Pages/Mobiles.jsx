import "./Mobiles.css";
import mobile1 from "../assets/images/phone1.jpg";
import mobile2 from "../assets/images/phone2.jpg";
import mobile3 from "../assets/images/phone3.jpg";
import mobile4 from "../assets/images/phone4.jpg";

function Mobiles() {
  const mobiles = [
    {
      id: 1,
      name: "iPhone 15",
      price: "₹69,999",
      offer: "10% Instant Discount",
      image: mobile1,
      desc: "128GB Storage, A16 Bionic Chip, Dynamic Island."
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: "₹74,999",
      offer: "15% Bank Offer",
      image: mobile2,
      desc: "AI Camera, AMOLED Display, 256GB Storage."
    },
    {
      id: 3,
      name: "OnePlus 13",
      price: "₹59,999",
      offer: "No Cost EMI Available",
      image: mobile3,
      desc: "Snapdragon Processor, Fast Charging."
    },
    {
      id: 4,
      name: "Redmi Note 14 Pro",
      price: "₹24,999",
      offer: "20% Off",
      image: mobile4,
      desc: "200MP Camera, 5G Support."
    }
  ];

  return (
    <div className="mobile-page">
      <h1>Latest Mobile Phones</h1>

      <div className="mobile-container">
        {mobiles.map((item) => (
          <div key={item.id} className="mobile-card">
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

export default Mobiles;