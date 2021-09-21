import React from 'react'

export default function ExternalLink({ address, title }) {
  return (
    <a
      itemProp="url"
      itemType="http://schema.org/Url"
      href={address}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {title}
    </a>
  )
}