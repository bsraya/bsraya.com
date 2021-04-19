import React from "react"

const MarkdownElements = {
  ol: ({children}) => 
    <ol style={{marginLeft: `2.5em`}}>{children}</ol>,
  li: (props) =>
    <li {...props} style={{ fontSize: `1em`, margin: `0` }} />,
  hr: () =>
    <hr style={{ borderTop: `2px solid #fff1d0` }} />,
  h1: ({ children, props }) =>
    <h1 {...props} className="md-headers" style={{ fontSize: `35px` }}>{children}</h1>,
  h2: ({ children, props }) =>
    <h2 {...props} className="md-headers" style={{ fontSize: `32px` }}>{children}</h2>,
  h3: ({ children, props }) =>
    <h3 {...props} className="md-headers" style={{ fontSize: `29px` }}>{children}</h3>,
  h4: ({ children, props }) =>
    <h4 {...props} className="md-headers" style={{ fontSize: `26px` }}>{children}</h4>,
  h5: ({ children, props }) =>
    <h5 {...props} className="md-headers" style={{ fontSize: `23px` }}>{children}</h5>,
  h6: ({ children, props }) =>
    <h6 {...props} className="md-headers" style={{ fontSize: `21px` }}>{children}</h6>,
  table: ({ children, props }) =>
    <div style={{ overflowX: `auto`, marginBottom: `20px` }}>
      <table {...props} style={{ margin: `auto` }}>
        {children}
      </table>
    </div>,
  inlineCode: (props) =>
    <code {...props}
      style={{
        fontSize: `1rem`,
        whiteSpace: `nowrap`,
        fontFamily: [`Share`, `sans-serif`],
        color: `#FE4450`,
        padding: `0.1rem 0.3rem`,
        backgroundColor: `#262335`,
        borderRadius: `10px`,
      }}
    />,
}

export default MarkdownElements