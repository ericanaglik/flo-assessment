import React from 'react'
import './ArticleCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const ArticleCard = props => {
  const {
    photoURL,
    titleText,
    descriptionText
  } = props
  return (
    <div className="article-card-container">
      <img src={photoURL}></img>
      <h3>{titleText}</h3>
      <p>{descriptionText}</p>
      <a href="url">Read More<FontAwesomeIcon className="arrow" icon={faChevronRight}/></a>
    </div>
  )
}

export default ArticleCard