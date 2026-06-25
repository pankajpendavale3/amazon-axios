require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ==========================
// AUTH ROUTES
// ==========================
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

// ==========================
// BUSINESS ROUTES
// ==========================
app.use(
  "/api/business",
  require("./routes/businessRoutes")
);

// ==========================
// 🛒 CART ROUTES (ADDED HERE)
// ==========================
const cartRoutes = require("./routes/cartRoutes");

app.use(
  "/api/cart",
  cartRoutes
);

// ==========================
// TEST ROUTE
// ==========================
app.get("/", async (req, res) => {
  try {
    await db.query("SELECT 1");
    res.send("Database Connected");
  } catch (error) {
    console.log(error);
    res.send("Database Failed");
  }
});

// ==========================
// START SERVER
// ==========================
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});