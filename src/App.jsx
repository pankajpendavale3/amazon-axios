import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";

import OrdersPage from "./Pages/OrdersPage";
import Mobiles from "./Pages/Mobiles";
import Electronics from "./Pages/Electronics";
import Fashion from "./Pages/Fashion";
import HomeKitchen from "./Pages/HomeKitchen";
import Computers from "./Pages/Computers";
import ToysGames from "./Pages/ToysGames";
import Bestsellers from "./Pages/Bestsellers";
import CustomerService from "./Pages/CustomerService";
import Sell from "./Pages/Sell";
import BusinessAccount from "./Pages/BusinessAccount";
import Payment from "./Pages/Payment";


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar cartItems={cartItems} />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        {/* LOGIN (✔ FIXED HERE) */}
        <Route path="/login" element={<Login />} />

        <Route path="/business" element={<BusinessAccount />} />

        <Route path="/payment" element={<Payment />} />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} />}
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={<OrdersPage />}
        />

        {/* PAGES */}
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/home-kitchen" element={<HomeKitchen />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/toys-games" element={<ToysGames />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/sell" element={<Sell />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;