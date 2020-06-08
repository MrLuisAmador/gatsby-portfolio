import React from "react"
import Isotope from "isotope-layout";
import "./projects.scss"

import health from "../../images/gme-healthquest-800x389.png"
import think from "../../images/thinkdifferently-800x389.png"
import zaren from "../../images/zarembabrown.com_-800x389.png"
import westchester from "../../images/westchesterbusinesscenter.com_-800x389.png"
import suburban from "../../images/suburbanpest.com_-800x389.png"
import theBone from "../../images/thebonecompany.com_-800x389.png"
import bone from "../../images/1-800dogbone.com-800x389.png"
import ossin from "../../images/ossiningchildrenscenter.org_-800x389.png"
import legal from "../../images/legaleaseinc.com_-800x389.png"
import kelly from "../../images/kelly-ip.com_-800x389.png"
import climb from "../../images/climbleadership.com_-800x389.png"
import luis from "../../images/mrluisamador.com_.png"
import bridge from "../../images/bridgeprops.png"
import prim from "../../images/primitivesbykathy.png"
import organ from "../../images/organicpharmer.png"
import beauty from "../../images/beautyplussalon.png"
import sim from "../../images/simoneperele.png"
import julia from "../../images/juliab.png"

const projectLists = [
    { id: 1, url: "https://gme.healthquest.org/", label: "gme.healthquest.org", filter: "filter-two", platform: "WordPress", image: health },
    { id: 2, url: "https://www.thinkdifferently.net/", label: "thinkdifferently.net", filter: "filter-two", platform: "WordPress", image: think },
    { id: 3, url: "http://www.zarembabrown.com/", label: "zarembabrown.com", filter: "filter-two", platform: "WordPress", image: zaren },
    { id: 4, url: "http://www.westchesterbusinesscenter.com/", label: "westchesterbusinesscenter.com", filter: "filter-three", platform: "Business Catalyst", image: westchester },
    { id: 5, url: "http://thebonecompany.com/", label: "thebonecompany.com", filter: "filter-two", platform: "WordPress", image: theBone },
    { id: 6, url: "http://suburbanpest.com/", label: "suburbanpest.com", filter: "filter-two", platform: "WordPress", image: suburban },
    { id: 7, url: "http://www.1-800dogbone.com/", label: "1-800dogbone.com", filter: "filter-two", platform: "WordPress", image: bone },
    { id: 8, url: "http://www.ossiningchildrenscenter.org/", label: "ossiningchildrenscenter.org", filter: "filter-three", platform: "Business Catalyst", image: ossin },
    { id: 9, url: "hhttp://www.legaleaseinc.com/", label: "legaleaseinc.com", filter: "filter-three", platform: "Business Catalyst", image: legal },
    { id: 10, url: "http://www.kelly-ip.com/", label: "kelly-ip.com", filter: "filter-three", platform: "Business Catalyst", image: kelly },
    { id: 11, url: "http://www.climbleadership.com/", label: "climbleadership.com", filter: "filter-three", platform: "Business Catalyst", image: climb },
    { id: 12, url: "http://www.mrluisamador.com/", label: "mrluisamador.com", filter: "filter-three", platform: "Gatsby", image: luis },
    { id: 13, url: "https://la.bridgeprops.com/", label: "la.bridgeprops.com", filter: "filter-one", platform: "Magento 1", image: bridge },
    { id: 14, url: "https://primitivesbykathy.com/", label: "primitivesbykathy.com", filter: "filter-one", platform: "Magento 1", image: prim },
    { id: 15, url: "https://www.organicpharmer.com/", label: "organicpharmer.com", filter: "filter-one", platform: "Magento 1", image: organ },
    { id: 16, url: "https://www.beautyplussalon.com/", label: "beautyplussalon.com", filter: "filter-one", platform: "Magento 1", image: beauty },
    { id: 17, url: "https://www.simoneperele.com/", label: "simoneperele.com", filter: "filter-one", platform: "Magento 1", image: sim },
    { id: 18, url: "https://juliab.com/", label: "juliab.com", filter: "filter-one", platform: "Magento 2", image: julia }
]
  
function Project({ lists }) {
return (
        <>
            { lists.map( list => (
            <div className={ `grid-item wordpress-projects filter-item ${list.filter}` } key={list.id}>
                <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href={list.url} aria-label={list.label}>
                <div className="project-box">
                    <div className="project-box__img">
                    <img
                        width="800"
                        height="389"
                        rel="noopener noreferrer"
                        src={list.image}
                        className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                        alt={list.label}
                    />
                    </div>

                    <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">{list.platform}</li>
                    </ul>
                </div>
                </a>
            </div>
            ))}
        </>
    )
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  // Click Function
  onFilterChange = (newFilter) => {
    if (this.iso === undefined) {
      this.iso = new Isotope('#filter-container', {
        itemSelector: '.filter-item',
        layoutMode: "fitRows"
      });
    }
    if(newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  }

  render() {
    return(
      <section id="projects" className="projects scrollto">
          <div className="projects__title-title-wrap">
            <h2 className="projects__title">Projects</h2>

            <h3 className="projects__sub-title">List of Projects.</h3>
          </div>

          <div className="filter-btn">
            <button data-filter="*" onClick={() => {this.onFilterChange("*")}}>All</button>

            <button data-filter="filter-one" onClick={() => {this.onFilterChange("filter-one")}}>Magento</button>

            <button data-filter="filter-two" onClick={() => {this.onFilterChange("filter-two")}}>WordPress</button>

            <button data-filter="filter-three" onClick={() => {this.onFilterChange("filter-three")}}>Misc</button>
          </div>

          <div id="filter-container" className="grid">
            <Project lists={projectLists} />
          </div>
      </section>
    )
  }
}


export default Projects
