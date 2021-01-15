import React from 'react'
import './NavBar.scss'
import AnnouncementsBar from './AnnouncementsBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = props => {

  return (
    <div>
      <AnnouncementsBar/>
      <div className="nav-wrapper">
        <div className="navbar">
          <div className="logo">
            <img
              height="20px"
              width="20px"
              style={{paddingRight: "15px"}}
              className="hamburger"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            ></img>
            <img  
              height="24px"
              width="230px"
              src="https://images.ctfassets.net/9y4fi2gkk4ov/1UhZTIVtnqHRkeYiKopBGx/2062ac70d56d88b8dba29aff25107782/Ruggable_Logotype_Black.svg?w=300&fit=scale" 
              alt="Ruggable Logo"
            ></img>
          </div>
          <div className="nav-links">
            
            <div className="link-container"><a href="url">Size</a></div>
            <div className="link-container"><a href="url">Colors</a></div>
            <div className="link-container"><a href="url">Style</a></div>
            <div className="link-container"><a href="url">More</a></div>
            <div className="link-container"><a href="url">How It Works</a></div>
          </div>
          <div className="search">
            <form>
              <input type="search" placeholder="What are you looking for?"></input>
              <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            </form>  
          </div>
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar