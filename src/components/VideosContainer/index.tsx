'use client'

import React, { useState, useEffect } from 'react'
import { fetchMedias } from '@/lib/actions'
import { Medias } from '@/lib/global'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Loading } from '..'
import styles from './videosContainer.module.css'

export default function VideosContainer() {
  const [medias, setMedias] = useState<Medias[]>([])
  const pathname = usePathname()

  async function populateMedias() {
    const response = await fetchMedias(`mediaKind=video`)
    setMedias(response)
  }

  useEffect(() => {
    populateMedias()
  }, [])

  // Function to extract YouTube video ID from URL
  function getYouTubeVideoId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    } else {
      return null
    }
  }

  // Function to generate YouTube thumbnail URL

  function getYouTubeThumbnailUrl(videoId: string) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return (
    <div
      className={
        pathname === '/' ? styles.videoContainerHome : styles.videoContainer
      }
    >
      {medias.length > 0 ? (
        medias.map((media: Medias, key: number) => {
          const videoId = getYouTubeVideoId(media.mediaLink as string)
          const thumbnailUrl = videoId ? getYouTubeThumbnailUrl(videoId) : null

          return (
            <div
              className={
                pathname === '/' ? styles.videoCardHome : styles.videoCard
              }
              key={key}
              style={
                thumbnailUrl ? { backgroundImage: `url(${thumbnailUrl})` } : {}
              }
            >
              <p className={styles.videoTitle}>{media.title}</p>
              <Link className={styles.videoButton} href={media.mediaLink}>
                WATCH
              </Link>
            </div>
          )
        })
      ) : (
        <Loading />
      )}
    </div>
  )
}
