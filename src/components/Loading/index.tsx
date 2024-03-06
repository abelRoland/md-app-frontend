import styles from './loading.module.css'
import { LoadTop } from '@/lib/constants'

type LoadPosition = 'fixed' | 'relative'

type LoadProps = {
  loadTop: LoadTop
  loadPosition?: LoadPosition
}

export default function Loading({
  loadTop,
  loadPosition = 'fixed',
}: LoadProps) {
  return (
    <div
      className={`${styles.load} ${styles[loadPosition]} ${styles[loadTop]}`}
    />
  )
}
