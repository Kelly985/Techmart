import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ amount, onSuccess, onCancel }) => {
  const publishableKey = 'pk_test_51N4IzqDonfNsgTfm1qvsZOReMqBs05mPlwJkXEf62j774Cn1c7sVP25fcEHbNUPlkmnk3naQI59HkXCz447bsWXv002CgoAA1C';
  const handleToken = (token) => {
    fetch('https://t-mart-data.onrender.com/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        amount,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          onSuccess(data.paymentMethod);
        } else {
          alert('Payment failed. Please try again.');
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <StripeCheckout
      stripeKey={publishableKey}
      token={handleToken}
      amount={amount}
      currency="KES"
      name="TechMart"
      description="Electronics"
      billingAddress
      shippingAddress
      zipCode
      closed={onCancel}
    />
  );
};
export default StripeCheckoutButton;