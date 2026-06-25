const express = require("express");
const router = express.Router();
const db = require("../config/db");


// =====================
// ADD TO CART
// =====================
router.post("/add", async (req, res) => {
  try {
    let { user_email, product_name, price } = req.body;

    if (!user_email || !product_name || !price) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // convert ₹55,000 → 55000
    price = Number(String(price).replace(/[^0-9]/g, ""));

    // CHECK DUPLICATE
    const [existing] = await db.query(
      "SELECT * FROM cart WHERE user_email = ? AND product_name = ?",
      [user_email, product_name]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: "Already in cart" });
    }

    await db.query(
      "INSERT INTO cart (user_email, product_name, price) VALUES (?, ?, ?)",
      [user_email, product_name, price]
    );

    res.json({ message: "Added successfully" });

  } catch (err) {
    console.log("CART ERROR:", err);
    res.status(500).json({ message: "Error adding to cart" });
  }
});


// =====================
// GET CART
// =====================
router.get("/:email", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM cart WHERE user_email = ?",
      [req.params.email]
    );

    res.json(rows);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching cart" });
  }
});


// =====================
// CLEAR CART
// =====================
router.delete("/clear/:email", async (req, res) => {
  try {
    const email = req.params.email;

    await db.query(
      "DELETE FROM cart WHERE user_email = ?",
      [email]
    );

    res.json({ message: "Cart cleared successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error clearing cart" });
  }
});


// =====================
// CHECKOUT (MOVE CART → ORDERS)
// =====================
router.post("/checkout", async (req, res) => {
  try {
    const { email, paymentMethod } = req.body;

    // 1. Get cart items
    const [cartItems] = await db.query(
      "SELECT * FROM cart WHERE user_email = ?",
      [email]
    );

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 2. Insert into orders table
    for (let item of cartItems) {
      await db.query(
        `INSERT INTO orders 
        (user_email, product_name, price, quantity, payment_method) 
        VALUES (?, ?, ?, ?, ?)`,
        [
          item.user_email,
          item.product_name,
          item.price,
          item.quantity || 1,
          paymentMethod
        ]
      );
    }

    // 3. Clear cart after order
    await db.query(
      "DELETE FROM cart WHERE user_email = ?",
      [email]
    );

    res.json({
      success: true,
      message: "Order placed successfully"
    });

  } catch (err) {
    console.log("CHECKOUT ERROR:", err);
    res.status(500).json({ message: "Checkout failed" });
  }
});

module.exports = router;