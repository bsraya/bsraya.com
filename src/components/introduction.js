import React from 'react'
import Line from './line'
import ExternalLink from './externallink'

export default function Introduction({ author, link, email }) {
  return (
    <div style={{ marginBottom: `3rem`}}>
      <h1 className="sectionTitle">Introduction</h1>
      <Line />
      <article itemScope itemType="http://schema.org/About">
        <p>
          I am <span itemProp="author" itemType="http://schema.org/Author">{author}</span>, a graduate Computer Science student at <ExternalLink address="https://www.nthu.edu.tw" title="National Tsing Hua University" /> in Hsinchu, Taiwan.
        </p>
        <p>
          For now, I am working on an anomaly detection technique using deep learning as my research topic and a distributed deep learning system in a heterogeneous GPU cluster.
        </p>
      </article>
    </div>
  )
}