import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => (
  <div>
    <Head title="Home"></Head>
    <Layout>
      <h1>Hello</h1>
      <h2>I'm andrew</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  </div>
)
export default IndexPage
