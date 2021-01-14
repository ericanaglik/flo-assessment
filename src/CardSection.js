import React from 'react'
import Button from './Button'
import './CardSection.scss'

const CardSection = props => {
  const {
    titleText,
    descriptionText,
    backgroundColorClassName,
    children,
    buttonText
  } = props
  return (
    <div className={backgroundColorClassName}>
      <h2>{titleText}</h2>
      <p>{descriptionText}</p>
      <div className="card-container">
        {children}
      </div>
      <Button buttonText={buttonText}/>
    </div>
  )
}

export default CardSection