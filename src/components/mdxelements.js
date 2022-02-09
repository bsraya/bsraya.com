import React from "react"
import * as styles from './mdxelements.module.css'

const MdxElements = {
  hr: () => <hr className={styles.hr} />, 
  li: (props) => <li {...props} className={styles.li} />,
  p: ({ children, props }) => <p {...props} className={styles.p}>{children}</p>,
  ol: ({ children, props }) => <ol {...props} className={styles.ol}>{children}</ol>,
  ul: ({ children, props }) => <ul {...props} className={styles.ul}>{children}</ul>,
  h1: ({ children, props }) => <h1 {...props} className={styles.headers}>{children}</h1>,
  h2: ({ children, props }) => <h2 {...props} className={styles.headers}>{children}</h2>,
  h3: ({ children, props }) => <h3 {...props} className={styles.headers}>{children}</h3>,
  h4: ({ children, props }) => <h4 {...props} className={styles.headers}>{children}</h4>,
  h5: ({ children, props }) => <h5 {...props} className={styles.headers}>{children}</h5>,
  h6: ({ children, props }) => <h6 {...props} className={styles.headers}>{children}</h6>,
  strong: ({ children, props }) => <strong {...props} className={styles.strong}>{children}</strong>,
  table: ({ children, props }) =>
    <div className={styles.container}>
      <table {...props} className={styles.table}>
        {children}
      </table>
    </div>,
}

export default MdxElements