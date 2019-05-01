import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainForm from "../components/mainForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainForm />
  </Layout>
)

export default IndexPage
