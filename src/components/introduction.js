import React from 'react'
import ExternalLink from './externallink'

export default function Introduction({ author, email }) {
  return (
    <article style={{ marginBottom: `3rem`}} itemScope itemType="http://schema.org/About" >
      <h1>About Me</h1>
      <p>
        Hey, I am <span itemProp="author" itemType="http://schema.org/Author">{author}</span>!
        I am a graduate Computer Science student at <ExternalLink address="https://www.nthu.edu.tw" title="National Tsing Hua University" /> in Hsinchu, Taiwan.
        So far, I have been living in Taiwan for six years, and I am on my way to get my master's degree in Computer Science.
      </p>
      <h5>What do I do?</h5>
      <p>
        I have been doing Frontend Development since my third year in undergraduate, and ML/DL related projects in my fourth year. 
        However, I wanted to expand my knowledge into Backend Developement when I started my Master's Degree because I wanted to know how data are made and passed from user interfaces then back to the database to be processed to improve user experience.
      </p>
      <p>
        For now, I have been working mostly on a Backend system that controls how and when ML/DL models should be run for my thesis.
      </p>
      <h5>Why do I blog?</h5>
      <p>
        As a software engineer, I am required to learn as much as I can in the shortest amount of time as possible.
        Sometimes I can't retain so much information for a longer period of time if I don't use it too often.
        So, I will make this blog as a kind of a notebook where, not only me, everyone can learn and use for reference.
      </p>
      <p>
        I hope that everyone will find some of the posts useful.
        If you find errors in one of the post or that one of my posts interesting, I welcome emails or comments so long that they are relevant to the topic of the post.
      </p>
      <h5>How to find me?</h5>
      <p>
        You can email me at <a className="external-link" itemProp="authorEmail" itemType="http://schema.org/AuthorEmail" href={`mailto:${email}`}>{email}</a>, or you can find me on Github at <ExternalLink address="https://github.com/nathansetyawan96" title="nathansetyawan96" />.
      </p>
    </article>
  )
}