import React from 'react'
import './ShopCard.scss'

const ShopCard = props => {
  const {
    photoURL,
    titleText,
    children,
    priceRange
  } = props
  return (
    <div className="shop-card-container">
      <img src={photoURL}></img>
      <p><b>{titleText}</b></p>
      <p>{children}</p>
      <p>{priceRange}</p>
    </div>
  )
}

export default ShopCard