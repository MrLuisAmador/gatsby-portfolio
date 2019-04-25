import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
  © {new Date().getFullYear()}, Going to be built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
