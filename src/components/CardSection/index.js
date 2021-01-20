import React from "react"
import "./CardSection.scss"

const CardSection = (props) => {
  const { titleText, descriptionText, sectionClassName, children } = props
  return (
    <div className={sectionClassName}>
      <h2>{titleText}</h2>
      <p>{descriptionText}</p>
      <div className="card-container">{children}</div>
    </div>
  )
}

export default CardSection
