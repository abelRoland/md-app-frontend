import styles from './home.module.css'
import Link from 'next/link'
import { useState, Suspense, useEffect } from 'react'

export default function Home() {
  return (
    <>
      <div className={styles.headerPage}>
        <h1>Hello</h1>
      </div>
      <div className={styles.tipsContainer}>
        <div className={styles.tipsHeader}>
          <h2 className={styles.tipHeader}>Tips For you</h2>
          <Link className={styles.seeAllTipsButton} href="/tips">
            SEE ALL
          </Link>
        </div>
        {/* Make Tip Container Component */}
        <h3>Tips List</h3>
      </div>
      <div className={styles.headerMedia}>
        <h2>Videos & Links</h2>
      </div>
      <div className={styles.videosContainer}>
        {/* Make Videos Container Component */}
        <h3>Videos List</h3>
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
        {/* Make Videos Container Component */}
        <h3>Links List</h3>

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
