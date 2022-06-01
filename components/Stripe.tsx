import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

const Stripe = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { clientSecret } = await fetch('api/payment').then(res => res.json())

    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, { payment_method: { card: elements.getElement(CardNumberElement)! } })

    console.log(`PaymentIntent (${paymentIntent?.id}): ${paymentIntent?.status}`)
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
  );
};

export default Stripe;
