import { React, useState, useEffect } from "react"
import "./AnnouncementsBar.scss"

const AnnouncementsBar = () => {
  // scrollHeight initializes at current scrollY and shouldOpenNav initializes to true
  const [scrollHeight, setScrollHeight] = useState(window.scrollY)
  const [shouldOpenNav, setShouldOpenNav] = useState(true)

  useEffect(() => {
    // if the scroll height right now is smaller than before, then it means we are going down and should open the nav!
    const handleScrolling = () => {
      if (scrollHeight > window.scrollY) {
        setShouldOpenNav(true)
      } else if (scrollHeight < window.scrollY) {
        setShouldOpenNav(false)
      }
      setScrollHeight(window.scrollY)
    }

    setScrollHeight(window.scrollY)
    window.addEventListener("scroll", handleScrolling)

    return () => {
      window.removeEventListener("scroll", handleScrolling)
    }
  }, [scrollHeight])

  return (
    <div>
      {shouldOpenNav && (
        <div className="announcements-bar">
          <div className="announcements-container">
            <a href="url">COVID-19 Response</a>|
            <a href="url">The Mask Project</a>
          </div>
          <div className="referral-container">
            <a href="url">Refer &amp; Get 15%</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnnouncementsBar
