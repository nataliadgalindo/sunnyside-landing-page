import Navbar from "./Navbar"

function Header() {
  return (
    <header>
      <Navbar />

      <div className="heading">
        <h1>we are creatives</h1>
        <img
          className="header-arrow"
          src="/images/icon-arrow-down.svg"
          alt=""
        />
      </div>
    </header>
  )
}

export default Header
