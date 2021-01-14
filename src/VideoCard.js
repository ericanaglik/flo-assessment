import React from 'react'
import './VideoCard.scss'

const VideoCard = props => {
  const {
    videoURL,
    titleText,
    descriptionText
  } = props
  return (
    <div className="video-card-container">
      <video playsinline="playsinline" autoplay="autoplay" loop="loop" muted="muted">
        <source src={videoURL} type="video/mp4"></source>
      </video>
      <h3>{titleText}</h3>
      <p>{descriptionText}</p>
    </div>
  )
}

export default VideoCard