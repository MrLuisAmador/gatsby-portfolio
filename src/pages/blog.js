import React from "react"
import { Link } from "gatsby"

import SecondLayout from "../components/layout/second-layout"
import SEO from "../components/seo"

const Blog = () => (
  <SecondLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </SecondLayout>
)

export default Blog
