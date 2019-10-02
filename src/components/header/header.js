import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

const Header = ({ siteTitle }) => (
  
    
    
  <header className="header-container">
    <div className="site-header__center">
      <h1 className="header-title">Luis Amador</h1>

      <h2 className="header-subtitle">
        <span className="typejs">Web Developer, making the web a better experience.</span>
        <span className="typed-cursor">|</span>
      </h2>

      <a className="header-cta" href="#contact-me">Let's Talk!</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
