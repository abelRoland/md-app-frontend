import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import styles from './layout.module.css'
import SideNav from '@/components/sidenav'

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
      <nav className={styles.navbar}>
        <Navbar />
      </nav>
      <aside className={styles.sidebar}>
        <SideNav />
      </aside>
      {children}
    </div>
  )
}
