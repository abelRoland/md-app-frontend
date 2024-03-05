'use client'

import { fetchMedias } from '@/lib/actions'
import React, { useState, useEffect } from 'react'
import { Medias } from '@/lib/global'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from './mediasContainer.module.css'

export default function MediasContainer() {
  const [medias, setMedias] = useState<Medias[]>([])
  const queryParams = useSearchParams()
  const mediaKind = queryParams.get('mediaKind')

  async function populateMedias() {
    const response = await fetchMedias(`mediaKind=${mediaKind}`)
    setMedias(response)
  }

  useEffect(() => {
    populateMedias()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.mediaFlow}>
      {medias.map((media, key) => (
        <div className={styles.mediaCard} key={key}>
          <p className={styles.mediaTitle}>{media.title}</p>
          <p className={styles.mediaDescription}>{media.description}</p>
          <Link
            className={styles.mediaButton}
            href={media.mediaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </Link>
        </div>
      ))}
    </div>
  )
}
