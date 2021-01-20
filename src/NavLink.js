import { React, useState } from "react"
import NavSubMenu from "./NavSubMenu"

const NavLink = (props) => {
  const { children, name, url, shopText } = props

  const [linkHovered, setLinkHovered] = useState()

  return (
    <div
      onMouseEnter={() => setLinkHovered(true)}
      onMouseLeave={() => setLinkHovered(false)}
    >
      <div className="link-container">
        <a href={url}>{name}</a>
        <div className="hover-bottom"></div>
      </div>
      {children && linkHovered && (
        <NavSubMenu shopText={shopText}>
          <div>{children}</div>
        </NavSubMenu>
      )}
    </div>
  )
}

export default NavLink
