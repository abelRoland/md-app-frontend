'use client'
import styles from './navbar.module.css'
import NavbarNavigation from '../NavbarNavigation'
import { useUser } from '@/hooks/use-user'
import { redirect } from 'next/navigation'

export default function Navbar() {
  const { user } = useUser()
  if (!user._id) {
    return redirect('/auth')
  }
  return (
    <div className={styles.navbarContainer}>
      <NavbarNavigation />
      <p className={styles.navbarText}>{user.name}</p>
    </div>
  )
}
