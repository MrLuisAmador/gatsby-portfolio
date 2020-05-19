import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/posts/post-link"
import SecondLayout from "../components/layout/second-layout"
import SEO from "../components/seo"

const Blog = ({
   data: {
     allMarkdownRemark: { edges },
   },
 }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <SecondLayout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <div>{Posts}</div>
    </SecondLayout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`