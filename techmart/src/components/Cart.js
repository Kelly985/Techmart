import React, { useState } from 'react';
import StripeCheckoutButton from './StripeCheckoutButton';

function Cart({ cartItems, onClick, onRemove }) {
  const [total, setTotal] = useState(0);
  const handleRemoveClick = (item) => {
    onRemove(item);
  };
  const handleCheckoutClick = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price_ksh, 0);
    setTotal(totalPrice);
    alert(`Total amount: KSH ${totalPrice}`);
  };
  const handlePaymentSuccess = (paymentMethod) => {
    console.log(paymentMethod);
    alert('Payment successful!');
  };
  const handlePaymentCancel = () => {
    alert('Payment canceled!');
  };
  return (
    <div>
      <button id="out"onClick={onClick}>Cart ({cartItems.length})</button>
      {cartItems.length > 0 && (
        <div>
          <h2>Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <div key={item.id} className="electrons">
                <h3>{item.name}</h3>
                <img src={item.image_url} alt={`${item.name}'s avatar`} />
                <p>Description: {item.description}</p><br></br>
                <p><b>Price</b>: {item.price_ksh}</p><br></br>
                <p><b>Category</b>: {item.category}</p><br></br>
                <p><b>Condition</b>: {item.condition}</p><br></br>
                <button onClick={() => handleRemoveClick(item)}>Remove</button>
              </div>
            ))}
          </ul>
          <button id="out" onClick={handleCheckoutClick}>Checkout</button>
          {total > 0 && (
            <StripeCheckoutButton
              amount={total * 100} // Amount should be in cents
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel} />
)}
</div>
)}
</div>
);
}
export default Cart;