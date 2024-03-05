import MediasContainer from '@/components/MediasContainer'
import styles from './videos.module.css'

export default function VideoView() {
  return (
    <>
      <h1 className={styles.headerPage}>All Videos</h1>
      <div className={styles.contentContainer}>
        <MediasContainer />
      </div>
    </>
  )
}
