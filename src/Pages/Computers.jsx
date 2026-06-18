import computer1 from "../assets/images/computer1.jpg";
import computer2 from "../assets/images/computer2.jpg";
import computer3 from "../assets/images/computer3.jpg";
import computer4 from "../assets/images/computer4.jpg";

function Computers() {
  const computers = [
    {
      id: 1,
      name: "HP Laptop",
      price: "₹54,999",
      offer: "20% OFF",
      image: computer1,
      desc: "Intel Core i5, 16GB RAM, 512GB SSD.",
    },
    {
      id: 2,
      name: "Dell Desktop",
      price: "₹42,999",
      offer: "15% OFF",
      image: computer2,
      desc: "Intel Core i7, 1TB HDD, Windows 11.",
    },
    {
      id: 3,
      name: "Gaming Monitor",
      price: "₹14,999",
      offer: "30% OFF",
      image: computer3,
      desc: "27-inch Full HD Gaming Monitor.",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: "₹2,999",
      offer: "40% OFF",
      image: computer4,
      desc: "RGB Backlit Mechanical Keyboard.",
    },
  ];

  return (
    <div className="mobile-page">
      <h1>Computer Store</h1>

      <div className="mobile-container">
        {computers.map((item) => (
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

export default Computers;