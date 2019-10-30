import React from "react"

import SecondLayout from "../components/layout/second-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <SecondLayout>
    <SEO title="404: Not found" />

    <section class="error-404 not-found">
      <h1 class="page-title">Oops! You seem lost.</h1>
      
      <h2 class="page-subtitle">No worries, just click to go back to the <a href="http://blog.mrluisamador.com">homepage</a> or take a look at the links below.</h2>

      <div class="page-content">
        <div class="widget widget_recent_entries">		
          <h2 class="widgettitle">Recent Posts</h2>		
          
          <ul>
              <li>
                <a href="http://blog.mrluisamador.com/javascript-compared-to-php-series/">JavaScript Compared to PHP Series</a>
              </li>
                      
              <li>
                <a href="http://blog.mrluisamador.com/magento-2-ultimo-slideshow/">Add a slideshow to your Magento 2 site using the Ultimo theme</a>
              </li>
          </ul>
        </div>
      </div>
    </section>
  </SecondLayout>
)

export default NotFoundPage
