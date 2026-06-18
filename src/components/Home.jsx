import hero from "../assets/images/amazonpage.png";

import laptop from "../assets/images/images5.jpg";
import mobile from "../assets/images/Mobile.jpg";
import watch from "../assets/images/images3.jpg";
import tv from "../assets/images/SmartTV.webp";

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
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <div className="hero">
        <img src={hero} alt="banner" />
      </div>

      <div className="amazon-categories">
        <div className="amazon-card">
          <h2>Starting ₹49 | Deals on home essentials</h2>

          <div className="card-grid">
            <div>
              <img src={cleaning} alt="" />
              <p>Cleaning supplies</p>
            </div>

            <div>
              <img src={bathroom} alt="" />
              <p>Bathroom accessories</p>
            </div>

            <div>
              <img src={tools} alt="" />
              <p>Home tools</p>
            </div>

            <div>
              <img src={wallpaper} alt="" />
              <p>Wallpapers</p>
            </div>
          </div>
        </div>

        <div className="amazon-card">
          <h2>Starting ₹199 | Amazon Brands & more</h2>

          <div className="card-grid">
            <div>
              <img src={bedsheet} alt="" />
              <p>Bedsheets</p>
            </div>

            <div>
              <img src={curtains} alt="" />
              <p>Curtains</p>
            </div>

            <div>
              <img src={ironing} alt="" />
              <p>Ironing Board</p>
            </div>

            <div>
              <img src={decor} alt="" />
              <p>Home Decor</p>
            </div>
          </div>
        </div>

        <div className="amazon-card">
          <h2>Automotive essentials | Up to 60% off</h2>

          <div className="card-grid">
            <div>
              <img src={cleaningCar} alt="" />
              <p>Cleaning accessories</p>
            </div>

            <div>
              <img src={tyre} alt="" />
              <p>Tyre care</p>
            </div>

            <div>
              <img src={helmet} alt="" />
              <p>Helmets</p>
            </div>

            <div>
              <img src={vacuum} alt="" />
              <p>Vacuum Cleaner</p>
            </div>
          </div>
        </div>

        <div className="amazon-card">
          <h2>Baby care & toys | Up to 50% off</h2>

          <div className="card-grid">
            <div>
              <img src={diaper} alt="" />
              <p>Baby Diapers</p>
            </div>

            <div>
              <img src={rideon} alt="" />
              <p>Ride Ons</p>
            </div>

            <div>
              <img src={rcCar} alt="" />
              <p>RC Cars</p>
            </div>

            <div>
              <img src={safety} alt="" />
              <p>Baby Safety</p>
            </div>
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
      {/* SHOPPING SECTION */}

<div className="shopping-section">

  <div className="shopping-card">
    <h2>Keep shopping for</h2>

    <div className="shopping-grid">
      <div>
        <img src={phone1} alt="" />
        <p>Mobile 1</p>
      </div>

      <div>
        <img src={phone2} alt="" />
        <p>Mobile 2</p>
      </div>

      <div>
        <img src={phone3} alt="" />
        <p>Mobile 3</p>
      </div>

      <div>
        <img src={phone4} alt="" />
        <p>Mobile 4</p>
      </div>
    </div>

    <a href="/">See more</a>
  </div>

  <div className="shopping-card">
    <h2>Customers' Most-Loved Fashion for you</h2>

    <div className="shopping-grid">
      <img src={fashion1} alt="" />
      <img src={fashion2} alt="" />
      <img src={shoe1} alt="" />
      <img src={shoe2} alt="" />
    </div>

    <a href="/">Explore more</a>
  </div>

  <div className="shopping-card">
    <h2>Min.30% off | Top selections from Small Businesses</h2>

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

  <div className="shopping-card">
    <h2>Best Sellers in Beauty</h2>

    <div className="shopping-grid">
      <img src={beauty1} alt="" />
      <img src={beauty2} alt="" />
      <img src={beauty3} alt="" />
      <img src={beauty4} alt="" />
    </div>
  </div>

</div>
    </>
  );
}

export default Home;