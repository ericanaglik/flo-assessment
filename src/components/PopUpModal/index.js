import React from "react"
import "./PopUpModal.scss"

const PopUpModal = (props) => {
  const { show, onClose } = props

  if (!show) {
    return null
  }

  return (
    <div className="page-background">
      <div className="pop-up-modal">
        <div className="pop-up-text">
          <h2>Mystery Offer</h2>
          <p>
            Join us to unlock your first offer. Plus, enjoy members-only perks,
            deals, tips, and more!
          </p>
          <form>
            <input type="email" placeholder="Enter Your Email"></input>
            <button className="pop-up-submit">Sign Up By Email</button>
          </form>
          <p className="pop-up-disclaimer">
            By signing up, you agree to Ruggable&apos;s Privacy Policy and Terms
            of Service, and to receive Ruggable offers, promotions and other
            commercial messages. You may unsubscribe at any time.
          </p>
        </div>
        <div className="pop-up-image">
          <button onClick={onClose}>X</button>
          <img src="https://cdn.shopify.com/s/files/1/1033/0751/files/email_modal_image_17kb.jpg?v=1603238293"></img>
        </div>
      </div>
    </div>
  )
}

export default PopUpModal
