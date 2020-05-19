import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import About from "../components/about/about"
import Skills from "../components/skills/skills"
import Projects from "../components/projects/projects"
import BlogWidget from "../components/blog/blog-widget"
import Contact from "../components/contact/contact"

// import Image from "../components/image"
import SEO from "../components/seo"

import '../components/normalize.scss'
import '../components/variables.scss'
import '../components/global.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <About />
    <Skills />
    <Projects />
    <BlogWidget />
    <Contact />
  </Layout>
)

export default IndexPage
