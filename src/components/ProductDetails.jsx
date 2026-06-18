import { useParams, useNavigate } from "react-router-dom";

import images1 from "../assets/images/images1.jpg";
import images2 from "../assets/images/images2.jpg";

function ProductDetails({
  cartItems,
  setCartItems,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 55000,
      image: images1,
      description:
        "HP Laptop 16GB RAM 512GB SSD",
    },
    {
      id: 2,
      title: "Mobile",
      price: 20000,
      image: images2,
      description:
        "Samsung 5G Mobile",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const addToCart = () => {
    setCartItems([...cartItems, product]);

    alert("Product Added To Cart");

    navigate("/cart");
  };

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image}
        alt=""
        width="300"
      />

      <h1>{product.title}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <button onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;