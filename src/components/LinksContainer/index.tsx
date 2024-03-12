'use client'

import { fetchMedias } from '@/lib/actions'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Medias } from '@/lib/global'
import Link from 'next/link'
import styles from './linksContainer.module.css'
import { Loading } from '..'

export default function LinksContainer() {
  const [medias, setMedias] = useState<Medias[]>([])
  const pathname = usePathname()

  async function populateMedias() {
    const response = await fetchMedias(`mediaKind=link`)
    setMedias(response)
  }

  useEffect(() => {
    populateMedias()
  }, [])

  return (
    <div
      className={
        pathname === '/' ? styles.linksContainerHome : styles.linksContainer
      }
    >
      {medias.length > 0 ? (
        medias.map((media: Medias, key: number) => (
          <div
            className={pathname === '/' ? styles.linkCardHome : styles.linkCard}
            key={key}
          >
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
        ))
      ) : (
        <Loading />
      )}
    </div>
  )
}
