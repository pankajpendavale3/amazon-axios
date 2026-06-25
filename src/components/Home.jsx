import { useState } from "react";
import axios from "axios";

import hero from "../assets/images/amazonpage.png";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

import laptop from "../assets/images/images5.jpg";
import mobile from "../assets/images/Mobile.jpg";
import watch from "../assets/images/images3.jpg";
import tv from "../assets/images/SmartTV.webp";

import AquaminderSmartWaterBottle from "../assets/images/bottel.jpg";
import EyebrowTrimmerForWomen from "../assets/images/Eyebrow.jpg";
import ElectricScooter from "../assets/images/Scooter.jpg";
import BoatRockerz from "../assets/images/Bluetooth.jpg";

import cleaning from "../assets/images/cleaning.jpg";
import bathroom from "../assets/images/bathroom.jpg";
import tools from "../assets/images/tools.jpg";
import wallpaper from "../assets/images/wallpaper.jpg";

import bedsheet from "../assets/images/bedsheet.jpg";
import curtains from "../assets/images/curtains.jpg";
import ironing from "../assets/images/ironing.jpg";
import decor from "../assets/images/decor.jpg";

import cleaningCar from "../assets/images/cleaning-car.jpg";
import tyre from "../assets/images/tyre.jpg";
import helmet from "../assets/images/helmet.avif";
import vacuum from "../assets/images/vacuum.avif";

import diaper from "../assets/images/diaper.jpg";
import rideon from "../assets/images/rideon.jpg";
import rcCar from "../assets/images/rc-car.jpg";
import safety from "../assets/images/safety.jpg";

import phone1 from "../assets/images/phone1.jpg";
import phone2 from "../assets/images/phone2.jpg";
import phone3 from "../assets/images/phone3.jpg";
import phone4 from "../assets/images/phone4.jpg";

import fashion1 from "../assets/images/fashion1.jpg";
import fashion2 from "../assets/images/fashion2.jpg";
import shoe1 from "../assets/images/shoe1.jpg";
import shoe2 from "../assets/images/shoe2.jpg";

import furniture1 from "../assets/images/furniture1.jpg";
import furniture2 from "../assets/images/furniture2.jpg";
import furniture3 from "../assets/images/furniture3.jpg";
import furniture4 from "../assets/images/furniture4.jpg";

import beauty1 from "../assets/images/beauty1.jpg";
import beauty2 from "../assets/images/beauty2.jpg";
import beauty3 from "../assets/images/beauty3.jpg";
import beauty4 from "../assets/images/beauty4.jpg";

