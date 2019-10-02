import React from "react"
import "./projects.scss"

const Projects = () => (
    <section id="projects" className="projects scrollto">
          <div className="projects__title-title-wrap">
            <h2 className="projects__title">Projects</h2>

            <h3 className="projects__sub-title">List of Projects I have been a part of.</h3>
          </div>

          <div className="filter-btn">
            <button>All</button>

            <button>Magento</button>

            <button>WordPress</button>

            <button>Misc</button>
          </div>

          <div className="grid">
     <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://www.syndicatedistribution.com/us/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2019/04/syndicatedistribution-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> 
                    </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 2</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://www.vaprzon.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-10.02.03-PM-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> 
                    </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 2</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">
              <a className="grid-item__link" target="_blank" href="https://gme.healthquest.org/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2018/04/gme-healthquest-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">
              <a className="grid-item__link" target="_blank" href="https://www.thinkdifferently.net/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2018/04/thinkdifferently-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> 
                    </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">
              <a className="grid-item__link" target="_blank" href="http://www.zarembabrown.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/zarembabrown.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects">
              <a className="grid-item__link" target="_blank" href="http://www.westchesterbusinesscenter.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/westchesterbusinesscenter.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">
              <a className="grid-item__link" target="_blank" href="http://thebonecompany.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/thebonecompany.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">
              <a className="grid-item__link" target="_blank" href="http://suburbanpest.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/suburbanpest.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects">          
                <a className="grid-item__link" target="_blank" href="http://www.ossiningchildrenscenter.org/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/ossiningchildrenscenter.org_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" />
                     </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects">
              <a className="grid-item__link" target="_blank" href="http://www.legaleaseinc.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/legaleaseinc.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects">
              <a className="grid-item__link" target="_blank" href="http://www.kelly-ip.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/kelly-ip.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item misc-projects">
              <a className="grid-item__link" target="_blank" href="http://www.climbleadership.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/climbleadership.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /></div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Business Catalyst</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">           
                <a className="grid-item__link" target="_blank" href="http://www.1-800dogbone.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/11/1-800dogbone.com_-800x389.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> 
                    </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item wordpress-projects">
              <a className="grid-item__link" target="_blank" href="http://www.mrluisamador.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/08/mrluisamador.com_.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">WordPress</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://la.bridgeprops.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/08/bridgeprops.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://primitivesbykathy.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/08/primitivesbykathy.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">             
                <a className="grid-item__link" target="_blank" href="https://www.organicpharmer.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/08/organicpharmer.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://www.beautyplussalon.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/08/beautyplussalon.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://www.simoneperele.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer"
                      src="http://mrluisamador.com/wp-content/uploads/2017/08/simoneperele.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> </div>

                  <ul className="project-box__content">
                    <li className="content__item project-box__tax">Platform:</li>
                    <li className="content__item project-box__tax">Magento 1</li>
                  </ul>
                </div>
              </a>
            </div>

            <div className="grid-item magento-projects">
              <a className="grid-item__link" target="_blank" href="https://juliab.com/">
                <div className="project-box">
                  <div className="project-box__img">
                    <img width="800" height="389" rel="noopener noreferrer" src="http://mrluisamador.com/wp-content/uploads/2017/08/juliab.png"
                      className="attachment-my-project-customize-size size-my-project-customize-size wp-post-image" alt="" /> 
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

export default Projects