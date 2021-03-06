import React from "react"
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import TimelineIcon from '@material-ui/icons/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import CodeIcon from '@material-ui/icons/Code';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import './nav.scss'
import HeadShot from '../../images/mugshot.png'

class Nav extends React.Component {
   constructor(props) {
      super(props);
      this.state = {addClass: false}
    }
    toggle() {
      this.setState({addClass: !this.state.addClass});
    }
 
   render() {
      let boxClass = [" open"];
      if(this.state.addClass) {
        boxClass.push('close');
      }

     return (

      <nav className={"nav-container" +  boxClass.join(' ')}>
         {/*<div onClick={this.toggle.bind(this)} id="menuToggle" className="button-container menu"> */}
         {/*   <span></span>*/}
         {/*   <span></span>*/}
         {/*   <span></span>*/}
         {/*</div>*/}

         <div className="nav-content">
            <div className="nav-content-box">
               <h3 className="heading-name">
                  <Link className="font-color" to="/">
                     <span className="mobile-heading-name">LA</span>
                     <span className="desktop-heading-name">Luis Amador</span>
                  </Link>
               </h3>

               <div className="head-shot">
                  <Link to="/">
                     <img src={HeadShot} alt="Head Shot" />
                  </Link>
               </div>

               <ul className="nav-lists">
                 <li className="nav-list">
                   <Link to="/" aria-label="Home">
                     <span className="mobile-menu-name"><HomeIcon fontSize="large" /></span>
                     <span className="desktop-menu-name">Home</span>
                   </Link>
                 </li>

                  <li className="nav-list">
                     <AnchorLink href="#about-me" aria-label="About Me">
                           <span className="mobile-menu-name"><PersonIcon fontSize="large" /></span>
                           <span className="desktop-menu-name">About Me</span>
                     </AnchorLink>
                  </li>

                  <li className="nav-list">
                     <AnchorLink href="#skills" aria-label="Skills">
                           <span className="mobile-menu-name"><InfoIcon fontSize="large" /></span>
                           <span className="desktop-menu-name">My Expertise</span>
                     </AnchorLink>
                  </li>

                  <li className="nav-list">
                     <AnchorLink href="#projects" aria-label="Projects">
                           <span className="mobile-menu-name"><WorkIcon fontSize="large" /></span>
                           <span className="desktop-menu-name">Projects</span>
                     </AnchorLink>
                  </li>

                  <li className="nav-list">
                     <AnchorLink href="#blog" aria-label="Blog">
                           <span className="mobile-menu-name"><TimelineIcon fontSize="large" /></span>
                           <span className="desktop-menu-name">Blog</span>
                     </AnchorLink>
                  </li>

                  <li className="nav-list">
                     <AnchorLink href="#contact-me" aria-label="Contact Me">
                           <span className="mobile-menu-name"><ContactMailIcon fontSize="large" /></span>
                           <span className="desktop-menu-name">Contact Me</span>
                     </AnchorLink>
                  </li>
               </ul>

               <div className="social-container">
                  <ul className="social-lists">
                  <li className="social-list icon-linkedin">
                     <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mrluisamador" aria-label="LinkedIn"><LinkedInIcon id="linkedin" fontSize="large" /></a>
                  </li>

                  <li className="social-list icon-twitter">
                     <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mrluisamador" aria-label="Twitter"><TwitterIcon id="twitter" fontSize="large" /></a>
                  </li>

                  <li className="social-list icon-github">
                     <a target="_blank" rel="noopener noreferrer" href="https://github.com/MrLuisAmador" aria-label="Github"><CodeIcon id="github" fontSize="large" /></a>
                  </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>     
     );
   }
 }

export default Nav