import { Metadata } from 'next'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'MG App',
  description:
    'The app page for the people with MG that are looking for some advices and support.',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.screenContainer}>
      <nav className={styles.navbar}>NAVBAR</nav>
      <aside className={styles.sidebar}>SIDEBAR</aside>
      {children}
    </div>
  )
}
