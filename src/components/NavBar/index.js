import { React } from "react"
import "./NavBar.scss"
import AnnouncementsBar from "../AnnouncementsBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import NavLink from "../NavLink"
import ImageLink from "../ImageLink"
import LinkUnderline from "../LinkUnderline"

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
            <NavLink name="Size" url="url" shopText="Shop Best Sellers">
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
                    linkTitle="Runners"
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
            <NavLink name="Colors" url="url" shopText="Shop All Colors">
              <div className="menu-images-container-colors">
                <div className="images-top">
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Blue & Green"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/21i9HtiAPrV2gOcozIbTAJ/3e16d99120d4856ca6549ca7eeb68f5e/Swatch_Black_Noir.svg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Black"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/2AA5lhamMlOdd53fno31nz/f46934922b20a08dc7714c7801ac10c6/Swatch_BlaGray.svg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Gray & Silver"
                  />
                </div>
                <div className="images-bottom">
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/1xjSgIQ9X3Z1DOBUnNvn0K/9b0e2fa6580702080ebf6ffbdf66d940/Swatch_BrBeige.svg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Naturals"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/41PJzWHcLi67extwaCXvXD/bc5b4d9c0d3f9ffa5418a88b0ebb8f82/Swatch_Naturals.svg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="White & Cream"
                  />
                  <ImageLink
                    imageURL="https://images.ctfassets.net/9y4fi2gkk4ov/1dabV7rBTiQMMu3Cb28NuW/ef20150a7619025acdecb15ab67b3d5b/Swatch_Colorful.svg?w=160&fit=scale&fm=png&fl=png8"
                    url="url"
                    linkTitle="Multicolor"
                  />
                </div>
              </div>
            </NavLink>
            <NavLink name="Style" url="url" shopText="Shop All Styles">
              <div className="link-list-container">
                <div className="left-link-container">
                  <p className="cursive-title">Popular</p>
                  <div className="link-container-text">
                    <LinkUnderline linkTitle="Best Sellers" url="url" />
                    <img
                      className="star-wars"
                      src="https://cdn.shopify.com/s/files/1/1033/0751/files/StarWars_Logo.svg?v=1596559348"
                    ></img>
                    <LinkUnderline linkTitle="Outdoor" url="url" />
                    <img
                      className="disney"
                      src="https://cdn.shopify.com/s/files/1/0284/2666/6115/files/DisneyLogo.svg?v=1588117441"
                    ></img>
                  </div>
                </div>
                <div className="collections-container">
                  <p className="cursive-title">Collections</p>
                  <div className="right-link-container">
                    <div className="left-links">
                      <LinkUnderline linkTitle="Moroccan" url="url" />
                      <LinkUnderline linkTitle="Folk Heritage" url="url" />
                      <LinkUnderline linkTitle="Traditional" url="url" />
                      <LinkUnderline linkTitle="Geometric" url="url" />
                      <LinkUnderline linkTitle="Floral" url="url" />
                    </div>
                    <div className="right-links">
                      <LinkUnderline linkTitle="Bohemian" url="url" />
                      <LinkUnderline linkTitle="Contemporary" url="url" />
                      <LinkUnderline linkTitle="Persian" url="url" />
                      <LinkUnderline linkTitle="Solid & Ombre" url="url" />
                      <LinkUnderline linkTitle="Transitional" url="url" />
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink name="More" url="url" shopText="Shop Best Sellers">
              <div className="link-list-container">
                <div className="left-link-container">
                  <p className="cursive-title">Featured</p>
                  <div className="link-container-text">
                    <LinkUnderline linkTitle="New Arrivals" url="url" />
                    <LinkUnderline linkTitle="Founder's Farmhouse" url="url" />
                    <LinkUnderline linkTitle="Outdoor" url="url" />
                    <LinkUnderline linkTitle="E-Gift Card" url="url" />
                  </div>
                </div>
                <div className="left-link-container">
                  <p className="cursive-title">Textures</p>
                  <div className="link-container-text">
                    <LinkUnderline linkTitle="Chenille" url="url" />
                    <LinkUnderline linkTitle="Flat Weave" url="url" />
                    <LinkUnderline linkTitle="Shag" url="url" />
                    <LinkUnderline linkTitle="Plush" url="url" />
                    <LinkUnderline linkTitle="Shop All Textures" url="url" />
                  </div>
                </div>
                <div className="left-link-container">
                  <p className="cursive-title">Category</p>
                  <div className="link-container-text">
                    <img
                      className="star-wars"
                      src="https://cdn.shopify.com/s/files/1/1033/0751/files/StarWars_Logo.svg?v=1596559348"
                    ></img>
                    <LinkUnderline linkTitle="Kids Rugs" url="url" />
                    <LinkUnderline linkTitle="Cynthia Rowley" url="url" />
                    <img
                      className="disney"
                      src="https://cdn.shopify.com/s/files/1/0284/2666/6115/files/DisneyLogo.svg?v=1588117441"
                    ></img>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink src="url" name="How It Works" />
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
