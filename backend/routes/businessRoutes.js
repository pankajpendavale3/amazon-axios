const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ==========================
// TEST ROUTE
// ==========================
router.get("/", (req, res) => {
  res.send("Business API Working");
});

// ==========================
// CREATE BUSINESS ACCOUNT
// ==========================
router.post("/create", async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body);

    const { name, email, phone, password } = req.body;

    // Validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check existing email
    const [existingUser] = await db.query(
      "SELECT * FROM business_users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    // Insert new user
    await db.query(
      `INSERT INTO business_users
      (name, email, phone, password)
      VALUES (?, ?, ?, ?)`,
      [name, email, phone, password]
    );

    // Success Response
    return res.status(200).json({
      message: "Business Account Created Successfully",
      user: {
        name,
        email,
        phone
      }
    });

  } catch (error) {
    console.log("FULL ERROR:", error);

    return res.status(500).json({
      message: error.message || "Database Error"
    });
  }
});

module.exports = router;