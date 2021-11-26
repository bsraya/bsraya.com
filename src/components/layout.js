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
    <main itemScope itemType="http://schema.org/Layout">
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <div style={{ margin: `2rem 0 0 0` }}>
          {children}
      </div>
      {/* <div style={{ background: `yellow`, position: `fixed`, bottom: 50, right: 50 }}>
        <span style={{ color: `white` }}>hey</span>
      </div> */}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout