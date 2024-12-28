import "./cart.css";
const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Cart items: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <img src={bottle.img} alt={bottle.name} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
