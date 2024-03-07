'use client'
import React from 'react'

export default function VideoContainer({ params }: { params: { id: string } }) {
  const videoId = params.id

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  )
}
