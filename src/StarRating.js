import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as starSolid, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {faStar as starOutline} from '@fortawesome/free-regular-svg-icons'

const StarRating = ({ rating }) => {

  return (
    <div>
      {
        [1, 2, 3, 4, 5].map(offset => 
          rating - offset >= 0 ? (
            <FontAwesomeIcon icon={starSolid}/>
          ) : rating - offset >= -0.5 ? (
            <FontAwesomeIcon icon={faStarHalfAlt}/>
          ) : (
            <FontAwesomeIcon icon={starOutline}/>
          )
        )
      }
    </div>
  )
}

export default StarRating