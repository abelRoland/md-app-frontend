'use client'
import TipsContainer from '@/components/TipsContainer'
import VideosHome from '@/components/VideosHome'
import styles from './home.module.css'
import Link from 'next/link'
import LinkHome from '@/components/LinkHome'
import { Users } from '@/lib/global'
import { useState, Suspense, useEffect } from 'react'

type HomeProps = {
  user: Users
}

export default function Home({ user }: HomeProps) {
  return (
    <>
      <div className={styles.headerPage}>
        <h1>{`Hello ${user.name}`}</h1>
      </div>
      <div className={styles.tipsContainer}>
        <div className={styles.tipsHeader}>
          <h2 className={styles.tipHeader}>Tips For you</h2>
          <Link className={styles.seeAllTipsButton} href="/tips">
            SEE ALL
          </Link>
        </div>
        <TipsContainer />
      </div>
      <div className={styles.headerMedia}>
        <h2>Videos & Links</h2>
      </div>
      <div className={styles.videosContainer}>
        <VideosHome />
        <div className={styles.videoContainerFooter}>
          <Link
            className={styles.seeAllVideosButton}
            href="/videos?mediaKind=video"
          >
            SEE ALL
          </Link>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <LinkHome />

        <div className={styles.videoContainerFooter}>
          <Link
            className={styles.seeAllVideosButton}
            href="/links?mediaKind=link"
          >
            SEE ALL
          </Link>
        </div>
      </div>
    </>
  )
}
