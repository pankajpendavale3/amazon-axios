const db = require("../config/db");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check USERS table
    let [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    let user = rows[0];

    // 2. If not found → check BUSINESS table
    if (!user) {
      let [businessRows] = await db.query(
        "SELECT * FROM business_users WHERE email = ?",
        [email]
      );

      user = businessRows[0];
    }

    // 3. If still not found
    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // 4. Password check
    if (user.password !== password) {
      return res.status(400).json({
        message: "Wrong Password"
      });
    }

    // 5. Success
    res.json({
      message: "Login Success",
      user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = { login };