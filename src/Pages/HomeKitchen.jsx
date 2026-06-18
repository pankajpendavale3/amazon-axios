import kitchen1 from "../assets/images/kitchen1.jpg";
import kitchen2 from "../assets/images/kitchen2.jpg";
import kitchen3 from "../assets/images/kitchen3.jpg";
import kitchen4 from "../assets/images/kitchen4.jpg";

function HomeKitchen() {
  const products = [
    {
      id: 1,
      name: "Non-Stick Cookware Set",
      price: "₹2,999",
      offer: "40% OFF",
      image: kitchen1,
      desc: "Premium non-stick cookware set for everyday cooking.",
    },
    {
      id: 2,
      name: "Mixer Grinder",
      price: "₹3,499",
      offer: "30% OFF",
      image: kitchen2,
      desc: "750W powerful mixer grinder with 3 jars.",
    },
    {
      id: 3,
      name: "Dining Table Set",
      price: "₹12,999",
      offer: "25% OFF",
      image: kitchen3,
      desc: "Modern wooden dining table with 4 chairs.",
    },
    {
      id: 4,
      name: "Microwave Oven",
      price: "₹8,999",
      offer: "15% OFF",
      image: kitchen4,
      desc: "Convection microwave oven with auto cook menu.",
    },
  ];

  return (
    <div className="mobile-page">
      <h1>Home & Kitchen Store</h1>

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

export default HomeKitchen;