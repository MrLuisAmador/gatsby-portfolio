import React from "react"
import "./footer.scss"

const Footer = () => (
  <footer className="footer-wrapper">
  © {new Date().getFullYear()}, Going to be built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
