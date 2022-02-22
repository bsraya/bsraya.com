import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFound() {
  return (
    <Layout itemScope itemType="http://schema.org/NotFound">
      <Seo title="404: Not Found" type="website" slug="/404/" />
      <h1>404: Not found, try again.</h1>
      <iframe title="Screaming beaver" src="https://giphy.com/embed/ZDOXnhXvESwSY" width="480" height="405" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </Layout>
  )
}