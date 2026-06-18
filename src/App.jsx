import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

import OrdersPage from "./pages/OrdersPage";
import Mobiles from "./pages/Mobiles";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import HomeKitchen from "./pages/HomeKitchen";
import Computers from "./pages/Computers";
import ToysGames from "./pages/ToysGames";
import Bestsellers from "./pages/Bestsellers";
import CustomerService from "./pages/CustomerService";
import Sell from "./pages/Sell";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />

      <Routes>

  <Route
    path="/"
    element={
      <Home
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    }
  />

  <Route
    path="/cart"
    element={<Cart cartItems={cartItems} />}
  />

  <Route
    path="/orders"
    element={<OrdersPage />}
  />

  <Route
    path="/mobiles"
    element={<Mobiles />}
  />

  <Route
    path="/electronics"
    element={<Electronics />}
  />

  <Route
    path="/fashion"
    element={<Fashion />}
  />

  <Route
    path="/home-kitchen"
    element={<HomeKitchen />}
  />

  <Route
    path="/computers"
    element={<Computers />}
  />

  <Route
  path="/toys-games"
  element={<ToysGames />}
/>

<Route
  path="/bestsellers"
  element={<Bestsellers />}
/>

<Route
  path="/customer-service"
  element={<CustomerService />}
/>

<Route
  path="/sell"
  element={<Sell />}
/>

</Routes>

    </BrowserRouter>
  );
}

export default App;