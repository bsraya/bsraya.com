import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
                name
                link
            }
          }
        }
      }
    `)

  return (
    <div itemScope itemType="http://schema.org/Layout">
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <main className="container">
          {children}
        </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout