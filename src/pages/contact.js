import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"></Head>
      <h1>Contact</h1>
      <p>
        Find me on LinkedIn
        <a href="https://www.linkedin.com/in/jayanthboddu/">Profile</a>
        <Link to="https://www.linkedin.com/in/jayanthboddu/">Profile</Link>
      </p>
    </Layout>
  )
}

export default ContactPage
