import React from "react"
import { Link } from "gatsby"

import "./blog-widget.scss"

const Blog = () => (
    <section id="blog" className="scrollto">
          <h1 className="blog-title">Latest Blog</h1>

          <div className="blog-outer-wrap">

            <div className="blog-inner-wrap">
              <h1>JavaScript Compared to PHP Series</h1>

              <p>What are the two language purposes? After several years of web development. I’ve decided to compare
                JavaScript and PHP head to head. I will try to outline its comparison on a side by side outline, in an
                effort to truly understand how each work, and how they differ from each other. Both these
                languages&nbsp;can be […]</p>

              <Link className="read-more-link" to="/blog/javascript-compared-to-php-series"> Read
                More...</Link>
            </div>


            <div className="blog-inner-wrap">
              <h1>Add a slideshow to your Magento 2 site using the Ultimo theme</h1>

              <p>When it comes to picking a good theme as a starting point, the Ultimo theme seems to be the one we go
                with the most. It does come with some advanced admin modules and it’s extremely customizable. Making it
                the number one selling Magento theme on themeforest.net. Ultimo is equipped with administrative module
                which gives […]</p>

              <Link className="read-more-link" to="/blog/magento-2-ultimo-slideshow"> Read More...</Link>
            </div>

          </div>

          <Link style={{display: "none"}} className="blog-btn" to="/blog">More Blogs</Link>
        </section>
)

export default Blog
