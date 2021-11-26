import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout itemScope itemType="http://schema.org/NotFound">
      <Seo title="404: Not Found" type="website" slug="/404/" />
      <h1>404: Not found, try again</h1>
    </Layout>
  )
}