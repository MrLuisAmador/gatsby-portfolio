import React from "react"
import './nav.scss'

function onClick(props) {
   console.log('clicked');
}

const Nav = () => (
 <nav className="nav-wrapper">
   <ul className="hello">
      <li onClick={props.onClick}>Testing</li>
   </ul>
 </nav>
)

export default Nav
