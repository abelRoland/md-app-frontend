import TipsContainer from '@/components/TipsContainer'
import styles from './tips.module.css'

export default function Tips() {
  return (
    <>
      <h1 className={styles.headerPage}>All Tips</h1>
      <div className={styles.contentContainer}>
        <TipsContainer />
      </div>
    </>
  )
}
