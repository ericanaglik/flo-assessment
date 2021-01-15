import React from 'react'
import './VideoCard.scss'

const VideoCard = props => {
  const {
    videoURL,
    titleText,
    number,
    descriptionText
  } = props
  return (
    <div className="video-card-container">
      <video playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted">
        <source src={videoURL} type="video/mp4"></source>
      </video>
      <div className="number-title-container">
        <h3 className="number-circle">{number}</h3><h3 className="title">{titleText}</h3>
      </div>
      <p>{descriptionText}</p>
    </div>
  )
}

export default VideoCard