import { useState } from "react"

export const navMenu = (
  <ul className="nav-menu">
    <li>About</li>
    <li>Services</li>
    <li>Projects</li>
    <li className="btn-container">
      <button className="contact-btn">Contact</button>
    </li>
  </ul>
)

function Navbar() {
  let [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav((prevState) => !prevState)
  }

  return (
    <>
      <nav className="desktop-nav">
        <img src="/images/logo.svg" alt="" />
        {navMenu}
      </nav>

      <nav className="mobile-nav">
        <img src="/images/logo.svg" alt="" />

        <img
          onClick={toggleNav}
          className="hamburger"
          src="/images/icon-hamburger.svg"
          alt=""
        />

        {showNav ? navMenu : ""}
      </nav>
    </>
  )
}

export default Navbar
