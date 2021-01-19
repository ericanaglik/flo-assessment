import React from "react"
import "./NavSubMenu.scss"
import LinkWithArrow from "./LinkWithArrow"

const NavSubMenu = (props) => {
  const { children } = props
  return (
    <div className="nav-sub-menu">
      <div className="nav-sub-menu-container">
        {children}
        <div className="shop-plush-rugs">
          <div className="shop-arrow-link">
            <LinkWithArrow url="url" linkText="Shop Plush Rugs" />
          </div>
          <img
            src="https://images.ctfassets.net/9y4fi2gkk4ov/2dHE4jtNG5Y4dmfaIhL1GP/f424d40ffef3b272b7f976612f647cd9/Nav_Dropdown_WhiteThumbnail-363x332.jpg?w=360&h=320&fit=scale&fm=jpg&fl=progressive"
            alt="Shop plush rugs, new colors"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default NavSubMenu
