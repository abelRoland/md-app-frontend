import NavbarNavigation from '../NavbarNavigation'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <NavbarNavigation />
      <p className={styles.navbarText}>User Name</p>
    </div>
  )
}
