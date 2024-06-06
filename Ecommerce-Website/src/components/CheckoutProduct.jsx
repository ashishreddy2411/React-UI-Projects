import React from 'react'
import '../styles/CheckoutProduct.css'
import { useBasketValue } from '../Context/BasketContext'
const CheckoutProduct = ({product}) => {
    const [{basket},dispatch] = useBasketValue()
    const removefrombasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: product.id
        })
    }
  return (
    <div className="checkoutProduct">
      <img src={product.url} alt="product_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{product.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removefrombasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct