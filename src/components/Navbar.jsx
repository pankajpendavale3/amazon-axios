import { useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/images/indiaflag.jpg";
import "./Navbar.css";

function Navbar({ cartItems = [] }) {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* TOP HEADER */}
      <div className="navbar">

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">
              रॉयल किंग<span>.in</span>
            </h1>
          </Link>
        </div>

        {/* LOCATION */}
        <div className="location-box">
          <FaMapMarkerAlt className="location-icon" />
          <div className="location-text">
            <small>Delivering to Pune 411007</small>
            <span>Update location</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search-container">

          <select className="search-select">
            <option>All</option>
            <option>Mobiles</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
          </select>

          <input
            type="text"
            placeholder="Search RoyalKing.in"
            className="search-input"
          />

          <button className="search-btn">
            <FaSearch />
          </button>

        </div>

        {/* LANGUAGE */}
        <div
          className="language-box"
          onClick={() => setShowLanguage(!showLanguage)}
        >
          <img
            src={indiaFlag}
            alt="India"
            className="flag-icon"
          />
          <span>EN ▼</span>
        </div>

        {/* ACCOUNT */}
        <div
          className="account-box"
          onClick={() => setShowAccount(!showAccount)}
        >
          <small>
            Hello, {user ? user.email : "Sign In"}
          </small>

          <h4>
            Account & Lists ▼
          </h4>
        </div>

        {/* ORDERS */}
        <Link to="/orders" className="orders-box">
          <small>Returns</small>
          <h4>& Orders</h4>
        </Link>

        {/* CART */}
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          <span>Cart ({cartItems.length})</span>
        </Link>

      </div>

      {/* ACCOUNT POPUP */}
      {showAccount && (
        <div className="account-popup">

          {!user ? (
            <Link to="/login">
              <button className="signin-btn">
                Sign In
              </button>
            </Link>
          ) : (
            <button
              className="signin-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}

          <p className="new-customer">
            New customer? Start here.
          </p>

          <hr />

          <div className="account-content">

            <div className="account-column">
              <h4>Your Lists</h4>

              <p>Create a Wish List</p>
              <p>Wish from Any Website</p>
              <p>Baby Wishlist</p>
              <p>Discover Your Style</p>
            </div>

            <div className="account-column">

              <h4>Your Account</h4>

              <p>Your Orders</p>
              <p>Your Wishlist</p>
              <p>Your Prime Membership</p>
              <p>Your Recommendations</p>
              <p>Your Seller Account</p>

            </div>

          </div>

        </div>
      )}

      {/* LANGUAGE POPUP */}
      {showLanguage && (
        <div className="language-popup">

          <h4>Change Language</h4>

          <p><input type="radio" name="lang" /> English</p>
          <p><input type="radio" name="lang" /> हिन्दी</p>
          <p><input type="radio" name="lang" /> मराठी</p>
          <p><input type="radio" name="lang" /> தமிழ்</p>

        </div>
      )}

      {/* MENU BAR */}
      <div className="menu-bar">

        <Link to="/">
          <FaBars /> All
        </Link>

        <a href="#">Fresh</a>

        <a href="#">MX Player</a>

        <Link to="/sell">Sell</Link>

        <Link to="/bestsellers">
          Bestsellers
        </Link>

        <a href="#">Today's Deals</a>

        <Link to="/mobiles">
          Mobiles
        </Link>

        <a href="#">Prime</a>

        <Link to="/customer-service">
          Customer Service
        </Link>

        <Link to="/electronics">
          Electronics
        </Link>

        <Link to="/fashion">
          Fashion
        </Link>

        <Link to="/home-kitchen">
          Home & Kitchen
        </Link>

        <Link to="/computers">
          Computers
        </Link>

        <Link to="/toys-games">
          Toys & Games
        </Link>

      </div>
    </>
  );
}

export default Navbar;