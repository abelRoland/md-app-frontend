import styles from './links.module.css'
import LinksContainer from '@/components/LinksContainer'

export default function LinksView() {
  return (
    <>
      <h1 className={styles.headerPage}>All Links</h1>
      <div className={styles.contentContainer}>
        <LinksContainer />
      </div>
    </>
  )
}
