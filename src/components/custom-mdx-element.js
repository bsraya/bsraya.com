import React from "react"

const CustomMdxElements = {
  hr: () =>
    <hr style={{ borderTop: `2px solid #fff1d0` }} />,
  ol: ({children, props}) => 
    <ol {...props} style={{marginLeft: `1.5rem`}}>{children}</ol>,
  ul: ({children, props}) => 
    <ul {...props} style={{marginLeft: `1rem`}}>{children}</ul>,
  li: (props) =>
    <li {...props} style={{ fontSize: `1rem`, margin: `0` }} />,
  h1: ({ children, props }) =>
    <h1 {...props} className="md-headers">{children}</h1>,
  h2: ({ children, props }) =>
    <h2 {...props} className="md-headers">{children}</h2>,
  h3: ({ children, props }) =>
    <h3 {...props} className="md-headers">{children}</h3>,
  h4: ({ children, props }) =>
    <h4 {...props} className="md-headers">{children}</h4>,
  h5: ({ children, props }) =>
    <h5 {...props} className="md-headers">{children}</h5>,
  h6: ({ children, props }) =>
    <h6 {...props} className="md-headers">{children}</h6>,
  table: ({ children, props }) =>
    <div style={{ overflowX: `auto`, marginBottom: `1rem` }}>
      <table {...props} style={{ margin: `auto` }}>
        {children}
      </table>
    </div>,
  inlineCode: (props) =>
    <code {...props}
      style={{
        fontSize: `1rem`,
        whiteSpace: `nowrap`,
        fontFamily: `Share, sans-serif`,
        color: `#FE4450`,
        padding: `0.1rem 0.3rem`,
        backgroundColor: `#262335`,
        borderRadius: `10px`,
      }}
    />,
}

export default CustomMdxElements