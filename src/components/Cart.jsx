import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/cart/${user.email}`
      );
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const parsePrice = (price) => {
    return Number(String(price).replace(/[^0-9]/g, "")) || 0;
  };

  const total = items.reduce(
    (sum, item) => sum + parsePrice(item.price),
    0
  );

  return (
    <div style={styles.page}>
      
      {/* LEFT - CART ITEMS */}
      <div style={styles.leftBox}>
        <h2 style={styles.title}>Shopping Cart</h2>

        {items.length === 0 ? (
          <div style={styles.empty}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              style={{ width: 120 }}
            />
            <h3>Your Amazon Cart is empty</h3>
            <p>Add items to proceed</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} style={styles.item}>
              <div>
                <h3 style={{ margin: 0 }}>{item.product_name}</h3>
                <p style={{ color: "green", fontWeight: "bold" }}>
                  ₹{parsePrice(item.price).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT - SUMMARY BOX */}
      <div style={styles.rightBox}>
        <h3 style={{ marginBottom: 10 }}>Order Summary</h3>

        <p style={styles.line}>
          Items: <b>{items.length}</b>
        </p>

        <p style={styles.line}>
          Total:{" "}
          <b style={{ color: "#B12704" }}>
            ₹{total.toLocaleString("en-IN")}
          </b>
        </p>

        <button
          onClick={() =>
            navigate("/payment", {
              state: { total, items },
            })
          }
          style={styles.button}
        >
          Proceed to Buy
        </button>

        <p style={styles.smallText}>
          🔒 Safe and secure payments
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "30px",
    background: "#eaeded",
    minHeight: "100vh",
  },

  leftBox: {
    width: "65%",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },

  rightBox: {
    width: "25%",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    height: "fit-content",
    position: "sticky",
    top: "20px",
  },

  title: {
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #f0f0f0",
  },

  line: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#FFD814",
    border: "1px solid #FCD200",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },

  smallText: {
    fontSize: "12px",
    color: "gray",
    marginTop: "10px",
    textAlign: "center",
  },

  empty: {
    textAlign: "center",
    padding: "50px",
  },
};

export default Cart;