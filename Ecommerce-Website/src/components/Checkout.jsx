import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Checkout.css";
import { useBasketValue } from "../Context/BasketContext";

const Checkout = () => {
  const [{ basket }, dispatch] = useBasketValue();
  const completePurchase = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    alert("Thank you for shopping with us. Your order is placed successfully.");
  };
  return (
    <div className="checkout_div">
      <div className="checkout_left">
        <h2>Your Shopping Basket</h2>
        {basket.length === 0 && (
          <h3>No items are added to Cart. Please Continue your Shopping.</h3>
        )}
        {basket.length > 0 &&
          basket.map((product) => (
            <CheckoutProduct key={product.id} product={product} />
          ))}
      </div>
      <div className="checkout_right">
        <h2>Subtotal</h2>
        {basket.length === 0 ? (
          <p>
            Subtotal (0 items): <strong>0</strong>
          </p>
        ) : (
          <p>
            Subtotal ({basket.length} items):{" "}
            <strong>
              {basket.reduce((acc, item) => item.price + acc, 0).toFixed(2)}
            </strong>
          </p>
        )}
        <button onClick={completePurchase}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
