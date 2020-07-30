import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>About</h1>
      <p>I'm new to Gatsby</p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default AboutPage
