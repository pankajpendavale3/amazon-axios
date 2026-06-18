import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import images1 from "../assets/images/images1.jpg";
import images2 from "../assets/images/images2.jpg";

function Products() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 55000,
      image: images1,
      description: "HP Laptop 16GB RAM 512GB SSD",
    },
    {
      id: 2,
      title: "Mobile",
      price: 20000,
      image: images2,
      description: "Samsung 5G Mobile",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="products">
        {products.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt=""
                width="200"
              />
            </Link>

            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;