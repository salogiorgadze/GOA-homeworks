function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <h3>Cart is empty</h3>}
      {cart.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - {item.price}₾
          </p>
        </div>
      ))}
    </div>
  );
}
export default Cart;
