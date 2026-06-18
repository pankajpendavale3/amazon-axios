import fashion1 from "../assets/images/fashion5.jpg";
import fashion2 from "../assets/images/fashion6.jpg";
import fashion3 from "../assets/images/fashion7.jpg";
import fashion4 from "../assets/images/fashion8.jpg";

function Fashion() {
  const fashions = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      price: "₹799",
      offer: "40% OFF",
      image: fashion1,
      desc: "Premium cotton casual shirt."
    },
    {
      id: 2,
      name: "Women's Kurti",
      price: "₹999",
      offer: "50% OFF",
      image: fashion2,
      desc: "Stylish and comfortable daily wear."
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: "₹1,499",
      offer: "35% OFF",
      image: fashion3,
      desc: "Lightweight running shoes."
    },
    {
      id: 4,
      name: "Men's Watch",
      price: "₹2,499",
      offer: "25% OFF",
      image: fashion4,
      desc: "Luxury analog wrist watch."
    }
  ];

  return (
    <div className="mobile-page">
      <h1>Fashion Store</h1>

      <div className="mobile-container">
        {fashions.map((item) => (
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

export default Fashion;