import React from "react"
import "./ShopCard.scss"
import StarRating from "../StarRating"

const ShopCard = (props) => {
  const { photoURL, titleText, rating, priceRange } = props
  return (
    <div className="shop-card-container">
      <img src={photoURL}></img>
      <p className="rug-title">
        <b>{titleText}</b>
      </p>
      <p>
        <StarRating rating={rating} />
      </p>
      <p>{priceRange}</p>
    </div>
  )
}

export default ShopCard
