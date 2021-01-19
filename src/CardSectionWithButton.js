import React from "react"
import Button from "./Button"
import "./CardSection.scss"

const CardSectionWithButton = (props) => {
  const {
    titleText,
    descriptionText,
    sectionClassName,
    children,
    buttonText,
  } = props
  return (
    <div className={sectionClassName}>
      <h2>{titleText}</h2>
      <p>{descriptionText}</p>
      <div className="card-container">{children}</div>
      <Button buttonText={buttonText} />
    </div>
  )
}

export default CardSectionWithButton
