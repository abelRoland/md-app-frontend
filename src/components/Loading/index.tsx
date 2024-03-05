import styles from './loading.module.css'
import { LoadTop } from '@/lib/constants'

type LoadProps = {
  loadTop: LoadTop
}

export default function Loading({ loadTop }: LoadProps) {
  return <div className={`${styles.load} ${styles[loadTop]}`} />
}
