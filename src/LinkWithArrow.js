import React from "react"
import "./LinkWithArrow.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const LinkWithArrow = (props) => {
  const { linkText, url } = props
  return (
    <div>
      <div className="read-more">
        <a href={url}>
          {linkText}
          <div className="read-more-underline"></div>
        </a>
        <FontAwesomeIcon className="arrow" icon={faChevronRight} />
      </div>
    </div>
  )
}

export default LinkWithArrow
