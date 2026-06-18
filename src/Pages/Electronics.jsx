import electronic1 from "../assets/images/electronic7.jpg";
import electronic2 from "../assets/images/electronic5.jpg";
import electronic3 from "../assets/images/electronic3.jpg";
import electronic4 from "../assets/images/electronic6.jpg";

function Electronics() {
  const electronics = [
    {
      id: 1,
      name: "HP Laptop",
      price: "₹55,999",
      offer: "15% OFF",
      image: electronic1,
      desc: "Intel i5 Processor, 16GB RAM, 512GB SSD",
    },
    {
      id: 2,
      name: "Samsung Smart TV",
      price: "₹42,999",
      offer: "10% Instant Discount",
      image: electronic2,
      desc: "43 Inch 4K Ultra HD Smart TV",
    },
    {
      id: 3,
      name: "Boat Headphones",
      price: "₹2,499",
      offer: "50% OFF",
      image: electronic3,
      desc: "Wireless Bluetooth Headphones",
    },
    {
      id: 4,
      name: "Canon Camera",
      price: "₹64,999",
      offer: "No Cost EMI",
      image: electronic4,
      desc: "24MP DSLR Camera with Lens Kit",
    },
  ];

  return (
    <div className="mobile-page">
      <h1>Electronics Store</h1>

      <div className="mobile-container">
        {electronics.map((item) => (
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

export default Electronics;