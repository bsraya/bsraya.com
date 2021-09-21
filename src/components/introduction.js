import React from 'react'
import ExternalLink from './externallink'

export default function Introduction({ author, link, email }) {
  return (
    <div style={{ marginBottom: `3rem`}}>
      <h1>About Me</h1>
      <article itemScope itemType="http://schema.org/About">
        <p>
          Hey, I am <span itemProp="author" itemType="http://schema.org/Author">{author}</span>!
          I am a graduate Computer Science student at <ExternalLink address="https://www.nthu.edu.tw" title="National Tsing Hua University" /> in Hsinchu, Taiwan.
        </p>
        <p>
          I am from Indonesia, and I spent most of my teenage period there.
          After graduation, I decided to come to Taiwan even though not knowing how to speak a word in Chinese.
          For now, I have been living in Taiwan for six years to pursue my goal to be a software engineer.
        </p>
      </article>
    </div>
  )
}