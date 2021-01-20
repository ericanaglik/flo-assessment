import React from "react"

const LinkUnderline = (props) => {
  const { url, linkTitle } = props
  return (
    <div className="image-links">
      <div className="image-link-container">
        <a href={url}>{linkTitle}</a>
        <div className="hover-bottom-link"></div>
      </div>
    </div>
  )
}

export default LinkUnderline
