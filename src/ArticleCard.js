import React from "react"
import "./ArticleCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const ArticleCard = (props) => {
  const { photoURL, titleText, descriptionText } = props
  return (
    <a className="article-card-container">
      <img src={photoURL}></img>
      <h3>{titleText}</h3>
      <p>{descriptionText}</p>
      <a className="read-more">
        <a href="url">
          Read More <div className="read-more-underline"></div>
        </a>
        <FontAwesomeIcon className="arrow" icon={faChevronRight} />
      </a>
    </a>
  )
}

export default ArticleCard
