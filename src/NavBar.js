import { React } from "react"
import "./NavBar.scss"
import AnnouncementsBar from "./AnnouncementsBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import NavLink from "./NavLink"
import ImageLink from "./ImageLink"

const NavBar = () => {
  return (
    <div>
      <AnnouncementsBar />
      <div className="nav-wrapper">
        <div className="navbar">
          <div className="logo">
            <img
              height="20px"
              width="20px"
              style={{ paddingRight: "15px" }}
              className="hamburger"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            ></img>
            <img
              height="24px"
              width="230px"
              src="https://images.ctfassets.net/9y4fi2gkk4ov/1UhZTIVtnqHRkeYiKopBGx/2062ac70d56d88b8dba29aff25107782/Ruggable_Logotype_Black.svg?w=300&fit=scale"
              alt="Ruggable Logo"
              className="ruggable-logo"
            ></img>
          </div>
          <div className="nav-links">
            <NavLink name="Size" url="url">
              <div className="menu-images-container">
                <div className="images-top">
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/5XbSnNQk8XRDQa1PriudHN/ce000fc0f69abd0bcb341e7ee0301ab9/Round_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Round"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/4FTtgkVzWZdooZIc6CS3R1/80d760e4bb7bf4908195b93c0f74212b/Runner_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Runner"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/6muSAA4OeRK8WQmctIzrms/52688a8b7e67ccd02c7a85fac0f8ff30/3x5_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="3'x5'"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/73lNDrLP2KCr5nsgUdR6eQ/d5bb4934a848d3b6e950c5d958fce920/5x7_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="5'x7'"
                  />
                </div>
                <div className="images-bottom">
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/4TPAc3bYTuj0gez78yY7TQ/04c03b1c9a4c6400792a28c781665064/6x9_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="6'x9'"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/6FzH8Xk2Z5PW23q3QeskAa/3a0592fef5f6ec7036a965151067dee8/8x10_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="8'x10'"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/44B0KWGMiOC1NTbmjRLju4/2a1fe38e4cbb00724da4141910001595/9x12_09152020.jpg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="9'x12'"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/1033/0751/files/New_Badge_2x_786662ce-33fb-4275-96cf-ae51d3ab0571.jpg?v=1600046305"
                    width="25px"
                    className="new-arrow"
                  ></img>
                </div>
              </div>
            </NavLink>
            <NavLink name="Colors" url="url" />
            <div className="link-container">
              <a href="url">Style</a>
              <div className="hover-bottom"></div>
            </div>
            <div className="link-container">
              <a href="url">More</a>
              <div className="hover-bottom"></div>
            </div>
            <div className="link-container">
              <a href="url">How It Works</a>
              <div className="hover-bottom"></div>
            </div>
          </div>
          <div className="search">
            <form>
              <input
                type="search"
                placeholder="What are you looking for?"
              ></input>
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </form>
          </div>
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className="shopping-number">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
