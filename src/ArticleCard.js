import React from "react"
import "./ArticleCard.scss"
import LinkWithArrow from "./LinkWithArrow"

const ArticleCard = (props) => {
  const { photoURL, titleText, descriptionText } = props
  return (
    <div className="article-card-container">
      <img src={photoURL}></img>
      <h3>{titleText}</h3>
      <p>{descriptionText}</p>
      <LinkWithArrow linkText="Read More" url="url" />
    </div>
  )
}

export default ArticleCard
