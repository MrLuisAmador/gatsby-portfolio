import React from "react"
import { Link } from "gatsby"
import "./post-link.scss"

const PostLink = ({ post }) => (
  <article className="article-container">
    <h2 className="article-title">{post.frontmatter.title}</h2>
    <span className="article-date">{post.frontmatter.date}</span>
    <p className="article-excerpt">{post.excerpt}</p>
    <Link className="article-link" to={post.frontmatter.slug}>Read More...</Link>
  </article>
)

export default PostLink