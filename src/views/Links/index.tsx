import MediasContainer from '@/components/MediasContainer'
import styles from './links.module.css'

export default function LinksView() {
  return (
    <>
      <h1 className={styles.headerPage}>All Links</h1>
      <div className={styles.contentContainer}>
        <MediasContainer />
      </div>
    </>
  )
}
