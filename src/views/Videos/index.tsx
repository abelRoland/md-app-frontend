import styles from './videos.module.css'
import VideosContainer from '@/components/VideosContainer'

export default function VideoView() {
  return (
    <>
      <h1 className={styles.headerPage}>All Videos</h1>
      <div className={styles.contentContainer}>
        <VideosContainer />
      </div>
    </>
  )
}
