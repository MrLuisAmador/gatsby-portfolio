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
            <div className="grid-item wordpress-projects filter-item filter-two">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://gme.healthquest.org/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={health}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt="Health"
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects filter-item filter-two">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://www.thinkdifferently.net/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={think}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt="Think" />
                    </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects filter-item filter-two">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.zarembabrown.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={zaren}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt="zaren"
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects filter-item filter-three">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.westchesterbusinesscenter.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={westchester}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt="westchester"
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects filter-item filter-two">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://thebonecompany.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={theBone}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects filter-item filter-two">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://suburbanpest.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={suburban}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects filter-item filter-three">          
                <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.ossiningchildrenscenter.org/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={ossin}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                   </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects filter-item filter-three">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.legaleaseinc.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={legal}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects filter-item filter-three">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.kelly-ip.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={kelly}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects filter-item filter-three">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.climbleadership.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={climb}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects filter-item filter-two">           
                <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.1-800dogbone.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={bone}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                    </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects filter-item filter-two">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="http://www.mrluisamador.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={luis}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects filter-item filter-one">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://la.bridgeprops.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={bridge}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects filter-item filter-one">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://primitivesbykathy.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={prim}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects filter-item filter-one">             
                <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://www.organicpharmer.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={organ}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects filter-item filter-one">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://www.beautyplussalon.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={beauty}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects filter-item filter-one">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://www.simoneperele.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={sim}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                  </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects filter-item filter-one">
              <a className="grid-item__link" target="_blank" rel="noopener noreferrer" href="https://juliab.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img
                      width="800"
                      height="389"
                      rel="noopener noreferrer"
                      src={julia}
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image"
                      alt=""
                    />
                </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 2</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </section>
    )
  }
}


export default Projects
