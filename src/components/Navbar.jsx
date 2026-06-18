import { useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaMapMarkerAlt
} from "react-icons/fa";
import indiaFlag from "../assets/images/indiaflag.jpg";
import { Link } from "react-router-dom";

function Navbar({ cartItems = [] }) {
  const [showLanguage, setShowLanguage] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="navbar">

        {/* LEFT SECTION */}
        <div className="nav-left">

          <div className="logo">
            Pankaj<span>.in</span>
          </div>

          {/* LOCATION */}
          <div className="location-box">
            <FaMapMarkerAlt style={{ fontSize: "14px" }} />
            <div className="location-text">
              <small>Delivering to Pune 411007</small>
              <span>Update location</span>
            </div>
          </div>

        </div>

        {/* SEARCH BAR */}
        <div className="search-container small-search">

          <select>
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
            className="search"
          />

          <button className="search-btn">
            <FaSearch />
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="nav-links">

          {/* Language */}
          <div
            className="language-box"
            onClick={() => setShowLanguage(!showLanguage)}
          >
            <img src={indiaFlag} alt="India" className="flag-icon" />
            <span>EN ▼</span>
          </div>

          {/* Account */}
          <div
            className="account-box"
            onClick={() => setShowAccount(!showAccount)}
          >
            <small>Hello, Sign In</small>
            <h4>Account & Lists ▼</h4>
          </div>

          {/* Orders */}
          <Link to="/orders" className="orders-box">
            <small>Returns</small>
            <h4>& Orders</h4>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="cart-link">
            <FaShoppingCart />
            Cart ({cartItems.length})
          </Link>

        </div>
      </div>

      {/* Language Popup */}
      {showLanguage && (
  <div className="language-popup">

    <h4>Change Language</h4>

    <p><input type="radio" name="lang" /> English - EN</p>

    <hr />

    <p><input type="radio" name="lang" /> हिन्दी - HI</p>
    <p><input type="radio" name="lang" /> தமிழ் - TA</p>
    <p><input type="radio" name="lang" /> తెలుగు - TE</p>
    <p><input type="radio" name="lang" /> ಕನ್ನಡ - KN</p>
    <p><input type="radio" name="lang" /> മലയാളം - ML</p>
    <p><input type="radio" name="lang" /> বাংলা - BN</p>
    <p><input type="radio" name="lang" /> मराठी - MR</p>

    <hr />

    <p style={{ fontSize: "12px", color: "#555" }}>
      You are shopping on Amazon.in
    </p>

    <a href="/">Change country/region</a>

  </div>
)}

      {/* Account Popup */}
      {showAccount && (
  <div className="account-popup">

    {/* TOP SIGN IN BUTTON */}
    <button className="signin-btn">
      Sign in
    </button>

    <p className="new-customer">
      New customer? <a href="/">Start here.</a>
    </p>

    <hr />

    <div className="account-content">

      {/* LEFT COLUMN */}
      <div className="account-column">
        <h4>Your Lists</h4>
        <p>Create a Wish List</p>
        <p>Wish from Any Website</p>
        <p>Baby Wishlist</p>
        <p>Discover Your Style</p>
        <p>Explore Showroom</p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="account-column">
        <h4>Your Account</h4>

        <p>Your Account</p>
        <p>Your Orders</p>
        <p>Your Wish List</p>
        <p>Your Recommendations</p>
        <p>Your Prime Membership</p>
        <p>Your Prime Video</p>
        <p>Your Subscribe & Save Items</p>
        <p>Memberships & Subscriptions</p>
        <p>Your Seller Account</p>
        <p>Manage Your Content and Devices</p>
        <p>Your Music Library</p>
        <p>Register for a free Business Account</p>
      </div>

    </div>
  </div>
)}
    

      {/* MENU BAR */}
      <div className="menu-bar">
        <a href="#"><FaBars /> All</a>
        <a href="#">Fresh</a>
        <a href="#">MX Player</a>
        <Link to="/sell" className="nav-link">
              Sell
        </Link>
        <Link to="/bestsellers" className="nav-link">
          Bestsellers
        </Link>
        <a href="#">Today's Deals</a>
        <Link to="/mobiles" className="nav-link">
              Mobiles
        </Link>
        <a href="#">Prime</a>
        <Link to="/customer-service" className="nav-link">
            Customer Service
        </Link>
        <Link to="/electronics" className="nav-link">
             Electronics
        </Link>
        <Link to="/fashion" className="nav-link">
              Fashion
        </Link>
        <Link to="/home-kitchen" className="nav-link">
            Home & Kitchen
        </Link>
        <Link to="/computers" className="nav-link">
              Computers
        </Link>
        <Link to="/toys-games" className="nav-link">
              Toys & Games
        </Link>
      </div>
    </>
  );
}

export default Navbar;