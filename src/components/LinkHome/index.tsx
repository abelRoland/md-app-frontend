'use client'

import { fetchMedias } from '@/lib/actions'
import React, { useState, useEffect } from 'react'
import { Medias } from '@/lib/global'
import Link from 'next/link'
import styles from './linksHome.module.css'

export default function LinkHome() {
  const [medias, setMedias] = useState<Medias[]>([])

  async function populateMedias() {
    const response = await fetchMedias(`mediaKind=link`)
    setMedias(response)
  }

  useEffect(() => {
    populateMedias()
  }, [])

  return (
    <div className={styles.linksContainer}>
      {medias.map((media: Medias, key: number) => {
        return (
          <div className={styles.linkCard} key={key}>
            <p className={styles.linkTitle}>{media.title}</p>
            <p className={styles.linkDescription}>{media.description}</p>
            <Link
              className={styles.linkButton}
              href={media.mediaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT
            </Link>
          </div>
        )
      })}
    </div>
  )
}
