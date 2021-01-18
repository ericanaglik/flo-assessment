import React from 'react'
import './MobileFooter.scss'

const MobileFooter = props => {

  return (
    <div className="mobile-footer">
      <div className="mobile-subscribe-offer">
        <h2>Get 10% Off</h2>
        <p>Sign up to receive 10% OFF your first order, exclusive offers and design updates.</p>
        <form>
          <input type="email" placeholder="Enter your email"></input>
          <button className="subscribe">Subscribe</button>
        </form>
      </div>
      <div className="mobile-footer-container">
        <div className="mobile-footer-links">
            <h4>COMPANY</h4>
            <div className="company">
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>#Ruggable</li>
                <li>Terms of Service</li>
                <li>Affiliate</li>
              </ul>
              <ul>
                <li>Philanthropy</li>
                <li>Reviews</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Get 15%</li>
              </ul>
          </div>
          <h4>SHOP</h4>
          <div className="mobile-shop">
            <ul>
              <li>New Arrivals</li>
              <li>All Rug Collections</li>
              <li>Our Rug Pads</li>
            </ul>
            <ul>
              <li>Best Sellers</li>
              <li>Shop All Colors</li>
              <li>Gift Card</li>
            </ul>
          </div>
          <h4>SUPPORT</h4>
          <div className="mobile-support">
            <ul>
              <li>FAQs</li>
              <li>Customer Account</li>
              <li>Returns</li>
              <li>Trade Program</li>
              <li>Product Safety</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>Shipping</li>
              <li>Afterpay</li>
              <li>Rug Size Guide</li>
              <li>Accessability</li>
            </ul>
          </div>
        <h4>SOCIALIZE</h4>
        <br></br>
        <br></br>
        <h4>CURRENCY</h4>
        <select name="currency" id="currency">
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
        </select>
        </div>
        <div className="mobile-disclaimer-text-container">
          <p><b>*Shipping Exclusions Apply</b></p>
          <p>Ruggable.com site-wide FREE SHIPPING applies to standard shipping and handling within the U.S., and Canada, excluding Hawaii, Alaska, and U.S. Territories (other than Washington, D.C.).</p>
          <p>**Discounts do not apply to sale items, swatches or gift cards unless otherwise noted and cannot be combined with any other offers. For a full list of exclusions please see our <a href="url">FAQ</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter