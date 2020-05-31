import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import "./blog-widget.scss"

const BlogWidget = () => {
  return (
    <StaticQuery
      query={ graphql`
        query HeadingQuery {
           allMarkdownRemark(limit: 2) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                  excerpt
                  date
                }
              }
            }
          }
        }
      `}
      render={ data => (
        <section id="blog" className="scrollto">
          <h1 className="blog-title">Latest Blog</h1>

          <div className="blog-outer-wrap">

            <div className="blog-inner-wrap">
              <h1>{ data.allMarkdownRemark.edges[0].node.frontmatter.title }</h1>

              <p>{ data.allMarkdownRemark.edges[0].node.frontmatter.excerpt } […]</p>

              <Link className="read-more-link" to={data.allMarkdownRemark.edges[0].node.frontmatter.slug}> Read
                More...</Link>
            </div>

            <div className="blog-inner-wrap">
              <h1>{ data.allMarkdownRemark.edges[1].node.frontmatter.title }</h1>

              <p>{ data.allMarkdownRemark.edges[1].node.frontmatter.excerpt } […]</p>

              <Link className="read-more-link" to={data.allMarkdownRemark.edges[1].node.frontmatter.slug}> Read More...</Link>
            </div>

          </div>

          <Link className="blog-btn" to="/blog">More Blogs</Link>
        </section>
      )}
    />
  )
}

export default BlogWidget
