import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import SecondLayout from "../components/layout/second-layout"

import "../components/contact/success.scss"

export default () => (
  <SecondLayout>
    <SEO title="Success" description="Luis Amador success page" />

    <section className="success-container">
      <h2>Thank you for reaching out.</h2>
      <h3>I'll be getting back to you shortly</h3>
      <p>Return back to <Link className="home-link" to="/">home</Link></p>
    </section>
  </SecondLayout>
)