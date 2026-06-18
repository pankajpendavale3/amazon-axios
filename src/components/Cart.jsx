function Cart({ cartItems }) {
  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart Is Empty</h2>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            
            <img src={item.image} alt={item.title} />

            <div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default Cart;