import toy1 from "../assets/images/toy1.jpg";
import toy2 from "../assets/images/toy2.jpg";
import toy3 from "../assets/images/toy3.jpg";
import toy4 from "../assets/images/toy4.jpg";

function ToysGames() {
  const toys = [
    {
      id: 1,
      name: "Remote Control Car",
      price: "₹1,499",
      offer: "30% OFF",
      image: toy1,
      desc: "High-speed rechargeable RC car.",
    },
    {
      id: 2,
      name: "Building Blocks Set",
      price: "₹999",
      offer: "40% OFF",
      image: toy2,
      desc: "Creative learning building blocks.",
    },
    {
      id: 3,
      name: "Teddy Bear",
      price: "₹799",
      offer: "25% OFF",
      image: toy3,
      desc: "Soft and cuddly teddy bear.",
    },
    {
      id: 4,
      name: "Board Game",
      price: "₹1,299",
      offer: "35% OFF",
      image: toy4,
      desc: "Fun family board game.",
    },
  ];

  return (
    <div className="mobile-page">
      <h1>Toys & Games Store</h1>

      <div className="mobile-container">
        {toys.map((item) => (
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

export default ToysGames;