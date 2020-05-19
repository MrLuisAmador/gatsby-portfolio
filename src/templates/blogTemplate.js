import React from "react"
import { graphql } from "gatsby"

import SecondLayout from "../components/layout/second-layout"
import "./blogTemplate.scss"

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
 }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <SecondLayout>
      <article className="blog-content">
        <div className="blog-post">
          <div className="blog-post-header">
            <h1>{frontmatter.title}</h1>
          </div>

          <div
            className="entry-content blog-entry"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <h5>{frontmatter.date}</h5>
      </article>
    </SecondLayout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`