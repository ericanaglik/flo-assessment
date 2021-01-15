import React from 'react'
import './Footer.scss'

const Footer = props => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="disclaimer-text-container">
          <p><b>*Shipping Exclusions Apply</b></p>
          <p>Ruggable.com site-wide FREE SHIPPING applies to standard shipping and handling within the U.S., and Canada, excluding Hawaii, Alaska, and U.S. Territories (other than Washington, D.C.).</p>
          <p>**Discounts do not apply to sale items, swatches or gift cards unless otherwise noted and cannot be combined with any other offers. For a full list of exclusions please see our <a href="url">FAQ</a>.</p>
        </div>
        <div className="footer-links">
          <div className="company-currency">
            <h4>COMPANY</h4>
            <ul>
              <li>About Us</li>
              <li>Philanthropy</li>
              <li>Blog</li>
              <li>Reviews</li>
              <li>#Ruggable</li>
              <li>Careers</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
              <li>Affiliate</li>
              <li>Get 15%</li>
            </ul>
            <h4>CURRENCY</h4>
            <button className="usd">USD</button><button className="cad">CAD</button>
          </div>
          <div className="shop">
            <h4>SHOP</h4>
            <ul>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>All Rug Collections</li>
              <li>Shop All Colors</li>
              <li>Our Rug Pads</li>
              <li>Gift Card</li>
            </ul>
          </div>
          <div className="support">
            <h4>SUPPORT</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Customer Support</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Afterpay</li>
              <li>Trade Program</li>
              <li>Rug Size Guide</li>
              <li>Product Safety</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className="connect-socialize">
            <h4>CONNECT</h4>
            <p>Sign up to receive 10% OFF your first order, exclusive offers and design updates.</p>
            <form>
              <input type="email" placeholder="Enter your email"></input><button className="email-submit">SUBMIT</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>SOCIALIZE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer