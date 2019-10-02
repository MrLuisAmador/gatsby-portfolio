import React from "react"
import "./footer.scss"

const Footer = () => (
    <footer className="footer-container">
        <div className="copyright">
          © <span id="year-date">{new Date().getFullYear()}</span>
          <span> All Rights Reserved.</span>
          <a href="mailto:mrluisamador@gmail.com"> Luis Amador</a>
        </div>
    </footer>
)

export default Footer
