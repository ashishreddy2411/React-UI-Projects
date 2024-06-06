import React from "react";

import "../styles/Product.css";
import { useBasketValue } from "../Context/BasketContext";
const Product = ({ id,title, desc, price, url, rating }) => {
  const renderStars = (rate) => {
    rate = Math.round(rate);
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const [ basket , dispatch] = useBasketValue();
  const addtocart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        desc: desc,
        price: price,
        url: url,
        rating: rating,
      },
    });
    alert("Product added to cart successfully");
  }
  return (
    <div className="product">
      <div className="product_info">
        <h3>
          <p>{title}</p>
        </h3>
        <div className="desc">
          <p>{desc}</p>
        </div>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <p style={{color:"black"}}>{renderStars(rating.rate)} ({rating.count})</p>
        </div>
      </div>
      <img src={url} alt="product_image" />
      <button onClick={addtocart}>Add to Cart</button>
    </div>
  );
};

export default Product;
