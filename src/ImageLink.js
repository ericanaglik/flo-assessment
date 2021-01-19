import React from "react"

const ImageLink = (props) => {

  const {imageURL, url, linkTitle} = props

  return (
    <div className="image-links">
      <img src={imageURL}></img>
      <div className="image-link-container">
        <a href={url}>{linkTitle}</a>
        <div className="hover-bottom-link"></div>
      </div>
    </div>
  )
}

export default ImageLink