function Home({ cartItems, setCartItems }) {
  const banners = [
  banner1,
  banner2,
  banner3
];

const [currentBanner, setCurrentBanner] = useState(0);

const nextBanner = () => {
  setCurrentBanner((prev) =>
    prev === banners.length - 1 ? 0 : prev + 1
  );
};

const prevBanner = () => {
  setCurrentBanner((prev) =>
    prev === 0 ? banners.length - 1 : prev - 1
  );
};
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: "₹55,000",
      image: laptop,
    },
    {
      id: 2,
      title: "Mobile",
      price: "₹25,000",
      image: mobile,
    },
    {
      id: 3,
      title: "Watch",
      price: "₹3,000",
      image: watch,
    },
    {
      id: 4,
      title: "Smart TV",
      price: "₹70,000",
      image: tv,
    },
    {
      id: 5,
      title: "Aquaminder Smart Water Bottle",
      price: "₹700",
      image: AquaminderSmartWaterBottle,
    },
    {
      id: 6,
      title: "Eyebrow Trimmer for Women",
      price: "₹500",
      image: EyebrowTrimmerForWomen,
    },
    {
      id: 7,
      title: "Electric Scooter",
      price: "₹85,000",
      image: ElectricScooter,
    },
    {
      id: 8,
      title: "Boat Rockerz",
      price: "₹2000",
      image: BoatRockerz,
    },
  ];

  const addToCart = async (item) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first");
        return;
      }

      const cleanPrice = Number(
        String(item.price).replace(/[^0-9]/g, "")
      );

      const resCheck = await axios.get(
        `http://localhost:5000/api/cart/${user.email}`
      );

      const alreadyExists = resCheck.data.some(
        (p) => p.product_name === item.title
      );

      if (alreadyExists) {
        alert("Item already in cart");
        return;
      }

      await axios.post("http://localhost:5000/api/cart/add", {
        user_email: user.email,
        product_name: item.title,
        price: cleanPrice,
      });

      setCartItems([...cartItems, item]);

      alert("Added to cart");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to add to cart");
    }
  };

  return (
    <>
      <div className="hero-slider">

  <button
    className="slider-btn left-btn"
    onClick={prevBanner}
  >
    ❮
  </button>

  <img
    src={banners[currentBanner]}
    alt="Banner"
    className="slider-image"
  />

  <button
    className="slider-btn right-btn"
    onClick={nextBanner}
  >
    ❯
  </button>

</div>

      <div className="amazon-categories">
        <div className="amazon-card">
          <h2>Starting ₹49 | Deals on home essentials</h2>
          <div className="card-grid">
            <div><img src={cleaning} /><p>Cleaning supplies</p></div>
            <div><img src={bathroom} /><p>Bathroom accessories</p></div>
            <div><img src={tools} /><p>Home tools</p></div>
            <div><img src={wallpaper} /><p>Wallpapers</p></div>
          </div>
        </div>

        <div className="amazon-card">
          <h2>Starting ₹199 | Amazon Brands & more</h2>
          <div className="card-grid">
            <div><img src={bedsheet} /><p>Bedsheets</p></div>
            <div><img src={curtains} /><p>Curtains</p></div>
            <div><img src={ironing} /><p>Ironing Board</p></div>
            <div><img src={decor} /><p>Home Decor</p></div>
          </div>
        </div>

        <div className="amazon-card">
          <h2>Automotive essentials | Up to 60% off</h2>
          <div className="card-grid">
            <div><img src={cleaningCar} /><p>Cleaning accessories</p></div>
            <div><img src={tyre} /><p>Tyre care</p></div>
            <div><img src={helmet} /><p>Helmets</p></div>
            <div><img src={vacuum} /><p>Vacuum Cleaner</p></div>
          </div>
        </div>

        <div className="amazon-card">
          <h2>Baby care & toys | Up to 50% off</h2>
          <div className="card-grid">
            <div><img src={diaper} /><p>Baby Diapers</p></div>
            <div><img src={rideon} /><p>Ride Ons</p></div>
            <div><img src={rcCar} /><p>RC Cars</p></div>
            <div><img src={safety} /><p>Baby Safety</p></div>
          </div>
        </div>
      </div>

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="shopping-section">

  {/* CARD 1 */}
  <div className="shopping-card">
    <div className="card-header">
      <h2>Recently Viewed Products</h2>
      <span>View All</span>
    </div>

    <div className="shopping-grid">
      <div className="grid-item">
        <img src={phone1} alt="" />
        <p>Premium Smartphone</p>
      </div>

      <div className="grid-item">
        <img src={phone2} alt="" />
        <p>Latest Android</p>
      </div>

      <div className="grid-item">
        <img src={phone3} alt="" />
        <p>Flagship Mobile</p>
      </div>

      <div className="grid-item">
        <img src={phone4} alt="" />
        <p>Smart Device</p>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="shopping-card">
    <div className="card-header">
      <h2>Trending Fashion Collection</h2>
      <span>Explore</span>
    </div>

    <div className="shopping-grid">
      <div className="grid-item">
        <img src={fashion1} alt="" />
        <p>Winter Collection</p>
      </div>

      <div className="grid-item">
        <img src={fashion2} alt="" />
        <p>Women's Fashion</p>
      </div>

      <div className="grid-item">
        <img src={shoe1} alt="" />
        <p>Sports Shoes</p>
      </div>

      <div className="grid-item">
        <img src={shoe2} alt="" />
        <p>Running Shoes</p>
      </div>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="shopping-card">
    <div className="card-header">
      <h2>Premium Home & Living</h2>
      <span>Shop Now</span>
    </div>

    <img
      src={furniture1}
      alt=""
      className="main-product"
    />

    <div className="thumbs">
      <img src={furniture1} alt="" />
      <img src={furniture2} alt="" />
      <img src={furniture3} alt="" />
      <img src={furniture4} alt="" />
    </div>
  </div>

  {/* CARD 4 */}
  <div className="shopping-card">
    <div className="card-header">
      <h2>Beauty Essentials</h2>
      <span>Best Sellers</span>
    </div>

    <div className="shopping-grid">
      <div className="grid-item">
        <img src={beauty1} alt="" />
        <p>Skin Care</p>
      </div>

      <div className="grid-item">
        <img src={beauty2} alt="" />
        <p>Beauty Products</p>
      </div>

      <div className="grid-item">
        <img src={beauty3} alt="" />
        <p>Makeup Kit</p>
      </div>

      <div className="grid-item">
        <img src={beauty4} alt="" />
        <p>Face Care</p>
      </div>
    </div>
  </div>

</div>
    </>
  );
}

export default Home;