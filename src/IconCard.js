import React from 'react'
import './IconCard.scss'

const IconCard = props => {
  const {
    iconURL,
    titleText,
    descriptionText
  } = props
  return (
    <div className="icon-card-container">
      <img src={iconURL}></img>
      <h3>{titleText}</h3>
      <p>{descriptionText}</p>
    </div>
  )
}

export default IconCard